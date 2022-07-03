import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { CopyBlock, dracula } from "react-code-blocks";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../Navbar/Navbar";

import { Link } from "react-router-dom";

export default function OnlineHelp() {
 
    const [currentExplanation, setCurrentExplanation] = useState(0);

    function previousHandler() {
       
          setCurrentExplanation(currentExplanation - 1);
        
      }
    
      function nextHandler() {
      
          setCurrentExplanation(currentExplanation + 1);
        
      }
 
    const explanations=[
        {
            title: "How to browse in page's sections?",
            text: (
              <div>
                You van browse in our page using tabs button located in upper left place.
              </div>
            ),
          },
          {
            title: "How many difficulty levels are included?",
            text: (
              <div>
                There are 3 difficulty levels Beginner, Intermediate and Advanced. You start from the Beginner level and to move on 
                in the next one you must answer correct all the questions that are included in the end of every section.
              </div>
            ),
          },
          {
            title: "Why my questions have been increased?",
            text: (
              <div>
                In case that you fail answering correct the questions of a section for 3 times in a row 
                we add some extra questions to help you understand better this section.
              </div>
            ),
          },
          {
            title: "How to Logout?",
            text: (
              <div>
                You choose the Tab button and the "Logout" button in the left of the page.
              </div>
            ),
          },
          {
            title: "What is Sum Up section?",
            text: (
              <div>
               This section includes questions from all sections.
              </div>
            ),
          },
          
    ]
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
             
            
             <div className="arrows">
        <div>
          {currentExplanation !== 0 &&
            currentExplanation !== explanations.length && (
              <GrLinkPrevious onClick={previousHandler} />
            )}
        </div>
        <div>
          {currentExplanation !== explanations.length-1 && (
            <GrLinkNext onClick={nextHandler} />
          )}
        </div>
      </div>
            
          </div>

        </div>
      );
  
}
