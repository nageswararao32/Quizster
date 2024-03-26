import { Button, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import swal from "sweetalert";
import TimerComponent from "../Pages/TimerComponent";

const TelevisionMedium = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=30&category=14&difficulty=medium&type=multiple"
    );
    const data = await response.json();
    if (data.results) {
      setQuestions(data.results);
      setLoad(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const preventDefaultBehavior = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', preventDefaultBehavior);
    document.onkeydown = function(e) {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')) {
        preventDefaultBehavior(e);
      }
    };

    return () => {
      document.removeEventListener('contextmenu', preventDefaultBehavior);
      document.onkeydown = null;
    };
  }, []);


  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    return shuffledArray;
  };
  const [score, setScore] = useState(0);
  const [selop, setSelOp]=useState('');
  const handleOptions = (option, index, correctAnswer) => {
    if (option === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    localStorage.setItem(`Question${index}`, option);
    setSelOp(option);
  };

  const handleSidebarClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev < questions.length - 1 ? prev + 1 : prev);
    } else {
      swal(`Your score is: ${score}/${questions.length}`, 'Thank you for your Particicpation', 'success');
      navigate('/home');
      localStorage.clear();
    }
  };
  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion ? shuffleArray([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]) : [];

  return (
    <div>
      {load ? "" : <CircularProgress style={{ width: "200px", height: "200px", color: "blue" }} />}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1 style={{ textAlign: "center", fontFamily: "sans-serif", color: "magenta" }}>
        Television Quiz Medium Level
        </h1>
        <TimerComponent scores={score} />
      </div>
      <div className="mainDiv">
        {questions.length > 0 && (
          <div className="sidebar">
            {questions.map((_, index) => (
              <div key={index} className="sidebar-menu">
                <ol className="sidebar-menu">
                  <li
                    style={index === currentQuestionIndex ? { backgroundColor: "orange", color: "yellow" } : {}}
                    onClick={() => handleSidebarClick(index)}
                  >
                    {index + 1}
                  </li>
                </ol>
              </div>
            ))}
          </div>
        )}
        {currentQuestion && (
          <div style={{ margin: "20px", justifyContent: "center", flexWrap: "wrap" }} className="abc">
            <div>
              <span style={{ marginRight: "10px", color: "black", fontFamily: "sans-serif", fontSize: "28px" }}>
                {currentQuestionIndex + 1}.
              </span>
              <span style={{ color: "black", fontFamily: "sans-serif", fontSize: "28px", flexWrap: "wrap", textAlign: "center" }}>
                {currentQuestion.question}
              </span>
              <div>
                <ol>
                  {options.map((option, idx) => {
                    const storedOption = localStorage.getItem(`Question${currentQuestionIndex + 1}`);
                    const isSelected = storedOption === option;
                    return (
                      <p
                        key={idx}
                        className={`options ${isSelected ? 'selected' : ''}`}
                        style={
                          isSelected || selop === option
                            ? { backgroundColor: "lightgreen", color: "yellow", fontSize: "30px" }
                            : { color: "black", fontSize: "20px"}
                        }
                        onClick={() => handleOptions(option, currentQuestionIndex + 1, currentQuestion.correct_answer)}
                      >
                        {String.fromCharCode(65 + idx)}) {option}
                      </p>
                    );
                  })}
                </ol>
              </div>

            </div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", margin: "5px" }}>
        <Button style={{ backgroundColor: "green", width: "200px", height: "50px", border: "none", borderRadius: "10px", color: "white", fontSize: "18px", cursor: "pointer", margin: "20px" }} onClick={handlePrevious}>Previous</Button>
        <Button style={{ backgroundColor: "orange", width: "200px", height: "50px", border: "none", borderRadius: "10px", color: "white", fontSize: "18px", cursor: "pointer", margin: "20px" }} onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default TelevisionMedium;