import React from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import { FaAngleLeft,FaAngleRight,FaDoorOpen } from "react-icons/fa";
import { IconContext } from "react-icons";


function Contact() {
	
	const text1 = "If you do not own any ";
const textoabbrpop1 =
  "You need only report 'material' assets. there is no definition of what 'material' is. You should use your reasonable judgement. However, once you include and assets, you example: maybe a car is not a material asset, but an expensive yacth or private plane may be";
const textoabbr1 = "other material assets";
const text2 =
  "Go next to the liabilities section of this form. if you own other material assets  ";
const textoabbrpop2 =
  "Other assets include: loans and receivables due to you; intangible assets; movable assets should include it in the future years, unless you dispose of it ";
const textoabbr2 = "Click Here";
//const style = { color: "#929292", display:"inline" }
  return (
    <div>
      <div className="informacion">
        <span>
          {text1}
          <abbr title={textoabbrpop1}>{textoabbr1}</abbr>
          {", " + text2}
          <abbr title={textoabbrpop2}>
            <Link className="redireccion" to="/">
              {textoabbr2}
            </Link>
          </abbr>
        </span>
       
      </div>
	  <div className="botones">
          <button className="back">
		  <FaAngleLeft /*style={style}*/ />
			Back
          </button>
		  <button className="saveforlater">
			Save For Later
			<FaDoorOpen /*style={style}*/ />
          </button>
		  <button className="next">
			Next
			<FaAngleRight /*style={style}*/ />
          </button>
        </div>
    </div>
  );
}

export default Contact;
