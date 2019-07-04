<script>
    import { onMount } from 'svelte'
    export let items
    export let sortOrder
    export let initialOrder
    let thead

    sortOrder = initialOrder

    $: sortedItems = sorted([...items], sortOrder)

    const sorted = function(arr, sortOrder) {
        doSort(arr, sortOrder)
        return arr
    }

    function doSort(arr, fieldName, event) {
        if (arr.fieldName === fieldName) {
            console.log('reverse')
            arr.reverse()
        }
        else {
            console.log(fieldName)
            arr.fieldName = fieldName
            arr.sort((a, b) => a[fieldName].localeCompare(b[fieldName]))
        }
    }

    onMount( () => {
        const th = thead.getElementsByTagName('th')
        for(let i = 0; i < th.length; i++) {
            console.log('th', th[i].dataset.sort)
            if(th[i].dataset.sort) {
                th[i].onclick = (event) => sortOrder = th[i].dataset.sort
            }
        }
    })

    console.log('Initial order', sortOrder)
</script>

<style>
tbody :global(.red) {
    color: red
}
</style>

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
