import React, {useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { CopyBlock, dracula } from "react-code-blocks";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

export default function Intermediate() {
  const [showResults, setShowResults] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [tries, setTries] = useState();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentExplanation, setCurrentExplanation] = useState(0);
  const [score, setScore] = useState(0);
  const testC=
  `a = True
b = False
print(a and b or b)
   `.trim()
const code=` print(('x > y is',x>y))`
  const [questions, setQuestions] = useState([
    {
      text: "What is the output of True and False",
      options: [
        { id: 0, text: 'True', isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of True or False",
      options: [
        { id: 0, text: 'True', isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of 10<=10",
      options: [
        { id: 0, text: 'True', isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
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
  ]);
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
  const extraQuestions=[
    {
      text: "What is the output of True and False",
      options: [
        { id: 0, text: 'True', isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of True or False",
      options: [
        { id: 0, text: 'True', isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of 10<=10",
      options: [
        { id: 0, text: 'True', isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
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
    }
  ]

  
  useEffect(() => {
    
     
    axios
      .get("http://localhost:3001/test/get", {
        params:{
        email: read_cookie("email"),
        test: "interm_test",
        }
      })
      .then((res) => {
        console.log("ok")
        setTries(res.data[0].interm_test);

        
        console.log(tries)
        if (tries > 2) {
          console.log(questions);
          setQuestions(extraQuestions);
          console.log(extraQuestions);
        }

      })
   
     
  }, [tries]);

  const operators = "( ==, != , <>, >,<=, etc.)";
  const arithmeticCODE = 
` x= 4
y= 5
print(x + y)`;
  const logicalCode=
 `a = True
b = False
print(('a and b is',a and b))
print(('a or b is',a or b))
print(('not a is',not a))`.trim()

  const explanations = [
    {
      title: "Arithmetic Operators",
      text: (
        <div>
          Arithmetic Operators perform various arithmetic calculations like
          addition, subtraction, multiplication, division, %modulus, exponent,
          etc. There are various methods for arithmetic calculation in Python
          like you can use the eval function, declare variable & calculate, or
          call functions.
          
          <SyntaxHighlighter language="python" style={nord}>
        {arithmeticCODE}
      </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Comparison Operators",
      text: (
        <div>
          Comparison Operators In Python compares the values on either side of
          the operand and determines the relation between them. It is also
          referred to as relational operators. Various comparison operators in
          python are {operators}
          For comparison operators we will compare the value of x to the value
          of y and print the result in true or false. Here in example, our value
          of x = 4 which is smaller than y = 5, so when we print the value as
          x{">"} y, it actually compares the value of x to y and since it is not
          correct, it returns false.
          <SyntaxHighlighter language="python" style={nord}>
            x = 4
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={nord}>
            y = 5
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={nord}>
           {code}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Assignment Operators",
      text: (
        <div>
          Assignment Operators in Python are used for assigning the value of the
          right operand to the left operand. Various assignment operators used
          in Python are (+=, – = , *=, /= , etc.). Python assignment operators
          is simply to assign the value, for example
          <SyntaxHighlighter language="python" style={nord}>
            num1 = 4
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={nord}>
            num2 = 5
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={nord}>
            print(("Line 2 - Value of num2 : ", num2))
           
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={nord}>
            print(("Line 2 - Value of num2 : ", num2))
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Logical Operators or Bitwise Operators",
      text: (
        <div>
          Logical operators in Python are used for conditional statements are
          true or false. Logical operators in Python are AND, OR and NOT. For
          logical operators following condition are applied. For AND operator –
          It returns TRUE if both the operands (right side and left side) are
          true For OR operator- It returns TRUE if either of the operand (right
          side or left side) is true For NOT operator- returns TRUE if operand
          is false Here in example we get true or false based on the value of a
          and b.Results are: False, True, False.
          <SyntaxHighlighter language="python" style={nord}>
            {logicalCode}
          </SyntaxHighlighter>
        </div>
      ),
    },
    { title: "It's Testing time!",
    text: "Let's Start" },
    
  ];

  

  function previousHandler() {
    if (currentExplanation !== explanations.length) {
      setCurrentExplanation(currentExplanation - 1);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function nextHandler() {
    if (currentExplanation !== explanations.length) {
      setCurrentExplanation(currentExplanation + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      console.log(score,questions.length)
      if(score+1 === questions.length){
        console.log(score,questions.length)
    bake_cookie('interm_passed',1)

    axios.patch("http://localhost:3001/test/update2", {
      email: read_cookie("email"),
      test: "interm_test",
    });

        axios.patch("http://localhost:3001/passed/update", {
      email: read_cookie("email"),
      pass: "intetm_passed",
    });
      }
      setShowResults(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const restartGame = () => {
    axios.patch("http://localhost:3001/test/update", {
      email: read_cookie("email"),
      test: "interm_test",
    });
    setTries(tries + 1);
    if (tries > 2) {
      setQuestions(extraQuestions);
    }
    console.log(questions.length);
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setCurrentExplanation(0)

  };

  return (
    <div>

      <Navbar/>
    <div className="learn-container">
      {currentExplanation !== explanations.length && (
        <div>
          <h2>{explanations[currentExplanation].title}</h2>
          <div>{explanations[currentExplanation].text}</div>
        </div>
      )}
      {currentExplanation === explanations.length && !showResults && (
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
      )}
      {showResults && (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {((score / questions.length) * 100).toFixed(2)}%)
          </h2>
          {score === questions.length ? (
              <Link to="/home" className="papa">
                Home
              </Link>
            ) : (
              <button onClick={() => restartGame()}>Restart game</button>
            )}
        </div>
      )}
      <div className="arrows">
        <div>
          {currentExplanation !== 0 &&
            currentExplanation !== explanations.length && (
              <GrLinkPrevious onClick={previousHandler} />
            )}
        </div>
        <div>
          {currentExplanation !== explanations.length && (
            <GrLinkNext onClick={nextHandler} />
          )}
        </div>
      </div>
    </div>
    </div>

  );
}
