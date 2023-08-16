let category = location.pathname.match(/.*\/(.*).html$/)[1]
console.log(category)

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
const mathCards = [
    {
        "cardNumber": 1,
        "question": "When two circles have the same centre, what is it called?",
        "answer": "Concentric",
    },
    {
        "cardNumber": 2,
        "question": "How many configurations does a Rubik's Cube have?",
        "answer": "20",
    },
    {
        "cardNumber": 3,
        "question": "What is the longest side of the right-angle triangle called?",
        "answer": "Hypotenuse",
    },
    {
        "cardNumber": 4,
        "question": "Which number is spelt with letters in descending order?",
        "answer": "One",
    },
    {
        "cardNumber": 5,
        "question": "What is the smallest perfect number?",
        "answer": "6",
    },
    {
        "cardNumber": 6,
        "question": "Which number is known as the 'magic number'?",
        "answer": "9",
    },
    {
        "cardNumber": 7,
        "question": "How many colors are needed on a map to ensure that no 2 colors share the same border?",
        "answer": "4",
    },
    {
        "cardNumber": 8,
        "question": "What is zero to the power of zero?",
        "answer": "undefined",
    },
    {
        "cardNumber": 9,
        "question": "Which number always shows the same measurement in Celsius(°C) and Farenheit(°F)?",
        "answer": "-40",
    }
]
const chemistryCards = [
    {
        "cardNumber": 1,
        "question": "Which element is used as a disinfectant, as a bleaching agent and to purify water?",
        "answer": "Chlorine",
    },
    {
        "cardNumber": 2,
        "question": "Chlorine, fluorine and bromine belong to which family of elements?",
        "answer": "Halogens",
    },
    {
        "cardNumber": 3,
        "question": "Which common mineral is used to make casts, molds, blackboard chalk and plaster of Paris?",
        "answer": "Gypsum",
    },
    {
        "cardNumber": 4,
        "question": "Pb is the chemical symbol for which element?",
        "answer": "Lead",
    },
    {
        "cardNumber": 5,
        "question": "Kimberlite contains what precious item?",
        "answer": "Diamonds 78",
    },
    {
        "cardNumber": 6,
        "question": "What is H2SO4 the chemical formula for?",
        "answer": "Sulfuric Acid",
    },
    {
        "cardNumber": 7,
        "question": "What raw material is used for making glass?",
        "answer": "Sand",
    },
    {
        "cardNumber": 8,
        "question": "What is the most common element in the Universe?",
        "answer": "Hydrogen",
    },
    {
        "cardNumber": 9,
        "question": "What is the chemical symbol for Potassium?",
        "answer": "K",
    }
]
const historyCards = [
    {
        "cardNumber": 1,
        "question": "How many U.S. presidents have been assassinated?",
        "answer": "Four",
    },
    {
        "cardNumber": 2,
        "question": "The ancient city of Rome was built on how many hills?",
        "answer": "Seven",
    },
    {
        "cardNumber": 3,
        "question": "How many times has the Mona Lisa been stolen?",
        "answer": "One",
    },
    {
        "cardNumber": 4,
        "question": "The Great Pyramids of Giza consist of how many pyramids?",
        "answer": "Three",
    },
    {
        "cardNumber": 5,
        "question": "The Ptolemy dynasty ruled which ancient kingdom?",
        "answer": "Egypt",
    },
    {
        "cardNumber": 6,
        "question": "In which country did the Easter Rising take place in 1916?",
        "answer": "Ireland",
    },
    {
        "cardNumber": 7,
        "question": "Where were the first modern Olympics held?",
        "answer": "Greece",
    },
    {
        "cardNumber": 8,
        "question": "The Incan Empire is located in which modern-day country?",
        "answer": "Peru",
    },
    {
        "cardNumber": 9,
        "question": "In which country was the largest known T-Rex skeleton found?",
        "answer": "Canada",
    }


]
const cardByCategory = {
    history: historyCards,
    geography: geographyCards,
    math: mathCards,
    chemistry:chemistryCards,

}
const gameCategories = [
    {
        categoryName: "Geography",
        link: "./geography.html",
        image: "../Images/background-geo.jpeg",
        cardsArray: geographyCards
    },
    {
        categoryName: "History",
        link: "./history.html",
        cardsArray: historyCards
    },
    {
        categoryName: "Math",
        link: "./math.html"
    },
    {
        categoryName: "Chemistry",
        link: "./chemistry.html"
    },
    {
        categoryName: "Sport",
        link: "./sport.html"
    },
    {
        categoryName: "Music",
        link: "./music.html"
    },
    {
        categoryName: "Art",
        link: "./art.html"
    },
    {
        categoryName: "Movies",
        link: "./movies.html"
    },
    {
        categoryName: "JavaScript",
        link: "./javaScript.html"
    }
]

