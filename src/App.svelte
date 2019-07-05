<script>
	import SortableTable from './SortableTable.svelte'

	let items = []

	// https://node-hnapi.herokuapp.com/news?page=1
	fetch(`https://node-hnapi.herokuapp.com/news?page=1`)
		.then(r => r.json())
		.then(data => {
			console.log('got data')
			items = data
		});
</script>

<h1>Hello</h1>

<SortableTable items={items}>
	<tr slot="thead">
		<th data-sort="title" data-sort-initial>Title</th>
		<th data-sort="user">User</th>
		<th data-sort="time">Time ago</th>
		<th data-sort="comments_count">Comments</th>
	</tr>
	<tr slot="tbody" let:item={item}>
		<td><a href="{item.url}">{item.title}</a></td>
		<td>{item.user}</td>
		<td>{item.time_ago}</td>
		<td>{item.comments_count}</td>
	</tr>
</SortableTable>
