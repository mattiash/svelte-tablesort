<script lang="ts">
    import TableSort from '../lib/TableSort.svelte'

    let items = new Array<Record<string, any>>()

    const dataPromise = fetch(`https://node-hnapi.herokuapp.com/news?page=1`)
        .then((r) => r.json())
        .then((data) => {
            items = data
        })
</script>

<h1>Hacker News</h1>

{#await dataPromise}
    Loading...
{:then}
    <TableSort {items} class="test1 test2">
        <tr slot="thead">
            <th data-sort="title">Title</th>
            <th data-sort="user">User</th>
            <th data-sort="domain">Domain</th>
            <th data-sort="time" data-sort-initial="descending">Time ago</th>
            <th data-sort="comments_count">Comments</th>
        </tr>
        <tr slot="tbody" let:item>
            <td><a href={item.url}>{item.title}</a></td>
            <td>{item.user}</td>
            <td>{item.domain}</td>
            <td>{item.time_ago}</td>
            <td>{item.comments_count}</td>
        </tr>
    </TableSort>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
    :global(.sortable.ascending) {
        background-color: green;
    }
    :global(.sortable.descending) {
        background-color: red;
    }
</style>
