<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'

	import touch from '../../images/touch.png'
</script>

<svelte:head>
	<link rel="canonical" href={$page.url.href} />

	<link rel="manifest" href="{base}/manifest.webmanifest" />
	<link rel="sitemap" href="{base}/sitemap.xml" type="application/xml" />

	<meta name="theme-color" content="white" />
	<link rel="apple-touch-icon" href={touch} />

	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content="u.cr" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@u.cr" />
	<meta name="twitter:creator" content="@u.cr" />
	<meta name="twitter:domain" content={$page.url.host} />
	<meta name="twitter:url" content={$page.url.href} />
</svelte:head>
