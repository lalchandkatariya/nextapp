"use client"

import { Button } from "synarion-component";

export default function Page() {
  const handleChange = (e) => { console.log(e.target.value) }
  // console.log(Button)
  return (
    <>
      <h1 className="h-screen flex items-center">root component of next js</h1>
      {/* <input type="file" onChange={handleChange} /> */}
      <img alt="image" draggable="true" />
      <Button label="Enter" kind="primary" />
    </>
  );
}
