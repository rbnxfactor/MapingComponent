import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

//1. Creat Entry Component
//2. Create props to replace hardecoded data.
//3a. Import the emojipedia const.
//3b.Map through the emojipedia array and render Entry components

//var =
// {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function creatEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(creatEntry)}</dl>
    </div>
  );
}

export default App;
