import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";



const TimerComponent = (props) => {
  const [timer, setTimer] = useState({ hours: 0, minutes: 30, seconds: 0 });
    const navigate = useNavigate();
    let score = props.scores;
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        const newTimer = { ...prevTimer };
        if (newTimer.hours === 0 && newTimer.minutes === 0 && newTimer.seconds === 0) {
          clearInterval(countdown);
          swal(`Time's up! Your score is: ${score}/30`, 'Thank you for your Participation', 'success');
          navigate("/home");
          localStorage.clear();
          return newTimer;
        }
        if (newTimer.seconds > 0) {
          newTimer.seconds--;
        } else {
          if (newTimer.minutes > 0) {
            newTimer.minutes--;
            newTimer.seconds = 59;
          } else {
            newTimer.hours--;
            newTimer.minutes = 59;
            newTimer.seconds = 59;
          }
        }
        return newTimer;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [navigate, score]);

  return (
    <div>
      <h1 style={{ textAlign: "center", color:"black",fontFamily:"sans-serif"}}>
        Timer: <span className="blink">{timer.hours.toString().padStart(2, "0")}</span>:
        <span className="blink">{timer.minutes.toString().padStart(2, "0")}</span>:
        <span className="blink">{timer.seconds.toString().padStart(2, "0")}</span>
      </h1>
    </div>
  );
};

export default TimerComponent;
