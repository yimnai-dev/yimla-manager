<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Options } from '@glidejs/glide';
	import { glide } from '../utils/action';
	import SvelteGlide from '$lib/index';

	type GlideProps = {
		options: Partial<Options>;
	} & HTMLAttributes<HTMLDivElement>;

	const { options, ...elementAttr } = $props<GlideProps>();
</script>

<div use:glide={options} {...elementAttr}>
	<SvelteGlide.GlideTrack>
		<SvelteGlide.GlideSlides>
			<slot />
		</SvelteGlide.GlideSlides>
	</SvelteGlide.GlideTrack>
</div>
