<script>
    import { onMount } from 'svelte'
    export let items

    let thead
    let sortOrder = [[]]

    $: sortedItems = sorted([...items], sortOrder[0][0])

    const sorted = function(arr, fieldName) {
        if(fieldName) {
            arr.sort((a, b) => a[fieldName].localeCompare(b[fieldName]))
        }
        return arr
    }

    function updateSortOrder(fieldName, push) {
        if(push) {
            sortOrder = [...sortOrder, [fieldName, 0]]
        }
        else {
            sortOrder = [[fieldName, 0]]
        }
    }

    onMount( () => {
        const th = thead.getElementsByTagName('th')
        for(let i = 0; i < th.length; i++) {
            if(th[i].dataset.sort) {
                th[i].onclick = (event) => updateSortOrder(th[i].dataset.sort,event.shiftKey)
            }
            if(th[i].dataset.sortInitial != undefined) {
                sortOrder = [...sortOrder, [th[i].dataset.sort, 0]]
            }
        }
    })
</script>

<style>
tbody :global(.red) {
    color: red
}
</style>

x {sortOrder}

<table>
	<thead bind:this={thead}>
		<slot name="header">
		</slot>
	</thead>
	<tbody>
	{#each sortedItems as item}
        <slot name="body" item={item}></slot>
	{/each}
	</tbody>
</table>
