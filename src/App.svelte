<script>
	import MyTable from './MyTable.svelte'

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
</script>

<h1>Hello</h1>

<MyTable items={data} initialOrder='firstName'>
	<tr slot="header">
		<th data-sort="firstName">First name</th>
		<th data-sort="lastName">Last name</th>
	</tr>
	<tr slot="body" let:item={item}>
		<td class="red">{item.firstName}</td>
		<td>{item.lastName}</td>
	</tr>
</MyTable>
