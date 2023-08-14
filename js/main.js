const geographyCards = [
    {
    "cardNumber": 1,
    "question": "What is the name of the smallest country in the world?",
    "answer": "The Vatican City",
    },
    {
    "cardNumber": 2,
    "question": "What country are the Great Pyramids of Giza located in?",
    "answer": "Egypt",
    },
    {
    "cardNumber": 3,
    "question": "Which country has 'Dakar' as its capital??",
    "answer": "Senegal",
    },
    {
    "cardNumber": 4,
    "question": "What country does the Rhine River run through?",
    "answer": "Germany",
    },
    {
    "cardNumber": 5,
    "question": "What country are the Great Pyramids of Giza located in?",
    "answer": "Egypt",
    },
    {
    "cardNumber": 6,
    "question": "What is the name of the largest country in the world?",
    "answer": "Russia",
    },
    {
    "cardNumber": 7,
    "question": "What country formerly ruled Iceland?",
    "answer": "Denmark",
    },
    {
    "cardNumber": 8,
    "question": "What country is known to have the best quality tap water?",
    "answer": "Switzerland",
    },
    {
    "cardNumber": 9,
    "question": "Which country is also called The Netherlands?",
    "answer": "Holland",
    }
]


class Card {
    constructor(cardObj){
        this.cardObj = cardObj
        this.width = 20;
        this.height = 20;
        this.domElement = null;
        this.cards = geographyCards;

        
        this.createDomElement();
        console.log(this.cardObj)
    }
    
    createDomElement(){
        this.domElement = document.createElement("div");

        this.domElement.className = "card";

        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        
        
            this.domElement.innerHTML = `
            <div class="geoCard" data-card-name="${this.cardObj.cardNumber}">
                <div class="front">${this.cardObj.question}</div>
                <input class="answer" type="text" placeholder="type the number of your answer">
                
            </div>
        `;
        const myBoard = document.getElementById("board");
        myBoard.appendChild(this.domElement);

        
        console.log(this.domElement)
        ;
        
        document.querySelectorAll('#board').innerHTML = this.domElement;
        };
        
        


    }


geographyCards.forEach((cardObj)=>{
   const card = new Card(cardObj);
})

