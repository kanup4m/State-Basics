import React from "react";
import ReactDOM from "react-dom";
import { Input } from "antd";
import "antd/dist/antd.css";
import logo from "./images/ab-img.png";
import "./App.css";
import { Row, Col } from "antd";
import { Button } from "antd";
import Field from "./Field";
class App extends React.Component {
  state = {
    Name: ""
  };

  handleFormChange = e => {
    this.setState({
      Name: e.target.value,
      Email: e.target.value
    });
  };

  render() {
    return (
      <div className="form">
        <Row className="container">
          <Col span={12} className="grid1">
            <span className="form-title">Register</span>
            <img src={logo} alt="Logo" className="image" /> <br /> <br />
            <div className="wrap-input1">
              <Input
                className="input1"
                placeholder="Name"
                onChange={this.handleFormChange}
              />
              <span className="shadow-input1" />
            </div>
            <Field tag="Email" />
            <Field tag="phone" />
          </Col>
          <Col span={12} className="grid1">
            <span className="form-title">
              Welcome <br /> <br />{" "}
              <span className="name"> {this.state.Name} </span> <br /> <br />{" "}
              <br />
              Fill your details to continue
            </span>
            <Field tag="Gender" />
            <Field tag="Date of BIrth" />
            <Field tag="Address" />
            <div className="btn">
              <Button className="form-btn">Submit</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
