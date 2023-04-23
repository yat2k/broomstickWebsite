import React from "react";
import "./learning.css";
import lifeskills from "../../components/assets/lifeskills.png";

export default function Learning() {
  return (
    <>
      <div className="leftpart page">
        <article>
          <h1
            style={{
              fontFamily: "Anton,sans-serif",
              fontSize: "100px",
              marginBottom: 0,
              marginTop: 10,
            }}
          >
            What we learnt
          </h1>
          <br />
          <p style={{
            fontSize:"24px",
            textAlign: "left",  
          }}>
            On a side-note, What we have realized and learnt till now Working on
            this project, revealed a lot gaps in our understanding of
            engineering and the skillsets required to realize our ideas.
            <br /> These knowledge bases and skillsets are rather intuitive and
            require it’s curriculum and content beyond the conventional form of
            engineering curriculum – We want to solve this also while we are on
            our product journey.
            <br />
            Along with this, There are a other fundamental aspects to life and
            anycompany – finances compliances and understanding of how the
            market works – Things that we have learnt and continue learning and
            exploring.
            <br /> We want to share all of this with everyone through
            ‘lifeskills’ A start-up aimed at equipping Us with some fundamental
            skillsets of life.
            <br />
          </p>
        </article>
      </div>
      <div className="rightpart page">
        <img src={lifeskills} alt="founders" className="lifeskillsImg" />
      </div>
    </>
  );
}