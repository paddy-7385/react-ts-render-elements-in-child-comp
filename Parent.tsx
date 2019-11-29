import React, { Component } from 'react';

import Child from "./Child";

export default function Parent(props) {
  return (
    <Child>
     <div>
       <button onClick= {()=>alert('clicked')}>Click me</button>
     </div>
    </Child>
  );
}