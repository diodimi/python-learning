import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { CopyBlock, dracula } from "react-code-blocks";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../Navbar/Navbar";

import { Link } from "react-router-dom";

export default function Epanaliptiko() {
  const [showResults, setShowResults] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [tries, setTries] = useState();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentExplanation, setCurrentExplanation] = useState(0);
  const [score, setScore] = useState(0);

  const logicalCode = `def my_function():
   print("Hello from a function")
  `.trim();
  const functionCode = `def my_function():
    print("Hello from a function")

my_function()

  `.trim();
  const functionCode2 = `def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")
`;
  const functionCode3 = `x = cars[0]
cars[0] = "Toyota"
`;

  const functionCode4 = `a = 33
b = 200
if b > a:
  print("b is greater than a")
`;
  const functionCode5 = `a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")
`;
  const functionCode6 = `a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
`;
  const testCode = `def fun1(name, age=20):
print(name, age)

fun1('Emma', 25)
`.trim();

  const testCode2 = `def some_thing(number1, number2):
first_value = number1 + 8
second_value = number2 - 5
return first_value

print(some_thing(13, 10))
`.trim();

  const testCode3 = `nameList = ['Harsh', 'Pratik', 'Bob', 'Dhruv'] 
 
print nameList[1]
`.trim();

  const testCode4 = `a, b = 12, 5
if (a + b)==17:
    print('True')
else:
  print('False')
`.trim();
  const testCode5 = `a=true
b=false
if (a and b)==true:
    print('True')
else:
  print('False')
`.trim();
  const testCode6 = `def fun(a,b):
  return b-a

a=1
b=4
print(fun(a+b,a))


`.trim();

const testC2=
`a=4
a+=2
print(a)
 `.trim()
 const testC3=
`a=4
a+=2
b=10
print(b<=a)
 `.trim()
 const testC=
 `a = True
b = False
print(a and b or b)
  `.trim()
const testCode7 = `#print "Hi"
print "Dionisis"
   `.trim();
  const [questions, setQuestions] = useState([
    {
        text: "The correct way to print a string in Python 2",
        options: [
          { id: 0, text: 'print "Catching fish"', isCorrect: true },
          { id: 1, text: "print Catching fish;", isCorrect: false },
          { id: 2, text: "print #Catching fish", isCorrect: false },
        ],
      },
      {
        text: "score=0. How do you change score by 2",
        options: [
          { id: 0, text: "score-=2", isCorrect: false },
          { id: 1, text: "score2", isCorrect: false },
          { id: 2, text: "score=2", isCorrect: true },
        ],
      },
      
    {
      text: "How to call a function",
      options: [
        { id: 0, text: "function_name()", isCorrect: true },
        { id: 1, text: "function_name", isCorrect: false },
        { id: 2, text: "()function_name()", isCorrect: false },
      ],
    },
    {
        text: "The correct way to set true a boolean variable",
        options: [
          { id: 0, text: "varTrue", isCorrect: false },
          { id: 1, text: "var=true", isCorrect: true },
          { id: 2, text: "var(true)", isCorrect: false },
        ],
      },
      {
        text: "How to use the modulo operator to find the remainder of 15 divided by 2?",
        options: [
          { id: 0, text: "15/2", isCorrect: false },
          { id: 1, text: "15%2", isCorrect: true },
          { id: 2, text: "15@2", isCorrect: false },
        ],
      },
      {
        text: (
          <div>
            What is the output of below code?
            <SyntaxHighlighter language="python" style={a11yDark}>
              {testCode7}
            </SyntaxHighlighter>
          </div>
        ),
        options: [
          { id: 0, text: "Hi", isCorrect: false },
  
          { id: 1, text: "Dionisis", isCorrect: true },
          { id: 2, text: "Hi Dionisis", isCorrect: false },
        ],
      },
    {
      text: (
        <div>
          {" "}
          What is the output of the following function call
          <SyntaxHighlighter language="python" style={nord}>
            {testCode}
          </SyntaxHighlighter>
        </div>
      ),
      options: [
        { id: 0, text: "Emma 25", isCorrect: true },
        { id: 1, text: "Emma25", isCorrect: false },
        { id: 2, text: "25Emma", isCorrect: false },
      ],
    },
    {
        text: "What is the output of 5>=10",
        options: [
          { id: 0, text: 'True', isCorrect: false },
          { id: 1, text: "False", isCorrect: true },
          { id: 2, text: "I don't know", isCorrect: false },
        ],
      },
      {
        text: <div>what is the output of below code 
          <SyntaxHighlighter language="python" style={nord}>
              {testC}
            </SyntaxHighlighter>
  
        </div>,
        options: [
          { id: 0, text: 'True', isCorrect: false },
          { id: 1, text: "False", isCorrect: true },
          { id: 2, text: "I don't know", isCorrect: false },
        ],
      },
      {
        text:<div> What is the output of this code?
  <SyntaxHighlighter language="python" style={nord}>
              {testC2}
            </SyntaxHighlighter>
  
        </div>,
        options: [
          { id: 0, text: '4', isCorrect: false },
          { id: 1, text: "6", isCorrect: true },
          { id: 2, text: "2", isCorrect: false },
        ],
      },
      {
        text:<div> What is the output of this code?
        <SyntaxHighlighter language="python" style={nord}>
                    {testC3}
                  </SyntaxHighlighter>
        
              </div>,
        options: [
          { id: 0, text: 'True', isCorrect: false },
          { id: 1, text: "False", isCorrect: true },
          { id: 2, text: "I don't know", isCorrect: false },
        ],
      },
    {
      text: (
        <div>
          What will the following program print
          <SyntaxHighlighter language="python" style={nord}>
            {testCode2}
          </SyntaxHighlighter>
        </div>
      ),
      options: [
        { id: 0, text: "21", isCorrect: true },
        { id: 1, text: "5", isCorrect: false },
        { id: 2, text: "18", isCorrect: false },
      ],
    },
    {
      text: (
        <div>
          What will the following program print
          <SyntaxHighlighter language="python" style={nord}>
            {testCode3}
          </SyntaxHighlighter>
        </div>
      ),
      options: [
        { id: 0, text: "Harsh", isCorrect: false },
        { id: 1, text: "Pratik", isCorrect: true },
        { id: 2, text: "Bob", isCorrect: false },
      ],
    },
    {
      text: (
        <div>
          What is the output of below code
          <SyntaxHighlighter language="python" style={nord}>
            {testCode4}
          </SyntaxHighlighter>
        </div>
      ),
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
  ]);

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }
   
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion,questions.length)
    if(currentQuestion===questions.length-1){
    console.log("results")

        setShowResults(true)
    }
  };
  const restartGame = () => {
   

  
    
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setCurrentExplanation(0);
  };

  return (
    <div>
      <Navbar />
      <div className="learn-container">
        
       
         
        
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score === questions.length ? (
                <div>You passed!</div>
              ) : (
                <div>Try again!</div>
              )}
              {score} out of {questions.length} correct - (
              {((score / questions.length) * 100).toFixed(2)} %)
            </h2>
            {score === questions.length ? (
              <Link to="/home" className="papa">
                Home
              </Link>
            ) : (
              <button onClick={() => restartGame()}>Restart game</button>
            )}
          </div>
        ):
        <div className="question-card">
        {/* Current Question  */}
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        {/* List of possible answers  */}
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
        }
        
      </div>
    </div>
  );
}
