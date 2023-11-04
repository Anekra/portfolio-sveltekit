<script>
	import { theme as darkMode } from '$lib/stores/theme';

	$: color = `${$darkMode ? 'white' : ''}`;

	export let /** @type {string} */ image;
</script>

<div
	class="bg-gradient-to-r from-[#73ACCA] to-[#C7D9E2] px-8 pt-16 dark:from-[#0F1A19] dark:to-[#214550] md:h-screen md:px-16 lg:mb-12 lg:px-36 xl:px-44"
	id="homeMainSection"
	style="--firstColor:{$darkMode ? '#0F1A19' : '#73ACCA'}; --secondColor:{$darkMode
		? '#214550'
		: '#C7D9E2'};"
>
	<div class="main-container h-full flex mobile:flex-col items-center justify-between">
		<article class="text-container flex flex-col sm:py-8 mobile:order-2">
			<h2 class="w-20 font-bold text-onPrimary dark:text-secondary sm:text-2xl">Hi, I'm</h2>
			<div class="typing font-sans" style="--textColor:{color};" />
			<p class="w-[250px] mobile:w-full pt-2 text-sm text-onPrimary dark:text-secondary sm:w-[270px] sm:text-lg">
				I like to develop web and android applications from the ground up starting from initial
				requirement analysis through to design, implementation, deployment and ongoing maintenance.
			</p>
		</article>
		<div class="profile-container sm:self-end mobile:!static mobile:order-1">
			<img
				src={image}
				alt="Main Profile"
				class="max-h-[calc(100vh-64px)] grayscale transition-[filter] duration-300 hover:filter-none"
			/>
		</div>
	</div>
</div>

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
		height: calc(20px + 2vw);
		justify-content: flex-start;
		font-size: calc(10px + 2vw);
		color: var(--textColor);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		&::after {
			content: '​';
			position: absolute;
			display: inline-block;
			padding-right: 3px;
			border-right: 4px solid var(--textColor);
			text-shadow: 0 0 5px var(--textColor);
			white-space: nowrap;
			animation: typed #{$timeTotal + 's'} linear 1s infinite, beam-blink 1s infinite;
		}
	}

	@media (max-width: 485px) {
		.text-container {
			display: flex;
			padding: 28px 0px 28px 28px;
			width: 100%;
		}
		.text-container h2 {
			width: 60px;
		}
		.text-container div.typing {
			left: 78px;
			top: 14px;
		}
		.text-container p {
			max-width: 100%;
		}
		.profile-container {
			position: absolute;
			right: 5%;
			height: 140px;
			width: 140px;
			clip-path: circle();
		}
	}
</style>
