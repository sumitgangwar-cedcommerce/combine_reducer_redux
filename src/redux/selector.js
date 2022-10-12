import { buyCake, buyChocolate, buyIcecream } from "./action";

export const mapStateToProps = (state ) => {
  // console.log(state)
  return {
    numOfCake: state.CakeReducer.numberOfCake,
    numOfChocolate: state.chocolateReducer.numberOfChocolate,
    numOfIcecream: state.icecreamReducer.numberOfIcecream,
  };
};

export const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    buyCake: (d) => dispatch(buyCake(d)),
    buyChocolate: (d) => dispatch(buyChocolate(d)),
    buyIcecream: (d) => dispatch(buyIcecream(d)),
  };
};


