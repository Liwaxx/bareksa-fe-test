import React from 'react'
import reactDom from 'react-dom'
import Navbar from '../component'

it("render without crashing", () => {
  const div = document.createElement("div");
  reactDom.render(<Navbar/>, div);
})