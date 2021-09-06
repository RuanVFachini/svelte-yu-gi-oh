<script lang="ts">
    import { Table } from 'sveltestrap';
    import CardModel from '../models/card.model';

    export let data: CardModel[] = [];
    export let select: (card: CardModel) => void = () => {};
</script>
  
  <Table dark>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Stars</th>
        <th>Atack</th>
        <th>defence</th>
      </tr>
    </thead>
    <tbody>
        {#each data as card, i }
            <tr on:click="{() => select(card)}">
                <th scope="row">{i + 1}</th>
                <td>{card.title}</td>
                <td>{card.stars}</td>
                <td>{card.atack}</td>
                <td>{card.defence}</td>
          </tr>
            
        {/each}
    </tbody>
  </Table>