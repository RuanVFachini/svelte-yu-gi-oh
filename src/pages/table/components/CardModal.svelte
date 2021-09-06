<script lang="ts">
    import { Modal } from 'sveltestrap';
    import CardModel from '../models/card.model';
    import Card from './Card.svelte';
    
    export let open = false;
    export let card : CardModel = null;
    const toggle = () => (open = !open);
    export let onClose: () => void = () => {};
  </script>
  
  
<Modal body header={card?.title || 'Detalhes'}
    isOpen={open} 
    {toggle} 
    on:close={onClose}>
    <div class="card-body">
        <Card card={card}/>
    </div>
    
</Modal>

<style>

    .card-body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
  