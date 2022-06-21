import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { CopyBlock, dracula } from "react-code-blocks";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../Navbar/Navbar";

export default function Advanced() {
  const [showResults, setShowResults] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentExplanation, setCurrentExplanation] = useState(0);
  const [score, setScore] = useState(0);
  const operators = "( ==, != , <>, >,<=, etc.)";
  const arithmeticCODE = ` x= 4
  y= 5
  print(x + y)`;
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

  const explanations = [
    {
      title: "Creating a Function",
      text: (
        <div>
          In Python a function is defined using the def keyword:
          <SyntaxHighlighter language="python" style={nord}>
            {logicalCode}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Calling a Function",
      text: (
        <div>
          To call a function, use the function name followed by parenthesis:
          <SyntaxHighlighter language="python" style={nord}>
            {functionCode}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Arguments",
      text: (
        <div>
          Information can be passed into functions as arguments. Arguments are
          specified after the function name, inside the parentheses. You can add
          as many arguments as you want, just separate them with a comma. The
          following example has a function with one argument (fname). When the
          function is called, we pass along a first name, which is used inside
          the function to print the full name:
          <SyntaxHighlighter language="python" style={nord}>
            {functionCode2}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Arrays",
      text: (
        <div>
          Arrays are used to store multiple values in one single variable:
          <SyntaxHighlighter language="python" style={nord}>
            cars = ["Ford", "Volvo", "BMW"]
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Access the Elements of an Array",
      text: (
        <div>
          You refer to an array element by referring to the index number.
          <SyntaxHighlighter language="python" style={nord}>
            {functionCode3}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Conditions and If statements",
      text: (
        <div>
          Conditions can be used in several ways, most commonly in "if
          statements" and loops. An "if statement" is written by using the if
          keyword.
          <SyntaxHighlighter language="python" style={nord}>
            {functionCode4}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Elif",
      text: (
        <div>
          The elif keyword is pythons way of saying "if the previous conditions
          were not true, then try this condition".
          <SyntaxHighlighter language="python" style={nord}>
            {functionCode6}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Else",
      text: (
        <div>
          The else keyword catches anything which isn't caught by the preceding
          conditions.
          <SyntaxHighlighter language="python" style={nord}>
            {functionCode5}
          </SyntaxHighlighter>
        </div>
      ),
    },

    { title: "It's Testing time!", text: "Let's Start" },
  ];

  const questions = [
    {
      text: "How to call a function",
      options: [
        { id: 0, text: "function_name()", isCorrect: true },
        { id: 1, text: "function_name", isCorrect: false },
        { id: 2, text: "()function_name()", isCorrect: false },
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
      setShowResults(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
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
            {score===questions.length ? <div>You passed!</div>:<div>Try again!</div> }
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          {score!==questions.length && <button onClick={() => restartGame()}>Restart game</button>}
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
