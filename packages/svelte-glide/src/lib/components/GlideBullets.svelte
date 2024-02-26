<script lang="ts">
	type Props = {
		/**
		 * @description The length of the bullets
		 */
		length: number;
	};

	const { length } = $props<Props>();
</script>

<div class="glide__bullets" data-glide-el="controls[nav]">
	{#each Array.from({ length }, (_, i) => i) as i}
		<button class="glide__bullet" data-glide-dir={`=${i}`}></button>
	{/each}
</div>
