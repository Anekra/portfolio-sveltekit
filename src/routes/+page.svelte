<script>
	import AboutSection from './AboutSection.svelte';
	import CertificateSection from './CertificateSection.svelte';
	import MainSection from './MainSection.svelte';
	import PortfolioSection from './PortfolioSection.svelte';
	import SkillSection from './SkillSection.svelte';
	import p1 from '$lib/assets/images/p1.jpg';
	import p2 from '$lib/assets/images/p2.jpg';
	import p3 from '$lib/assets/images/p3.jpg';

	export let data;
	const images = data.images ? (data.images) : [];
	const certificates = data.certificates ? (data.certificates) : [];
	const certThumbnails = data.certThumbnails ? (data.certThumbnails) : [];
</script>

<main class="pb-28">
	<section>
		<MainSection image={images[0]} />
	</section>
	<section>
		<PortfolioSection projects={[p1, p2, p3]} />
	</section>
	<section>
		<AboutSection image={images[1]} />
	</section>
	<section>
		<CertificateSection
			certificates={certificates}
			certThumbnails={certThumbnails}
			educations={[images[2], images[3]]}
		/>
	</section>
	<section>
		<SkillSection />
	</section>
</main>
