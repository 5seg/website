<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<title>5segments</title>
	<meta name="description" content="空に浮かぶ月を、君と見られる日が来るまで。" />
	<meta name="theme-color" content="#381d24" />
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
