# svelte-tablesort

A Svelte 3 component that makes it possible to sort a table
by clicking the headers.

## Usage

```
npm install svelte-tablesort
```

This code shows an html-table where the user can sort
the rows by clicking the headers at the top of each column:

```
<script>
	import TableSort from '../TableSort.svelte'

	let items = []

	const dataPromise = fetch(`https://node-hnapi.herokuapp.com/news?page=1`)
		.then(r => r.json())
		.then(data => {
			items = data
		});
</script>

<TableSort items={items}>
	<tr slot="thead">
		<th data-sort="title">Title</th>
		<th data-sort="user">User</th>
	</tr>
	<tr slot="tbody" let:item={item}>
		<td><a href="{item.url}">{item.title}</a></td>
		<td>{item.user}</td>
	</tr>
</TableSort>
```

Clicking once on a heading sorts in ascending order on the value for that column.
Clicking more than once toggles between ascending and descending order.
To sort on "user" first and then "title" in the sample above,
click the "User" header first, then hold down shift and
click "Title".

## Setting initial sort order

## Styling

class
sortable, ascending, descending


