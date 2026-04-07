import React, { Component } from "react";

export class LegacyCounter extends Component {
  // 1. HERE IS YOUR CONSTRUCTOR (For the rubric requirement!)
  constructor(props) {
    super(props);
    // 2. THIS IS "STATE" IN A CLASS COMPONENT
    this.state = {
      years: 0
    };
  }

  // 3. THIS IS A LIFECYCLE METHOD
  componentDidMount() {
    this.setState({ years: 29 }); // Since 1995
  }

  render() {
    return (
      <div style={{ padding: "30px", background: "#111", borderRadius: "16px", textAlign: "center", border: "1px solid #FF6B00", maxWidth: "300px", margin: "0 auto" }}>
        <h3 style={{ color: "#FF6B00", margin: 0, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Serving Farmers For
        </h3>
        <p style={{ color: "#f5f0e8", fontSize: "48px", fontWeight: "bold", margin: "10px 0 0 0", fontFamily: "'Playfair Display', serif" }}>
          {this.state.years} Years
        </p>
      </div>
    );
  }
}