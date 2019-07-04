<script>
    import { onMount } from 'svelte'
    export let items
    export let sortOrder
    export let initialOrder
    let thead

    sortOrder = initialOrder

//    $: sortedItems = sorted([...items], sortOrder)

    export function sortOn(event) {
        console.log('Inside', sortOrder, event.target.dataset.sort)
        sortOrder = event.target.dataset.sort
    }

    export const sorted = function(arr, sortOrder) {
        console.log('sortOrder', sortOrder)
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

/*
    onMount( () => {
        const th = thead.getElementsByTagName('th')
        for(let i = 0; i < th.length; i++) {
            console.log('th', th[i].dataset.sort)
            if(th[i].dataset.sort) {
                th[i].onclick = (event) => console.log('onclick', th[i].dataset.sort)
            }
        }
    })
*/
    console.log('Initial order', sortOrder)
</script>

<style>
tbody :global(.red) {
    color: red
}
</style>

<div>Inside: {sortOrder}</div>
<table>
	<thead bind:this={thead}>
		<slot name="header">
		</slot>
	</thead>
	<tbody>
	{#each items as item}
        <slot name="body" item={item}></slot>
	{/each}
	</tbody>
</table>
