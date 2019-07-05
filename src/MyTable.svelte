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

    function updateSortOrder(th, push) {
        const fieldName = th.dataset.sort
        if(push) {
            if(sortOrder[sortOrder.length-1][0] === fieldName) {
                sortOrder[sortOrder.length-1] = [fieldName, (sortOrder[sortOrder.length-1][1] + 1) % 2]
            }
            else {
                sortOrder = [...sortOrder, [fieldName, 0]]
            }
        }
        else {
            if(sortOrder.length === 1 && sortOrder[0][0] === fieldName) {
                sortOrder[0] = [fieldName, (sortOrder[0][1] + 1) % 2]
            }
            else {
                resetClasses()
                sortOrder = [[fieldName, 0]]
            }
        }
        console.log()
        th.className = 'sortable ' + (sortOrder[sortOrder.length-1][1] ? 'descending' : 'ascending')
    }

    function resetClasses() {
        const th = thead.getElementsByTagName('th')
        for(let i = 0; i < th.length; i++) {
            if(th[i].dataset.sort) {
                th[i].className="sortable"
            }
        }
    }

    onMount( () => {
        const th = thead.getElementsByTagName('th')
        for(let i = 0; i < th.length; i++) {
            if(th[i].dataset.sort) {
                th[i].className="sortable"
                th[i].onclick = (event) => updateSortOrder(th[i],event.shiftKey)
            }
            if(th[i].dataset.sortInitial != undefined) {
                th[i].className="sortable descending"
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
