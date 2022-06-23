import { Component } from 'react';
import classes from './User.module.css';


class User extends Component {

  // this is same as the clean up function in UseEffect
  componentWillUnmount() {
    console.log('User will unmount!!');
  }


  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
