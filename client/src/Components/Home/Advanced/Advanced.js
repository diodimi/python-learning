import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { CopyBlock, dracula } from "react-code-blocks";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  const testCode = `a = True
   b = False
   print(a and b or b)
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
      title: "",
      text: <div></div>,
    },
    {
      title: "",
      text: <div></div>,
    },
    {
      title: "",
      text: <div></div>,
    },
  ];

  const questions = [
    {
      text: "What is the output of True and False",
      options: [
        { id: 0, text: "True", isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of True or False",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of 10<=10",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: "What is the output of 5>=10",
      options: [
        { id: 0, text: "True", isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
        { id: 2, text: "I don't know", isCorrect: false },
      ],
    },
    {
      text: (
        <div>
          what is the output of below code
          <SyntaxHighlighter language="python" style={nord}>
            {testCode}
          </SyntaxHighlighter>
        </div>
      ),
      options: [
        { id: 0, text: "True", isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
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
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
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
  );
}
