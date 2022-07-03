import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Navbar from "../../Navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export default function Begginer() {
  const [showResults, setShowResults] = useState(false);
  const [tries, setTries] = useState();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentExplanation, setCurrentExplanation] = useState(0);
  const [score, setScore] = useState(0);

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
      text: "The correct way to comment a word",
      options: [
        { id: 0, text: "#comment", isCorrect: true },
        { id: 1, text: "//comment", isCorrect: false },
        { id: 2, text: "@comment", isCorrect: false },
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
  ]);
  const testCode = `#print "Hi"
print "Dionisis"
   `.trim();
  const testCode2 = `var=2
var=var+4 
var=3
print var
   `.trim();
  var extraQuestions = [
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
      text: "The correct way to comment a word",
      options: [
        { id: 0, text: "#comment", isCorrect: true },
        { id: 1, text: "//comment", isCorrect: false },
        { id: 2, text: "@comment", isCorrect: false },
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
            {testCode}
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
          What is the output of below code?
          <SyntaxHighlighter language="python" style={a11yDark}>
            {testCode2}
          </SyntaxHighlighter>
        </div>
      ),
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "6", isCorrect: false },
        { id: 2, text: "3", isCorrect: true },
      ],
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/test/get", {
        params: {
          email: read_cookie("email"),
          test: "beginner_test",
        },
      })
      .then((res) => {
        console.log("ok");
        setTries(res.data[0].beginner_test);

        console.log(tries);
        if (tries > 2) {
          console.log(questions);
          setQuestions(extraQuestions);
          console.log(extraQuestions);
        }
      });
  }, [tries]);

  const explanations = [
    {
      title: "Hello World!",
      text: (
        <div>
          If programming is the act of teaching a computer to have a
          conversation with a user, it would be most useful to first teach the
          computer how to speak. In Python, this is accomplished with the print
          statement.
          <SyntaxHighlighter language="python" style={a11yDark}>
            print "Hello, world!"
          </SyntaxHighlighter>
          A print statement is the easiest way to get your Python program to
          communicate with you. Being able to command this communication will be
          one of the most valuable tools in your programming toolbox.
        </div>
      ),
    },
    {
      title: "Print Statements",
      text: (
        <div>
          There are two different Python versions. Both Python 2 and Python 3
          are used throughout the globe. The most significant difference between
          the two is how you write a print statement. In Python 3, print has
          parentheses.
          <SyntaxHighlighter language="python" style={a11yDark}>
            print("Hello World!")
          </SyntaxHighlighter>
          In this course we will be using Python 2. If you go on to write Python
          3 it will be useful to note this key difference.
        </div>
      ),
    },
    {
      title: "Strings",
      text: (
        <div>
          Strings When printing things in Python, we are supplying a text block
          that we want to be printed. Text in Python is considered a specific
          type of data called a string. A string, so named because they’re a
          series of letters, numbers, or symbols connected in order — as if
          threaded together by string. Strings can be defined in different ways:
          <SyntaxHighlighter language="python" style={a11yDark}>
            print "This is a good string"
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={a11yDark}>
            print 'You can use single quotes or double quotes for a string'
          </SyntaxHighlighter>
          Above we printed two things that are strings and then attempted to
          print two things that are not strings. While double-quotes (“) and
          single-quotes (‘) are both acceptable ways to define a string, a
          string needs to be opened and closed by the same type of quote mark.
          We can combine multiple strings using +, like so: print "This is " +
          "a good string" This code will print out “This is a good string”.
        </div>
      ),
    },
    {
      title: "Variables",
      text: (
        <div>
          In Python, and when programming in general, we need to build systems
          for dealing with data that changes over time. That data could be the
          location of a plane, or the time of day, or the television show you’re
          currently watching. The only important thing is that it may be
          different at different times. Python uses variables to define things
          that are subject to change.
          <SyntaxHighlighter language="python" style={a11yDark}>
            greeting_message = "Welcome to Python Learning!" current_excercise =
            5
          </SyntaxHighlighter>
          In the above example, we defined a variable called greeting_message
          and set it equal to the string “Welcome to Codecademy!”. It also
          defined a variable called current_exercise and set it equal to the
          number 5.
        </div>
      ),
    },
    {
      title: "Arithmetic",
      text: (
        <div>
          One thing computers are capable of doing exceptionally well is
          performing arithmetic. Addition, subtraction, multiplication,
          division, and other numeric calculations are easy to do in most
          programming languages, and Python is no exception. Some examples:
          <SyntaxHighlighter
            wrapLines={true}
            language="python"
            style={a11yDark}
          >
            mirthful_addition = 12381 + 91817 amazing_subtraction = 981 - 312
            trippy_multiplication = 38 * 902 happy_division = 540 / 45
            sassy_combinations = 129 * 1345 + 120 / 6 - 12
          </SyntaxHighlighter>
          Above are a number of arithmetic operations, each assigned to a
          variable. The variable will hold the final result of each operation.
          Combinations of arithmetical operators follow the usual order of
          operations. Python also offers a companion to division called the
          modulo operator. The modulo operator is indicated by % and returns the
          remainder after division is performed.
          <SyntaxHighlighter language="python" style={a11yDark}>
            is_this_number_odd = 15 % 2 is_this_number_divisible_by_seven = 133
            % 7
          </SyntaxHighlighter>
          In the above code block, we use the modulo operator to find the
          remainder of 15 divided by 2. Since 15 is an odd number the remainder
          is 1. We also check the remainder of 133 / 7. Since 133 divided by 7
          has no remainder, 133 % 7 evaluates to 0.
        </div>
      ),
    },
    {
      title: "Updating Variables",
      text: (
        <div>
          Changing the contents of a variable is one of the essential
          operations. As the flow of a program progresses, data should be
          updated to reflect changes that have happened.
          <SyntaxHighlighter language="python" style={a11yDark}>
            fish_in_clarks_pond = 50
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={a11yDark}>
            print "Catching fish"
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={a11yDark}>
            number_of_fish_caught = 10
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={a11yDark}>
            fish_in_clarks_pond = fish_in_clarks_pond - number_of_fish_caught
          </SyntaxHighlighter>
          In the above example, we start with 50 fish in a local pond. After
          catching 10 fish, we update the number of fish in the pond to be the
          original number of fish in the pond minus the number of fish caught.
          At the end of this code block, the variable fish_in_clarks_pond is
          equal to 40.
        </div>
      ),
    },
    {
      title: "Comments",
      text: (
        <div>
          Most of the time, code should be written in such a way that it is easy
          to understand on its own. However, if you want to include a piece of
          information to explain a part of your code, you can use the # sign. A
          line of text preceded by a # is called a comment. The machine does not
          run this code — it is only for humans to read. When you look back at
          your code later, comments may help you figure out what it was intended
          to do.
          <SyntaxHighlighter language="python" style={a11yDark}>
            # this variable counts how many rows of the spreadsheet we have:
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={a11yDark}>
            row_count = 13
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      title: "Booleans",
      text: (
        <div>
          Sometimes we have a need for variables that are either true or false.
          This datatype, which can only ever take one of two values, is called a
          boolean. In Python, we define booleans using the keywords True and
          False:
          <SyntaxHighlighter language="python" style={a11yDark}>
            a = True
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={a11yDark}>
            b = False
          </SyntaxHighlighter>
          A boolean is actually a special case of an integer. A value of True
          corresponds to an integer value of 1, and will behave the same. A
          value of False corresponds to an integer value of 0.
        </div>
      ),
    },
    {
      title: "It's Testing time!",
      text: "Let's Start",
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
      console.log(score, questions.length);
      if (score + 1 === questions.length) {
        console.log(score, questions.length);
        bake_cookie("beginner_passed", 1);

        axios.patch("http://localhost:3001/test/update2", {
          email: read_cookie("email"),
          test: "beginner_test",
        });
        
        axios.patch("http://localhost:3001/passed/update", {
          email: read_cookie("email"),
          pass: "beginner_passed",
        });
      }
      setShowResults(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const restartGame = () => {
    axios.patch("http://localhost:3001/test/update", {
      email: read_cookie("email"),
      test: "beginner_test",
    });

    setTries(tries + 1);
    if (tries > 2) {
      setQuestions(extraQuestions);
    }
    console.log(questions.length);
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setCurrentExplanation(0);
  };

  return (
    <div>
      <Navbar />

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
