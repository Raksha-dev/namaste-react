import React from "react";
import { json } from "react-router-dom";

class OffersClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummy",
      },
    };
  }

  async componentDidMount() {
    const fetchData = await fetch("https://api.github.com/users/Raksha-dev");
    const json = fetchData.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { login } = this.state.userInfo;
    return (
      <div>
        <h1>Offer 1</h1>
        <p>{login}</p>
      </div>
    );
  }
}

export default OffersClass;
