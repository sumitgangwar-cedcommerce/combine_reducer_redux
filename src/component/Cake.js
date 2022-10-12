import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/selector";

const Cake = (props) => {
    const [cake , setCake] = useState(0)
  return (
    <div>
      <h2>Number of Cakes Left : {props.numOfCake} </h2>
      <p>
        <input
          type="number"
          onChange={(event) => {
            setCake(event.target.value);
          }}
        />
        <button onClick={() => props.buyCake(cake)}>Buy Cake</button>
      </p>
    </div>
  );
};

export default connect(mapStateToProps , mapDispatchToProps )(Cake)
