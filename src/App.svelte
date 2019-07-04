<script>
	import MyTable from './MyTable.svelte'

	let comp
	let data = [
		{
			firstName: 'A',
			lastName: 'F'
		},
		{
			firstName: 'B',
			lastName: 'E'
		},

	]

	let sortOrder
    $: data = comp ? comp.sorted(data, sortOrder) : data

</script>

<h1>Hello</h1>

Outside: {sortOrder}

<MyTable items={data} initialOrder='firstName' bind:sortOrder={sortOrder} bind:this={comp}>
	<tr slot="header">
		<th data-sort="firstName" on:click={(event) => comp.sortOn(event)}>First name</th>
		<th data-sort="lastName" on:click={(event) => comp.sortOn(event)}>Last name</th>
	</tr>
	<tr slot="body" let:item={item}>
		<td class="red">{item.firstName}</td>
		<td>{item.lastName}</td>
	</tr>
</MyTable>
