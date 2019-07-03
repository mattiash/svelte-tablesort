<script>

	import MyTable from './MyTable.svelte'
	import {sorted, sortOn} from './sort.js'

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

	let sortOrder = 'firstName'
    $: [data, sortOrder] = sorted(data, sortOrder)

</script>

<h1>Hello</h1>

<MyTable items={data}>
	<tr slot="header">
		<th on:click={(event) => sortOrder = sortOn(sortOrder, 'firstName', event)}>First name</th>
		<th on:click={(event) => sortOrder = sortOn(sortOrder, 'lastName', event)}>Last name</th>
	</tr>
	<tr slot="body" let:item={item}>
		<td class="red">{item.firstName}</td>
		<td>{item.lastName}</td>
	</tr>
</MyTable>
