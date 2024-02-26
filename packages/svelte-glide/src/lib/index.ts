// Reexport your entry components here
import type { Options } from '@glidejs/glide';

export type { Options } from '@glidejs/glide';

export { glide } from './utils/action';

export type GlideProps = {
    options: Partial<Options>;
}

export * as Glide from './components/Glide.svelte';
export * as GlideSlide from './components/GlideSlide.svelte';
export * as GlideTrack from './components/GlideTrack.svelte';
export * as GlideControls from './components/GlideControls.svelte';
export * as GlideSlides from './components/GlideSlides.svelte';
export * as GlideBullets from './components/GlideBullets.svelte';
