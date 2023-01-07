import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😄": "Smile",
  "😁": "Grin",
  "😉": "Wink",
  "😍": "Heart eyes",
  "😘": "Kissing heart",
  "😑": "Expressionless",
  "😏": "Smirk",
  "🥶": "Cold face",
  "🤧": "Sneezing",
  "🤮": "Face vomiting",
  "💕": "Two hearts",
  "😠": "Angry face",
  "👑": "Crown",
  "👋": "Waving hand"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Translation will appear here...");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    if (userInput === "") {
      meaning = "Translation will appear here...";
    } else {
      meaning = emojiDictionary[userInput];
    }
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div style={{ padding: "0rem" }} className="App">
      <h1>Emoji interpreter</h1>
      <input
        style={{ fontSize: "large" }}
        onChange={emojiInputHandler}
        placeholder="Enter your emoji here"
      ></input>
      <div
        style={{
          fontSize: "2rem",
          maxWidth: "15%",
          margin: "1rem auto ",
          padding: "1rem",
          color: "#6D28D9"
        }}
      >
        {meaning}
      </div>
      <hr style={{ margin: "2rem" }}></hr>
      <div style={{ fontSize: "1.5rem", color: "#4D7C0F", marginTop: "2rem" }}>
        emojis we know :
      </div>
      <div
        style={{
          border: "1px solid black",
          maxWidth: "30%",
          margin: "2rem auto"
        }}
      >
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiclickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer className="footer">
        <div className="footer-header">About</div>
        <p>An emoji interpreter app that gives you the meaning of an emoji.</p>
      </footer>
    </div>
  );
}
