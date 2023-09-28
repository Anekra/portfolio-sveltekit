<script>
	export let mainColor = '#296B80';
	export let secondaryColor = '#162538';

	$: colorOne = `${mainColor}`;
	$: colorTwo = `${secondaryColor}`;
</script>

<div class="absolute -z-[1]">
	<div class="blob-background" style="--firstColor:{colorOne}; --secondColor:{colorTwo};">
		<div class="blob-container">
			<div id="blob">
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@keyframes moveVertical {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(50%);
		}
		100% {
			transform: translateY(0);
		}
	}

	.blob-background {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
		background: linear-gradient(40deg, var(--firstColor), var(--secondColor));
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;

		.blob-container {
			width: 100%;
			height: 100%;
		}

		#blob {
			position: absolute;

			width: 100%;
			height: 100%;
			top: calc(50% - 80% / 2);
			left: calc(50% - 80% / 2);

			transform-origin: center center;
			animation: moveVertical 30s ease infinite;

			opacity: 1;
		}
	}
</style>
