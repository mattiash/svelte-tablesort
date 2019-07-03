<script>

	import MyTable from './MyTable.svelte'
	import {doSort, initSort} from './sort.js'

	let data = [
		{
			firstName: 'A',
			lastName: 'G'
		},
		{
			firstName: 'B',
			lastName: 'E'
		},

	]

	initSort(data, 'firstName')

// Can we do something with $: to avoid sortFunction?
//	$: data = sorted(data, sortOrder)
	
	function sortFunction(fieldName) {
		return (event) => {
			doSort(data, fieldName, event)
			data = data
		}
	}

</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello</h1>

<MyTable items={data}>
	<tr slot="header">
		<th on:click={sortFunction('firstName')}>First name</th>
		<th on:click={sortFunction('lastName')}>Last name</th>
	</tr>
	<tr slot="body" let:item={item}>
		<td class="red">{item.firstName}</td>
		<td>{item.lastName}</td>
	</tr>
</MyTable>
