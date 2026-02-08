<script lang="ts">
	import Card from '../../../components/Card.svelte';
	export let data;
	const parseDate = (d: Date) => new Date(d).toLocaleString('ja-JP');
</script>

<div class="mx-4 my-6 space-y-8 md:mx-auto md:w-2xl">
	<Card>
		<h1>5seg's blog</h1>
		<div class="px-6 text-start">
			<div class="mb-2">
				<h1>{data.title}</h1>
				<p class="font-mono text-gray-500">{parseDate(data.publishedAt)}</p>
			</div>
			<div class="">
				{@html data.content}
			</div>
		</div>
	</Card>
</div>
