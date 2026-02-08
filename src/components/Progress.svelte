<script>
	import Icon from '@iconify/svelte';

	const { label, percentage, iconname } = $props();
</script>

<div class="space-y-3">
	<div class="flex items-center gap-x-2 font-mono">
		<Icon icon={iconname} width="32" height="32" />
		<div class="text-start text-lg tracking-tight">{label} {percentage}%</div>
	</div>
	<div class="flex h-4.5">
		<div
			class="flex-start bg-5seg-dark flex h-2.5 w-full overflow-hidden rounded-full font-sans text-xs font-medium transition-all"
		>
			<div
				class="bg-5seg-white flex h-full items-center justify-center overflow-hidden rounded-full break-all text-white"
				style={`width: ${percentage}%`}
			></div>
		</div>
	</div>
</div>
