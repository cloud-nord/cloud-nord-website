import React from "react";
import "../assets/scss/main.scss";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "is-loading"
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className={`body ${this.state.loading}`}>
        <Navbar />
        {!this.props.displayHeader && <Header />}
        {children}
        <Footer />
      </div>
    );
  }
}

export default Template;
