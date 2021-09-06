<script lang="ts">
    import { navigate  } from "svelte-routing";
    import { ListGroup, ListGroupItem } from 'sveltestrap';

    let active = 1;
  </script>

<ListGroup>
    <ListGroupItem active={active == 1} on:click={
        () => {
            navigate('/');
            active = 1
        }}>Home
    </ListGroupItem>
    <ListGroupItem active={active == 2} on:click={
        () => {
            navigate('/about');
            active = 2
        }}>About
    </ListGroupItem>
</ListGroup>