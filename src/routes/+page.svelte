<script lang="ts">
	import Card from '../components/Card.svelte';
	import Progress from '../components/Progress.svelte';
	export let data;

	const parseDate = (d: Date) => new Date(d).toLocaleDateString('ja-JP');
</script>

<div class="mx-4 my-6 space-y-8 md:mx-auto md:w-lg">
	<Card>
		<h1 class="text-white">5segments</h1>
		<img src="avatar.avif" class="m-2 mx-auto rounded-full" alt="avatar" />
		<p class="text-xl font-bold">Student / Web Developer</p>
	</Card>
	<Card>
		<h2 class="mb-4">Skills・能力</h2>
		<div class="mx-6 space-y-2">
			<Progress label="NodeJS" percentage="90" iconname="logos:nodejs-icon" />
			<Progress label="TypeScript" percentage="80" iconname="logos:typescript-icon" />
			<Progress label="Ubuntu" percentage="50" iconname="logos:ubuntu" />
			<Progress label="Go" percentage="20" iconname="skill-icons:golang" />
			<Progress label="C" percentage="5" iconname="logos:c" />
		</div>
	</Card>
	<Card>
		<h2 class="mb-4">Hobby・趣味</h2>
		<div class="mx-6 space-y-2">
			<p>ものづくりと写真撮影を趣味とします。</p>
			<p>気分転換にコーヒーを飲むこともあります。</p>
		</div>
	</Card>
	<Card>
		<h2 class="mb-4">最近の記事</h2>
		{#each data.data as post}
			<div class="mx-4 my-2">
				<a href="/#">
					<div class="rounded-xl border border-red-800 p-4 text-start">
						<p class="text-gray-500">{parseDate(post.publishedAt)}</p>
						<h3>{post.title}</h3>
					</div>
				</a>
			</div>
		{/each}
	</Card>
</div>