document.body.style.backgroundImage = `url('../Images/${category}.jpeg')`



class Card {
    constructor(cardObj) {
        this.cardObj = cardObj
        this.width = 20;
        this.height = 20;
        this.domElement = null;



        this.createDomElement();

    }

    createDomElement() {
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
        console.log(this.cardObj.cardsArray)
        document.querySelectorAll('#board').innerHTML = this.domElement;
    };




}

class Button {
    constructor() {
        this.domElement = null;
        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div")
        this.domElement.id = "review";

        this.domElement.innerHTML =
            `<button type="submit">Review</button>`

        const parentElm = document.getElementById("posible-answers");
        parentElm.appendChild(this.domElement);
    }
}

class Review {
    constructor(myCards) {
        this.cards = myCards;
        this.points = 0;
        this.domElement = null;
        //this.createDomElement();
    }

    checkResults() {


        this.cards.forEach((card) => {
            let correctAnswer = card.answer;
            let userAnswer = document.getElementById(card.cardNumber).value
            if (correctAnswer == userAnswer) {
                this.points++
            }
        })

        return this.points

    }

    printResults() {

        this.domElement = document.createElement("div")
        this.domElement.id = "results";

        this.domElement.innerHTML =
            `<div>Correct answers: ${this.points}</div>`

        const parentElm = document.body;
        parentElm.appendChild(this.domElement);

    }
}

class Answers {
    constructor(myCards) {
        this.cards = myCards
        this.width = 10;
        this.height = 5;
        this.domElement = null;



        this.createDomElement();

    }

    createDomElement() {

        this.domElement = document.createElement("div");

        this.domElement.id = "answers";

        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";

        this.domElement.innerHTML = `
                <div class="answers-box">${this.cards.answer}</div>
        `;
        const myBoard = document.getElementById("posible-answers");
        myBoard.appendChild(this.domElement);
        

        document.querySelectorAll('#posible-answers').innerHTML = this.domElement;
    };


}



class Game {

    constructor() {
        this.category = category
        this.cards = cardByCategory[category]
    }
    initialize() {
        const myCards = [];

        window.addEventListener("load", (event) => {
            this.cards.sort((a, b) => Math.random() > 0.5 ? 1 : -1) //ternary operator, requires else statement. 1 and -1 is what the sort method is expecting
            this.cards.forEach((cardObj) => {
                const card = new Card(cardObj);
                myCards.push(cardObj)
            })
        
        
            this.cards.forEach((cardObj) => {
                const answers = new Answers(cardObj);
            })
        
            const button = new Button();
            const review = new Review(myCards);
            button.domElement.addEventListener("click", () => review.checkResults())
            button.domElement.addEventListener("click", () => review.printResults())
            setTimeout(() => { review.checkResults(); review.printResults() }, "120000")
        
        
        })
    }

}
const game1 = new Game(geographyCards)
game1.initialize()




/*********************/
/******Home Page******/
/*********************/


class Categories {
    constructor(categories) {
        this.categories = categories
        this.width = 20;
        this.height = 20;
        this.domElement = null;



        this.createDomElement();

    }

    createDomElement() {
        this.domElement = document.createElement("div");
        
        this.domElement.className = "category";
        
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        //this.domElement.style.backgroundImage = url (this.categories.image)
        
        
        this.domElement.innerHTML = `
        
        <div>${this.categories.categoryName}</div>
        
        `;
    

        const myBoard = document.getElementById("board1");
        myBoard.appendChild(this.domElement);
    
        document.querySelectorAll('#board1').innerHTML = this.domElement;
        this.domElement.addEventListener("click", () => {
            
           
            location.href = this.categories.link
            
        });
        
    };

}

    gameCategories.forEach((category) => {
        new Categories(category);
    })


