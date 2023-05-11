import React from "react";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <div className="steps">
      <div className="steps__wrapper">
        <h1>¿Qué sigue?</h1>
        <div className="steps__container">
            <div className="step">
                <span>1</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cum laudantium magnam accusantium cumque hic numquam assumenda ipsum ipsa in!</p>
            </div>
            <div className="step">
                <span>2</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cum laudantium magnam accusantium cumque hic numquam assumenda ipsum ipsa in!</p>
            </div>
            <div className="step">
                <span>3</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cum laudantium magnam accusantium cumque hic numquam assumenda ipsum ipsa in!</p>
            </div>
            <div className="step">
                <span>4</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cum laudantium magnam accusantium cumque hic numquam assumenda ipsum ipsa in!</p>
            </div>
            <div className="step">
                <span>5</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem cum laudantium magnam accusantium cumque hic numquam assumenda ipsum ipsa in!</p>
            </div>
        </div>
        <Link to={"/sign"}>←</Link>
      </div>
    </div>
  );
};

export default Steps;
