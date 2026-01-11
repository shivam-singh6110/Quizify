// creating data set

const readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName=readlineSync.question("What's your name:");
console.log(`Hello ${userName} welcome to Quizify`);

const database = {
    data: [
        {
            question: `let a = {} , b = {}
            console.log(a==b)
            console.log(a===b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "object.assign(target,source) creates which type of copy?",
            options: {
                a: "Deep copy",
                b: "Shallow copy",
                c: "Nested copy",
                d: "Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is mathed chaining possible with dorEach?",
            options: {
                a: "Yes",
                b: "No"
            },
            correctAnswer: "b"
        }
    ]
}

const leederBoard = {
    data:[
        {
            name:"Ashish",
            score:1
        },{
            name:"Riya",
            score:3
        },{
            name:"Jay",
            score:2
        }
    ]
}

function playGame(userAnswer,correctAnswer){
    if(userAnswer===correctAnswer){
        console.log("Correct Answer");
        score++;
    }else{
        console.log("Incorrect Answer");
        console.log(`Correct Answer is ${correctAnswer}`);
    }
}


function showQuestionAndOption(database) {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);

        for (let key in database.data[i].options) {
            console.log(`${key} - ${database.data[i].options[key]}`);
        }

        let userAnswer = readlineSync.question(
            "Enter your answer - (a/b/c/d): "
        ).toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer);
    }
}

function highScorer(leederBoard){
    leederBoard.data.push({name:userName,score:score})
    let sortedScoreList = leederBoard.data.sort((a,b)=>b.score-a.score)
    console.log("Check your position on your leader Board");
     for(let leader of sortedScoreList){
        console.log(`${leader.name} - ${leader.score}`);
     }
}

showQuestionAndOption(database);
console.log(`Your Score is ${score}`);
highScorer(leederBoard);