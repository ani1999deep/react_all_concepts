import React from "react";
import "./GetValue.css";

function GetValue() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const first = e.target.fname.value;
    const last = e.target.lname.value;
    console.log(`Frist name is: ${first} \n Last name is: ${last}`);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fname" placeholder="Enter First Name" />
          <br />
          <br />
          <input type="text" name="lname" placeholder="Enter Last Name" />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default GetValue;
