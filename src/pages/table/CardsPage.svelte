<script lang="ts"  >
import CardModal from "./components/CardModal.svelte";
import CardTable from "./components/CardTable.svelte";
import CardModel from "./models/card.model";

let data : CardModel[] = [
    new CardModel(
        'Dagão Branco',
        'images/simbols/magic.png',
        5,
        'images/main/dragao_branco_olhos_azuis.png',
        'Monstro / Efeito',
        'Um dragão de olhos brancos',
        2500,
        2000),
    new CardModel(
        'Mago Negro',
        'images/simbols/magic.png',
        7,
        'images/main/mago_negro.png',
        'Mago / Efeito',
        'Um Mago Fodão',
        2500,
        2100)
];

let selected : CardModel = null;

function select (card: CardModel) {
    selected = card;
}

function closeDetails () {
    console.log('close');
}

</script>

<CardTable 
    data={data}
    select={select} />

<CardModal 
    card={selected}
    open={selected != null}
    onClose={closeDetails} />


