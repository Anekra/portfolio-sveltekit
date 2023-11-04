import { BUCKET, KEY, PREFIX1, PREFIX2, REGION, SECRET } from '$env/static/private';
import { GetObjectCommand, S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ setHeaders }) => {
	const myS3 = new S3Client({
		region: REGION,
		credentials: { accessKeyId: KEY, secretAccessKey: SECRET }
	});
	try {
		const images = await myS3.send(new ListObjectsV2Command({ Bucket: BUCKET, Prefix: PREFIX1 }));
		const filteredImages = images.Contents?.filter((image) => image.Key !== PREFIX1);
		const imagesUrls = await Promise.all(
			(filteredImages || []).map(async (image) => {
				const signedUrls = await getSignedUrl(
					myS3,
					new GetObjectCommand({ Bucket: BUCKET, Key: image.Key }),
					{ expiresIn: 86400 }
				);
				return signedUrls;
			})
		);
		const certificates = await myS3.send(
			new ListObjectsV2Command({ Bucket: BUCKET, Prefix: PREFIX2 })
		);
		const filteredCertificates = certificates.Contents?.filter(
			(cert) => cert.Key !== PREFIX2 && !cert.Key?.startsWith(`${PREFIX2}t_`)
		);
		const certificatesUrls = await Promise.all(
			(filteredCertificates || []).map(async (cert) => {
				const signedUrls = await getSignedUrl(
					myS3,
					new GetObjectCommand({ Bucket: BUCKET, Key: cert.Key }),
					{ expiresIn: 3600 }
				);
				return signedUrls;
			})
		);
		const filteredCertThumbnails = certificates.Contents?.filter(
			(cert) => cert.Key !== PREFIX2 && cert.Key?.startsWith(`${PREFIX2}t_`)
		);
		const certThumbnailUrls = await Promise.all(
			(filteredCertThumbnails || []).map(async (cert) => {
				const signedUrls = await getSignedUrl(
					myS3,
					new GetObjectCommand({ Bucket: BUCKET, Key: cert.Key }),
					{ expiresIn: 3600 }
				);
				return signedUrls;
			})
		);
		setHeaders({ 'cache-control': 'private, max-age=3500' });
		return {
			images: imagesUrls,
			certificates: certificatesUrls,
			certThumbnails: certThumbnailUrls
		};
	} catch (err) {
		return { error: err };
	}
};
