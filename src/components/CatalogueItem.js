import React, { useState } from "react";
import "./Accordion.css";
import "./CatalogueItem.css";
import ximg from "../images/ximg.svg";
import yimg from "../images/yimg.svg";
export default function CatalogueItem({ data, key }) {
  const [selected, Setselected] = useState(null);

  const toggle = (data) => {
    if (selected) {
      selected.match = false;
      Setselected(null);
      console.log("select");
    } else {
      data.match = true;
      Setselected(data);
      console.log("dont");
    }
  };
  return (
    <div key={key} className="accordion-content-analyse">
      <header>
        <span className="title">
          <p className="title-name-analyse">{data.name}</p>
          <p className="second-title-name-analyse">{data.name}</p>
        </span>
        <button onClick={() => toggle(data)}>{data.match ? "-" : "+"}</button>
      </header>
      <div className={data.match ? "open" : "description"}>
        <div className="contianer-info-catalogue">
          <div className="contianer-info-catalogue-part1">
            <div>
              <p>Prélévements</p>{" "}
            </div>
            <div className="delai-contianer">
              <p>Delai</p>
              <div>24h</div>
            </div>
          </div>
          <div className="contianer-info-catalogue-part2">
            <div className="contianer-info-catalogue-part21">
              <div>
                <p>Jeune</p> <img alt="" src={ximg} />
              </div>
            </div>
            <div className="contianer-info-catalogue-part22">
              <p>Nature</p>
              <div>{data.specialite}</div>
              
            </div>
            <div className="contianer-info-catalogue-part21">
              <div>
                <p>Dispo</p>
                <img alt="" src={yimg} />
              </div>
            </div>
          </div>
          <div className="contianer-info-catalogue-part3">
            <div>
              <h2> Patient</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled .
              </p>
            </div>
            <div>
              <h2> Notes</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
