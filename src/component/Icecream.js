import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/selector";

const Icecream = (props) => {
  const [icecream, setIcecream] = useState(0);
  return (
    <div>
      <h2>Number of Ice-Cream Left : {props.numOfIcecream} </h2>
      <p>
        <input
          type="number"
          onChange={(event) => {
            setIcecream(event.target.value);
          }}
        />
        <button onClick={() => props.buyIcecream(icecream)}>
          Buy Ice-Cream
        </button>
      </p>
    </div>
  );
};

export default connect(mapStateToProps , mapDispatchToProps )(Icecream)
