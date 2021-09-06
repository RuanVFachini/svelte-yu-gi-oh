<script lang="ts">
    import CardModel from "../models/card.model";

    const star = 'images/star.png';
    export let card: CardModel = null;
</script>

<div class="card">
    <div class="title">
        {card?.title}
        <img src={card?.simbol} class="element" alt="">
    </div>
    <div class="star-zone">
        {#each Array(card?.stars) as item }
            <img src={star} class="star" alt="" />    
        {/each}
        
    </div>
    <div class="main-image-zone">
        <img src={card?.image} class="main-image" alt="" />    
    </div>

    <div class="details">
        <div class="details-zone-one">
            <p>{card?.type}</p>
            <p>{card?.description}</p>
        </div>
        <div class="details-zone-two">
            <p class="attributes">ATK/{card?.atack} DEF/{card?.defence}</p>
        </div>
    </div>
</div>

<style>

    .attributes {
        text-align: end;
        padding-right: 5px;
    }

    .details-zone-two {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .details-zone-one {
        width: 100%;
        border-bottom: 1px solid black;
        height: 80px;
        padding: 5px;
    }

    p {
        width: 100%;
        font-size: 10px;
    }

    .details {
        margin-top: 10px;
        width: 100%;
        height: 100px;
        background-color: burlywood;
        border: 5px solid rgb(128, 48, 11);
        display: flex;
        justify-content: start;
        align-items: flex-start;
        flex-direction: column;
    }

    .main-image-zone {
        padding: 0px 20px;
        height: 260px;
    }

    .main-image {
        width: 100%;
        height: 100%;
        border: 6px solid #6b705c
    }

    .star {
        width: 20px;
        height: 20px;
        margin-left: 2px;
    }

    .star-zone {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 30px;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .element {
        width: 28px;
        height: 28px;
    }

    .title {
        border: 2px solid tomato;
        background-color: coral;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }
    .card {
        display: flex;
        border: 10px solid black;
        background-color: chocolate;
        padding: 15px;
        width: 350px;
    }
</style>