<script>
	import photo from '$lib/assets/images/portfolio_profile1.png';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import { theme as darkMode } from '$lib/stores/theme';
	import { handleFocus } from '$lib/utils/handleFocus';
	import { handleHover } from '$lib/utils/handleHover';

	$: color = `${$darkMode ? 'white' : ''}`;
</script>

<section class="relative" id="homeMainSection">
	<GradientBackground
		mainColor={$darkMode ? '#0F1A19' : '#73ACCA'}
		secondaryColor={$darkMode ? '#214550' : '#C7D9E2'}
	/>
	<div class="flex items-center pt-16">
		<article class="flex w-1/2 flex-col px-44 py-8">
			<h2
				class="w-fit text-2xl font-bold text-onPrimary dark:text-secondary"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			>
				Hi, I'm
			</h2>
			<div class="typing font-sans" style="--textColor:{color};" />
			<p
				class="w-[280px] pt-2 text-lg text-onPrimary dark:text-secondary"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			>
				I like to develop web and android applications from the ground up starting from initial
				requirement analysis through to design, implementation, deployment and ongoing maintenance.
			</p>
		</article>
		<div class="flex-grow">
			<img
				src={photo}
				alt="Main Profile"
				class="max-h-[calc(100vh-64px)] w-fit cursor-default align-bottom grayscale transition-[filter] duration-300 hover:filter-none"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	$strings: ('Andika Eka Putra' 'a Full Stack Web Developer' 'a Android Developer');

	$timeCharTyped: 0.1;
	$timeBetweenTypeAndDelete: 2;
	$timeCharDeleted: 0.08;
	$timeBetweenStrings: 1;

	$charCount: 0;
	$timeTotal: 0;
	@each $string in $strings {
		$charCount: $charCount + str-length($string);
		$timeTotal: $timeTotal +
			(str-length($string) * ($timeCharTyped + $timeCharDeleted)) +
			$timeBetweenTypeAndDelete +
			$timeBetweenStrings;
	}
	@function percent($string, $letter, $modifier) {
		$stringsPast: $string - 1;
		$time: 0;
		@while $stringsPast > 0 {
			$time: $time +
				(($timeCharTyped + $timeCharDeleted) * (str-length(nth($strings, $stringsPast)))) +
				$timeBetweenTypeAndDelete +
				$timeBetweenStrings;
			$stringsPast: $stringsPast - 1;
		}
		@if $letter <= str-length(nth($strings, $string)) {
			$time: $time + ($timeCharTyped * ($letter - 1));
		} @else {
			$time: $time +
				($timeCharTyped * str-length(nth($strings, $string))) +
				$timeBetweenTypeAndDelete +
				($timeCharDeleted * ($letter - str-length(nth($strings, $string))));
		}
		@return (calc($time / $timeTotal) * 100 + $modifier) + '%';
	}
	$currentPercentage: 0;

	@keyframes typed {
		@for $i from 1 through length($strings) {
			// @for $j from 1 through (str-length(nth($strings, $i)) * 2 - 1) {
			@for $j from 1 through (str-length(nth($strings, $i)) * 2) {
				/* string #{$i}, char #{$j} */
				@if $j < str-length(nth($strings, $i)) * 2 {
					// not last character deleted
					#{percent($i, $j, 0)},
					#{percent($i, $j+1, -0.001)} {
						@if $j <= str-length(nth($strings, $i)) {
							content: quote(#{str_slice(nth($strings, $i), 1, $j)});
						} @else {
							content: quote(
								#{str_slice(
										nth($strings, $i),
										1,
										str-length(nth($strings, $i)) - ($j - str-length(nth($strings, $i)))
									)}
							);
						}
					}
				} @else {
					@if $i < length($strings) {
						// not last string
						#{percent($i, $j, 0)},
						#{percent($i+1, 1, -0.001)} {
							content: '​'; // zero-width space to retain element height
						}
					} @else {
						// last string
						#{percent($i, $j, 0)},
						100% {
							content: '​'; // zero-width space to retain element height
						}
					}
				}
			}
		}
	}
	@keyframes beam-blink {
		75% {
			border-color: transparent;
		}
	}
	* {
		backface-visibility: hidden;
	}
	.typing {
		display: flex;
		justify-content: flex-start;
		font-size: calc(10px + 2vw);
		color: var(--textColor);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		&::after {
			content: '​';
			position: relative;
			display: inline-block;
			padding-right: 3px;
			border-right: 4px solid var(--textColor);
			text-shadow: 0 0 5px var(--textColor);
			white-space: nowrap;
			animation: typed #{$timeTotal + 's'} linear 1s infinite, beam-blink 1s infinite;
		}
	}
</style>
