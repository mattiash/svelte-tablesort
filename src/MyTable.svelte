<script>
    export let items
</script>

<style>
tbody :global(.red) {
    color: red
}
</style>

<table>
	<thead>
		<slot name="header">
		</slot>
	</thead>
	<tbody>
	{#each items as item}
        <slot name="body" item={item}></slot>
	{/each}
	</tbody>
</table>
