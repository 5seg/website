<script>
	const { children } = $props();
</script>

<div
	class="box-shadow-center rounded-xl bg-black/25 py-6 shadow-red-600 transition-all hover:bg-black/20 hover:shadow-red-500"
>
	{@render children?.()}
</div>
