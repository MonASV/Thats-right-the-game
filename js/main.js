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
    "question": "Which country has the largest population in the world??",
    "answer": "China",
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
        

        
        this.createDomElement();
    
    }
    
    createDomElement(){
        this.domElement = document.createElement("div");

        this.domElement.className = "card";

        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        
        
            this.domElement.innerHTML = `
            <div class="geoCard" data-card-name="${this.cardObj.cardNumber}">
                <div class="front">${this.cardObj.question}</div>
                <input id="${this.cardObj.cardNumber}" class="anser" type="text" size="20" placeholder="...">
                
            </div>
        `;
        const myBoard = document.getElementById("board");
        myBoard.appendChild(this.domElement);
        ;
        
        document.querySelectorAll('#board').innerHTML = this.domElement;
        };
        
   


    }

class Button {
    constructor(){
        this.domElement = null;
        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div")
        this.domElement.id = "review";

        this.domElement.innerHTML = 
        `<button type="submit">Review</button>`
        
        const parentElm = document.getElementById("posible-answers");
        parentElm.appendChild(this.domElement);
    }
}

class Review {
    constructor(myCards){
        this.cards = myCards;
        this.points = 0;
        this.domElement = null;
        //this.createDomElement();
    }
    
    checkResults(){
        
        
        this.cards.forEach((card)=>{
            let correctAnswer = card.answer;
            let userAnswer = document.getElementById(card.cardNumber).value
            if(correctAnswer == userAnswer){
            this.points++
        }
    })
    
    return this.points

    }

    printResults(){
            
            this.domElement = document.createElement("div")
            this.domElement.id = "results";
    
            this.domElement.innerHTML = 
            `<div>Correct answers: ${this.points}</div>`
            
            const parentElm = document.body;
            parentElm.appendChild(this.domElement);
        
    }
}

class Answers {
    constructor(myCards){
            this.cards = myCards
            this.width = 10;
            this.height = 5;
            this.domElement = null;
            
    
            
            this.createDomElement();
        
    }

    createDomElement(){
        
        this.domElement = document.createElement("div");

        this.domElement.id = "answers";

        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        
            this.domElement.innerHTML = `
                <div class="answers-box">${this.cards.answer}</div>
        `;
        const myBoard = document.getElementById("posible-answers");
        myBoard.appendChild(this.domElement);
        ;
        
        document.querySelectorAll('#posible-answers').innerHTML = this.domElement;
        };


}


const myCards = [];

//document.addEventListener("click", ()=>{
geographyCards.sort((a, b) => Math.random() > 0.5 ? 1 : -1) //ternary operator, requires else statement. 1 and -1 is what the sort method is expecting
geographyCards.forEach((cardObj)=>{
    const card = new Card(cardObj);
    myCards.push(cardObj)
})


geographyCards.forEach((cardObj)=>{
    const answers = new Answers(cardObj);
})

const button = new Button();
const review = new Review(myCards);
button.domElement.addEventListener("click", () => review.checkResults())
button.domElement.addEventListener("click", () => review.printResults())
setTimeout(() => {review.checkResults(); review.printResults()}, "180000")


//})


/*********************/
/******Home Page******/
/*********************/

class Categories {
    constructor(categories){
        this.categories = categories
        this.width = 20;
        this.height = 20;
        this.domElement = null;
        

        
        this.createDomElement();
    
    }
    
    createDomElement(){
        this.domElement = getElementById("home").createElement("div");

        this.domElement.className = "category";

        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        
        
            this.domElement.innerHTML = `
    
                <div>${this.categories}</div>
      
        `;
        const myBoard = getElementById("home").getElementById("board1");
        myBoard.appendChild(this.domElement);
        ;
        
        document.querySelectorAll('#board1').innerHTML = this.domElement;
        };
        
}

const myCate = new Categories();
myCate.createDomElement(myCards)