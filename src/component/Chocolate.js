import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/selector";

const Chocolate = (props) => {
  const [chocolate, setChocolate] = useState(0);
  return (
    <div>
      <h2>Number of Chocolate Left : {props.numOfChocolate} </h2>
      <p>
        <input
          type="number"
          onChange={(event) => {
            setChocolate(event.target.value);
          }}
        />
        <button onClick={() => props.buyChocolate(chocolate)}>
          Buy Chocolate
        </button>
      </p>
    </div>
  );
};

export default connect(mapStateToProps , mapDispatchToProps )(Chocolate)
