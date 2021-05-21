import React from "react";
import LearnReactLink from "./LearnReactLink";
import Logo from "./Logo";

// firstName
// lastName
class Body extends React.Component {
  render() {
    const name = `${this.props.firstName} ${this.props.lastName} is my name`;

    const { list } = this.props;
    console.log("list", list);
    return (
      <div>
        <Logo />
        <p>
          {name} Edit <code>src/App.js</code> and save to reload.
        </p>
        <LearnReactLink />
        <ul>
          {this.props.list.map((item) => {
            return (
              <li>
                {item.name} {item.lastName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Body;
