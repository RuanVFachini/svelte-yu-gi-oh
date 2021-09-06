<script lang="ts">
    import { Table } from 'sveltestrap';
    import { STAR } from '../../../Consts';
    import CardModel from '../models/card.model';

    export let data: CardModel[] = [];
    export let select: (card: CardModel) => void = () => {};

    const star = 'images/star.png';
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
                <td>
                  {#each Array(card?.stars) as item }
                    <img src={STAR} class="star" alt="" />    
                  {/each}</td>
                <td>{card.atack}</td>
                <td>{card.defence}</td>
          </tr>
            
        {/each}
    </tbody>
  </Table>

  <style>
    .star {
        width: 20px;
        height: 20px;
        margin-left: 2px;
    }
  </style>