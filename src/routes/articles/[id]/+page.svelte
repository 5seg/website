<script lang="ts">
	import Card from '../../../components/Card.svelte';
	export let data;
	const parseDate = (d: Date) => new Date(d).toLocaleString('ja-JP');
</script>

<svelte:head>
	<title>5seg's blog</title>
	<meta name="description" content={data.title} />
</svelte:head>

<div class="mx-4 my-6 space-y-8 md:mx-auto md:w-2xl">
	<Card>
		<div class="px-6 text-start">
			<div class="mb-2">
				<h1>{data.title}</h1>
				<p class="font-mono text-gray-500">{parseDate(data.publishedAt)}</p>
			</div>
			<div>
				{@html data.content}
			</div>
		</div>
		<hr class="mt-4 mb-2 border border-red-800/50 text-transparent" />
		{#if data.fromRoot}
			<a href="/">トップページへ ↩️ </a>
		{:else}
			<a href="/articles">記事一覧 ↩️ </a>
		{/if}
		<hr class="mt-2 mb-4 border border-red-800/50 text-transparent" />
	</Card>
</div>
