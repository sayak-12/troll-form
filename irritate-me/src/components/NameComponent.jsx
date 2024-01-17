import { useEffect, useState } from "react";
import "./component.css";
const NameComponent = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let intervalId;
  var [lettersnow, setLettersnow] = useState([]);
  var [letter, setLetter] = useState(null);
  var [iter, setIter] = useState(0);
  useEffect(() => {
    intervalId = setInterval(() => {
      document.querySelector(".value").textContent =
        alphabet[currentLetterIndex];
      setLetter(alphabet[currentLetterIndex]);
      setCurrentLetterIndex((currentLetterIndex + 1) % alphabet.length);
    }, 400);
    return () => clearInterval(intervalId);
  }, [currentLetterIndex, alphabet, iter]);

  const roll = async () => {
    lettersnow.push(letter);
    document.querySelector(".nameip").value = lettersnow.join("");
    setTimeout(() => {
      setIter(iter + 1);
    }, 1000);
    clearInterval(intervalId);
  };

  const space = () => {
    document.querySelector(".nameip").value += " ";
    lettersnow.push(" ");
  };

  const erase = () => {
    lettersnow.pop();
    var inputField = document.querySelector(".nameip");
    var currentValue = inputField.value;
    if (currentValue.length > 0) {
      var newValue = currentValue.substring(0, currentValue.length - 1);
      inputField.value = newValue;
    }
  };
  return (
    <div className="namediv">
      <input type="text" name="" className="nameip" disabled id="" />
      <div className="value"></div>
      <div className="btngroup">
        <div className="roll" onClick={roll}>
          Pause and Enter letter
        </div>
        <div className="group">
          <div className="erase" onClick={erase}>
            Erase Letter
          </div>
          <div className="space" onClick={space}>
            Give Space
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameComponent;
