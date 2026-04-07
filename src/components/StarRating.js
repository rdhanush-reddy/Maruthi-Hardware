import React from "react";
import { validateProps } from "../utils";

export class StarRating extends React.Component {
  constructor(props) {
    super(props);
    validateProps(props, { rating: { required: true, type: "number" }, count: { required: false, type: "number" } }, "StarRating");
    this.state = { hovered: null };
  }
  render() {
    const { rating, count } = this.props;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {[1,2,3,4,5].map((s) => (
          <span key={s} style={{ color: s <= Math.round(rating) ? "#e8a838" : "#3a3a3a", fontSize: 13 }}>★</span>
        ))}
        <span style={{ color: "#888", fontSize: 12, marginLeft: 2 }}>{rating} {count !== undefined && `(${count})`}</span>
      </div>
    );
  }
}