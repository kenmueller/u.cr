<script lang="ts">
	export let value = 'u.cr - the shortest urls'
</script>

<svelte:head>
	<title>{value}</title>
	<meta property="og:title" content={value} />
	<meta name="twitter:title" content={value} />
</svelte:head>
