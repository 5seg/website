<script lang="ts">
	import Card from '../../../components/Card.svelte';
	export let data;
	const parseDate = (d: Date) => new Date(d).toLocaleString('ja-JP');
	console.log(new Date(data.publishedAt).getTime());
</script>

<div class="mx-4 my-6 space-y-8 md:mx-auto md:w-lg">
	<Card>
		<h1>5seg's blog</h1>
		<div class="px-6 text-start">
			<div>
				<h2>{data.title}</h2>
				<p>{parseDate(data.publishedAt)}</p>
			</div>
			<div>
				{@html data.content}
			</div>
		</div>
	</Card>
</div>
