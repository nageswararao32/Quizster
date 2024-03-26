import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function GeneralKnowledge() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif", color: "springgreen" }}>General Knowledge Quiz</h1>
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <div style={{ height: "350px", width: "500px", backgroundColor: "#f9f9f9", overflow: "auto", textAlign: "center", display: "flex" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center", color: "black", fontFamily: "sans-serif" }}>Select the Level To Start The Test</h2>
            <button onClick={() => { navigate("/gkeasy") }} style={{ width: "250px", height: "50px", backgroundColor: "green", border: "none", color: "white", margin: "10px", cursor: "pointer", borderRadius: "10px" }} className="btn">Easy</button>
            <button onClick={() => { navigate("/gkmedium") }} style={{ width: "250px", height: "50px", backgroundColor: "magenta", border: "none", color: "white", margin: "10px", cursor: "pointer", borderRadius: "10px" }} className="btn">Medium</button>
            <button onClick={() => { navigate("/gkhard") }} style={{ width: "250px", height: "50px", backgroundColor: "orange", border: "none", color: "white", margin: "10px", cursor: "pointer", borderRadius: "10px" }} className="btn">Hard</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralKnowledge;