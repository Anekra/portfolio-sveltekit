import { GMAIL_ACCOUNT, GMAIL_TO } from '$env/static/private';
import transporter from '$lib/utils/emailSetup.server';
import { emailRegExCheck } from '$lib/utils/emailRegExCheck';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			const message = formData.get('message');
			const isSendBack = formData.get('bcc');
			const html = `<div style="padding: 0; margin: 0; width: 100%">
			<div
				style="
					padding: 16px;
					margin: 0;
					background-color: #002a60;
					border-radius: 10px 10px 0 0;
				"
			>
				<p
					style="
						font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
							sans-serif;
						line-height: normal;
						text-decoration: none;
						margin: 0;
						font-weight: 900;
						font-size: 32px;
						text-align: center;
						color: #eee;
						padding: 0;
					"
				>
					ANEKRA<span style="font-size: 10px">⚪</span>DEV
				</p>
			</div>
			<div
				style="
					border-radius: 0 0 10px 10px;
					background-color: rgb(230, 241, 255);
					backdrop-filter: blur(5px);
					box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
					padding: 24px;
					border: 1px solid rgba(255, 255, 255, 0.3);
				"
			>
				<div
					style="
						border-radius: 15px;
						background-color: rgba(255, 255, 255, 0.5);
						backdrop-filter: blur(5px);
						box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
						padding: 24px;
						border: 1px solid rgba(255, 255, 255, 0.3);
					"
				>
					<p
						style="
							font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
							font-weight: 500;
							padding: 0;
							margin: 0;
							font-size: 20px;
						"
					>
						Hi you got a message from:
					</p>
					<ul
						style="
							font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
							font-size: 24px;
							padding: 8px 16px 24px 24px;
							margin: 0;
						"
					>
						<li style="list-style-type: circle">
							${name}
							<span style="text-decoration: none">(${email})</span>
						</li>
					</ul>
					<p
						style="
							font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
							font-weight: 500;
							padding: 0;
							margin: 0;
							font-size: 20px;
						"
					>
						Message:
					</p>
					<p
						style="
							font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
							font-size: 18px;
							font-weight: 400;
							padding-top: 8px;
							text-indent: 24px;
							letter-spacing: 0.8px;
							margin: 0;
						"
					>
						${message}
					</p>
				</div>
			</div>
		</div>
		`;

			const formError = {};

			if (!name) formError.name = 'empty name';
			if (!email) formError.email = 'empty email';
			if (!message) formError.message = 'empty message';
			if (email) {
				if (!emailRegExCheck(email)) formError.email = 'invalid email';
			}

			/** @type {import("nodemailer/lib/mailer").Options} */
			const mailOptions = {
				from: GMAIL_ACCOUNT,
				to: GMAIL_TO,
				bcc: isSendBack ? [GMAIL_TO, email ? email?.toString() : ''] : GMAIL_TO,
				subject: 'anekra.dev contact me form response',
				text: message?.toString(),
				html: html
			};

			const sendEmail = async (/** @type {import("nodemailer/lib/mailer").Options} */ message) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.log(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};
			await sendEmail(mailOptions);

			if (Object.keys(formError).length === 0) {
				return { success: true, data: { name, email, message } };
			} else {
				return { success: false, data: { name, email, message }, error: formError };
			}
		} catch (error) {
			return { success: false, error: /** @type {Error} */ (error).message };
		}
	}
};
