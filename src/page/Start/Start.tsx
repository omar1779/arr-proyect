import React, { useState } from "react";
import "./Start.css";

function Start() {
  const [items, setItems] = useState([
    {
      text: "Legal entities listed on a recognized local or international stock exchange.",
      checked: false,
    },
    {
      text: "Legal entities owned by an international or multilateral organization or by a State.",
      checked: true,
    },
    {
      text: "Legal entities that are owners or charterers of vessels registered exclusively under the international service of the Merchant Marine of the Republic of Panama.",
      checked: false,
    },
    {
      text: "Legal entities that carry out commercial operations within the Republic of Panama.",
      checked: false,
    },
  ]);

  const handleCheckboxChange = (index:number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].checked = !updatedItems[index].checked;
      return updatedItems;
    });
  };
  return (
    <div>
      <div className="todo">
        <p>
          Please confirm that you are preparing the financial statements (annual
          return) for:
        </p>
        <select className="Name_of_list_box">
          <option> COMPANY NAME </option>
          <option> COMPANY NAME2 </option>
        </select>
		<p>for the fiscal year ended in:</p>
        <input
          type="date"
          id="date" /*value="2022-12-31"  pattern="dd/mm/yyyy"*/
        ></input>
      </div>
      <div className="todo">
        <p>Choose the Currency the information will be added:</p>
        <select className="Name_of_list_box">
          <option>{" "} $ {" "}</option>
          <option>{" "} & {" "}</option>
        </select>
      </div>
      <div className="todo">
		<h1 className="Titulo">IMPORTANT</h1>
        <table className="tablita">
          <thead>
            <tr>
              <th>
                Please mark appropriately. If your entity falls in any of the
                following categories. If this is the case you must go to the
                "submit" page, as your company is exempted from preparing this
                financial information (annual return)
              </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.text}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Start;
