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
  "🤧": "Hot face",
  "🤮": "Face vomiting",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

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
    <div className="App">
      <h1>inside outt!</h1>

      <input onChange={emojiInputHandler}></input>
      <div style={{ fontSize: "larger" }}>{meaning}</div>
      <div style={{ fontSize: "larger" }}>emojis we know</div>
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
  );
}
