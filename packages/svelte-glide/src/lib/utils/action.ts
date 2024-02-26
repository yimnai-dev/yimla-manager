import Glide, { type Options } from '@glidejs/glide';

export const glide = (element: HTMLElement, options: Partial<Options>) => {
    const compGlide = new Glide(element, options);
    compGlide.mount();
    return {
        update(options: Partial<Options>) {
            compGlide.update(options);
        },
        destroy() {
            compGlide.destroy();
        }
    }
}