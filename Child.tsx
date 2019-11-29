import React, { Component } from "react";

export default function Child(props) {
  return (
    <div style={{ backgroundColor: "red", padding: 10}}>
      <div style={{ backgroundColor: "green", padding: 10}}>{props.children}</div>
    </div>
  );
}
