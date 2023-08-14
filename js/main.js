class Card {
    constructor(){
        this.width = 20;
        this.height = 20;
        this.positionX = 10;
        this.positionY = 10;
        this.domElement = null;

        this.createDomElement();
    }

    createDomElement(){
        this.domElement = document.createElement("div");
    }

}