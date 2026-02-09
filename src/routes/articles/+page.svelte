<script lang="ts">
	import Card from '../../components/Card.svelte';
	export let data;
	const parseDate = (d: Date) => new Date(d).toLocaleString('ja-JP');
</script>

<div class="mx-4 my-6 space-y-8 md:mx-auto md:w-lg">
	<Card>
		<h1 class="mb-6 text-white">5seg's blog</h1>

		<div class="mx-6 flex items-center justify-between font-mono tracking-tighter">
			<p>{data.meta.pagination.total} posts available.</p>
			<p class="text-gray-400">
				Page: {data.meta.pagination.page}/{data.meta.pagination.pageCount}
			</p>
		</div>
		{#each data.data as post}
			<div class="mx-4 my-2">
				<a href="/articles/{post.documentId}">
					<div
						class="rounded-xl border border-red-800 p-4 text-start transition-colors hover:border-red-700"
					>
						<p class="font-mono text-gray-500">{parseDate(post.publishedAt)}</p>
						<h3>{post.title}</h3>
					</div>
				</a>
			</div>
		{/each}
		{#if data.meta.pagination.pageCount !== 1}
			<div class="mx-6 flex items-center justify-between font-mono">
				{#if data.meta.pagination.page !== 1}
					<a href="/articles?page={data.meta.pagination.page - 1}"
						>{'<'} Page {data.meta.pagination.page - 1}</a
					>
				{:else}
					<!-- dummy element -->
					<div></div>
				{/if}
				{#if data.meta.pagination.page !== data.meta.pagination.pageCount}
					<a href="/articles?page={data.meta.pagination.page + 1}"
						>Page {data.meta.pagination.page + 1} {'>'}</a
					>
				{/if}
			</div>
		{/if}
		<hr class="mt-4 mb-2 border border-red-800/50 text-transparent" />
		<a href="/">戻る ↩️ </a>
		<hr class="mt-2 mb-4 border border-red-800/50 text-transparent" />
	</Card>
</div>
