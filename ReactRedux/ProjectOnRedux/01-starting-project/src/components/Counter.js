import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from './../store/index';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increarse(10));
  }

  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {

//   toggleCounterHandler() {

//   }

//   increamentHandler() {
//     this.props.increament();
//   }

//   decreamentHandler() {
//     this.props.decreament();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={classes.buttons}>
//           <button onClick={this.increamentHandler.bind(this)}>Increament</button>
//           <button onClick={this.decreamentHandler.bind(this)}>Decreament</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// };

// // same as useDispatch
// const dispatchToprops = (dispatch) => {
//   return {
//     increament: () => dispatch({ type: 'increament' }),
//     decreament: () => dispatch({ type: 'decreament' })
//   }
// }

// // same as useSelector
// const mapDispatchToprops = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// export default connect(mapDispatchToprops, dispatchToprops)(Counter);
