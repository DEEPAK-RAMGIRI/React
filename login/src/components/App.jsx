import React from "react";
import Login from "./Login";
var isLoggedin = false;
const d = new Date();
let hour = d.getHours();
function checkduration() {
  if (hour < 12) return "GOOD MORNING";
  else if (hour < 16) return "GOOD AFTERNOON";
  else return "GOOD EVENING";
}
function loggedinornot() {
  return isLoggedin === false ? (
    <h1>{checkduration()} FOODIE 😋</h1>
  ) : (
    <Login />
  );
}
function App() {
  return <div className="container">{loggedinornot()}</div>;
}

export default App;
