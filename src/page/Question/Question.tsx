import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Question.css";
import { FaAngleLeft, FaAngleRight, FaDoorOpen } from "react-icons/fa";
import { IconContext } from "react-icons";
import { getAll } from "../../connections/server";

function Contact() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const initialCounter = parseInt(queryParams.get("counter") || "0");
	const initialCounterx = parseInt(queryParams.get("x") || "0");
	const initialCountery = parseInt(queryParams.get("y") || "0");
	const [counter2, setCounter2] = useState(initialCounter);
	const [counterx, setCounterx] = useState(initialCounterx);
	const [countery, setCountery] = useState(initialCountery);
	const initialWords = [
		{
		  text1: "If you do not own any ",
		  bold1: "Other Material Assets",
		  pop1:"You need only report 'material' assets. there is no definition of what 'material' is. You should use your reasonable judgement. However, once you include and assets, you example: maybe a car is not a material asset, but an expensive yacth or private plane may be",
		  text2: "go next to the liabilities section of this form. ",
		  text3: "If you own other material assets ",
		  bold2: "Click Here",
		  pop2:"Other assets include: loans and receivables due to you; intangible assets; movable assets should include it in the future years, unless you dispose of it ",
		},
		{
			text1: "If you do not own any ",
			bold1: "other material debts or liabilities",
			pop1:"You need only report 'Other Debs and liabilities' that are 'Material'. There is no definition of what 'Material' is. You Should use your reasonable judgment. However, once you include a debt or liability, you should include it in future years, until you pay it off. Example: maybe a car is not a material asset, but an expensive yacth or private plane may be. ",
			text2: "go next to the revenues section. ",
			text3: "If you own other material assets ",
			bold2: "Click Here",
			pop2:"'Other debts and liabilities' include: short-term account payables; and other liabilities not included in the 'Debt and liabilities' section",
		}
	  ];
	const [words, setWords] = useState(initialWords);
  //const style = { color: "#929292", display:"inline" }
  return (
    <div>
      <div className="informacion">
        <span>
          {words[counter2].text1}
          <abbr title={words[counter2].pop1}>{words[counter2].bold1}</abbr>
          {", " + words[counter2].text2}
		  <br/>
		  {words[counter2].text3}
          <abbr title={words[counter2].pop2}>
            <Link className="redireccion" to={counter2 === 0 ? "/Tabla3?counter=3": counter2 === 1 && counterx ===1 ? "/Tabla3?counter=4&x=1&y=1" : counter2 === 1 && counterx ===0 ? "/Tabla3?counter=4&x=0&y=1" : "#" }>
              {words[counter2].bold2}
            </Link>
          </abbr>
        </span>
      </div>
      <div className="botones">
        <Link className="LinkNext" to={counter2 === 0 ? "/Tabla?counter=3": counter2 === 1  && counterx ===0? "/Tabla?counter=4" : counter2 === 1  && counterx ===1? "/Tabla?counter=4&x=1" : "#" }>
          <button className="back" onClick={() => getAll()}>
            <FaAngleLeft /*style={style}*/ />
            Back
          </button>
        </Link>
        <button className="saveforlater">
          Save For Later
          <FaDoorOpen /*style={style}*/ />
        </button>
        <Link className="LinkNext" to={counter2 === 0 ? "/Tabla?counter=4": counter2 === 1  && counterx ===0? "/Tabla?counter=5" : counter2 === 1 && counterx ===1 ? "/Tabla?counter=5&x=1" : "#" }>
          <button className="next">
            Next
            <FaAngleRight /*style={style}*/ />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
