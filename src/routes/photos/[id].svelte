<script context="module" lang="ts">
	import { browser } from '$app/env'
	import type { Load } from '@sveltejs/kit'

	// utils/loadImage.ts
	async function loadImage(src: string) {
		await new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => resolve('Loaded')
			img.onerror = () =>
				reject(new Error('Failed to load image'))
			img.src = src
		})
	}

	export const load: Load = async ({ props }) => {
		if (browser) {
			loadImage(props.photo.url)
		}

		return {
			props,
			cache: { maxage: 60 }
		}
	}
</script>

<script lang="ts">
	import type { Photo } from '$lib/types'

	export let photo: Photo
</script>

<h1>{photo.title}</h1>
<img src={photo.url} alt={photo.title} />
