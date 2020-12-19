import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smilling",
  "😌": "sad",
  "🙄": "disbelife",
  "😍": "love",
  "😤": "angry",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  // var [emoji, setemoji] = useStae("");

  function emojiChnageHandler(event) {
    var userInput = event.target.value; //input

    var meaning = emojiDictionary[userInput];

    setMeaning(meaning);

    // se(userInput)
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    console.log(emoji);
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Tracker</h1>
      <input onChange={emojiChnageHandler}></input>
      <h1>Meaning : {meaning}</h1>
      <h3>Emoji We know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "2rem", fontSize: "1.2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
