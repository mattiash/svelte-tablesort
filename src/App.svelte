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

	setTimeout(() => data = [...data, {firstName: 'C', lastName: 'A'}], 10000)
</script>

<h1>Hello</h1>

<MyTable items={data}>
	<tr slot="header">
		<th data-sort="firstName" data-sort-initial>First name</th>
		<th data-sort="lastName">Last name</th>
	</tr>
	<tr slot="body" let:item={item}>
		<td class="red">{item.firstName}</td>
		<td>{item.lastName}</td>
	</tr>
</MyTable>
