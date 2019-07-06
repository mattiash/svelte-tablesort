<script>
    import { onMount } from 'svelte'
    import {sortGenerator, compareStrings, compareNumbers} from './src/sort.js'
    export let items
    let className=""
    export {className as class}

    let thead
    let sortOrder = [[]]

    $: sortedItems = sorted([...items], sortOrder)

    const sorted = function(arr, sortOrder) {
        arr.sort(sortGenerator( function*(a,b) {
            for( let [fieldName, r] of sortOrder) {
                const reverse = r===0 ? 1 : -1
                if(typeof a[fieldName] === 'number') {
                    yield reverse*compareNumbers(a[fieldName], b[fieldName])  
                }
                else {
                    yield reverse*compareStrings(a[fieldName], b[fieldName])  
                }
            }

        } ))

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
            if(th[i].dataset.sortInitial === "descending") {
                th[i].className="sortable descending"
                sortOrder = [...sortOrder, [th[i].dataset.sort, 1]]
            }
            else if(th[i].dataset.sortInitial != undefined) {
                th[i].className="sortable ascending"
                sortOrder = [...sortOrder, [th[i].dataset.sort, 0]]
            }
        }
    })
</script>

<style>
thead :global(th.sortable) {
	cursor: pointer;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}
</style>

<table class={className}>
	<thead bind:this={thead}>
		<slot name="thead">
		</slot>
	</thead>
	<tbody>
	{#each sortedItems as item}
        <slot name="tbody" item={item}></slot>
	{/each}
	</tbody>
    <tfoot>
        <slot name="tfoot"></slot>
    </tfoot>
</table>
