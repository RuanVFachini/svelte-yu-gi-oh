export default class CardModel {
    title: string;
    simbol: string;
    stars: number;
    image: string;
    type: string;
    description: string;
    atack: number;
    defence: number;

    /**
     *
     */
    constructor(
        title: string,
        simbol: string,
        stars: number,
        image: string,
        type: string,
        description: string,
        atack: number,
        defence: number,
    ) {
        
        this.title = title;
        this.simbol = simbol;
        this.stars = stars;
        this.image = image;
        this.type = type;
        this.description = description;
        this.atack = atack;
        this.defence = defence;
        
    }
}