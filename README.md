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
	import TableSort from 'svelte-tablesort/TableSort.svelte'

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

The `items` property should be an array of objects.

The `data-sort` property should contain a key that has a value in all objects in the array. 
When the user clicks that th-element, the objects will be sorted on that key.
Note that it is possible to have one key in the data-sort property and display a different expression in the table.
This is useful if the value shown to the user is difficult to sort on.
For example, the column can contain an age ("now", "3 minutes ago", "1 hour ago"),
but the data-sort expression can reference a timestamp.

The sorting is done with a numeric comparison if the value in the object is a number and localeCompare otherwise.
If one object contains a number and another contains a string in the same field,
strange things will happen.

## Slots

The TableSort component uses three different slots, `thead`, `tbody` and `tfoot`.
thead and tbody are mandatory and tfoot is optional.
They should all contain a single `tr` element.
The thead and tfoot slots will be instantiated once and the tbody slot will be instantiated once per entry in the `items` array.

## Setting initial sort order

It is possible to indicate that a table should be sorted on one or more columns by default by adding a `data-sort-initial` property to the `th` element:

```
<th data-sort="title" data-sort-initial>Title</th>
```
This will sort on that column in ascending order.
To sort in descending order by default, set the property to `descending`:

```
<th data-sort="time" data-sort-initial="descending">Time ago</th>
```

## Styling

The TableSort component provides only a single css rule:
It sets the mouse to a "pointer" over a column heading that provides sorting
to indicate that it can be clicked.
Other than that, you have to style the table yourself.

The TableSort component adds the following css classes:

- `tablesort` is added to the table-element.
- `sortable` is added to all th-elements that can be sorted on.
- `descending` is set on a th-element if the table is sorted
  on that column in descending order.
- `ascending` is set on a th-element if the table is sorted
  on that column in ascending order.

