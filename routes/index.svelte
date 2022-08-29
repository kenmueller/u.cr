<script lang="ts">
	import MetaImage from '../components/Meta/Image.svelte'
	import MetaTitle from '../components/Meta/Title.svelte'
	import MetaDescription from '../components/Meta/Description.svelte'
</script>

<MetaImage />
<MetaTitle />
<MetaDescription />

<main>
	<h1>u.cr</h1>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	h1 {
		text-align: center;
	}
</style>
