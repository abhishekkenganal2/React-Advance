import React, { useContext } from "react";
// import UserContext from "../utils/UserContext";

// Class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    // const {loggedInUser} = useContext(UserContext);

    const { count, count2 } = this.state;

    const ChangeCount = () => {
      //NOTE: We can't use this.state.count directly to update the state
      // this.state.count = this.state.count + 1; // This is wrong
      // this.setState({count: this.state.count + 1}); // This is correct

      this.setState({
        count: count + 1,
        count2: count2 + 1,
      });
    };

    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <button
          onClick={ChangeCount}
          className="bg-slate-300 my-2 px-2 rounded-md"
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
