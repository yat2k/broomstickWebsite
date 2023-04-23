import React from "react";
import "./given.css";
import plot from "../assets/plotmap.png";

export default function given() {
  return (
    <>
      <div>
        <img src={plot} alt="/" className="learntImage" />
      </div>
      <div>
        <article className="learntArticle">
          <h1
          style={{
              fontFamily: "Anton,sans-serif",
              fontSize: "80px",
              textAlign: "center",
              marginBottom: 0,
              marginTop: 10,

            }}>What do we even do.</h1>
          <p style={{
            textAlign: "center",
            width: "50%",
            margin: "auto",
            fontSize: "24px",
          }}>
            Lifeskills is wholesome approach to life – The skillsets to navigate
            through life and build some epic shit! So hence, We do tech to
            non-tech workshops! (No, we don’t give engineering tuitions!)
            Because well, Life is never domain-specific – It’s Interdisciplinary
          </p>
        </article>
      </div>
    </>
  );
}

