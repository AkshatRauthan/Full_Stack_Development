import { useState } from "react";

export function FormWithCommonHandler() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    age: "",
  });

  function handleFormData(event) {
    // formData[event.target.name] = event.target.value;
    // setFormData({ ...formData });
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevents Reloading Page
    console.log(formData);
  }

  return (
    <form action="/" onSubmit={handleFormSubmit}>
      <label htmlFor="fullName">Full Name &nbsp; : &nbsp; </label>
      <input
        type="text"
        placeholder="Enter Your Full Name :"
        id="fullName"
        value={formData.fullName}
        onChange={handleFormData}
        name="fullName"
      />
      <br />
      <br />

      <label htmlFor="userName">Username &nbsp; : &nbsp; </label>
      <input
        type="text"
        placeholder="Enter Your Username :"
        id="userName"
        value={formData.userName}
        onChange={handleFormData}
        name="userName"
      />
      <br />
      <br />

      <label htmlFor="age">Age &nbsp; : &nbsp; </label>
      <input
        type="number"
        placeholder="Enter Your Age :"
        id="age"
        value={formData.age}
        onChange={handleFormData}
        name="age"
      />

      <br />
      <br />
      <button> Submit </button>
    </form>
  );
}

export function FormWithoutCommonHandler() {
  let [fullName, setFullName] = useState("");
  let [userName, setUserName] = useState("");

  let handleNameChange = (event) => setFullName(event.target.value);
  let handleUserName = (event) => setUserName(event.target.value);

  return (
    <form action="/">
      <label htmlFor="fullName">Full Name &nbsp; : &nbsp; </label>
      <input
        type="text"
        placeholder="Enter Your Full Name :"
        id="fullName"
        value={fullName}
        onChange={handleNameChange}
      />
      <br />
      <br />

      <label htmlFor="userName">Username &nbsp; : &nbsp; </label>
      <input
        type="text"
        placeholder="Enter Your Username :"
        id="userName"
        value={userName}
        onChange={handleUserName}
      />
      <br />
      <br />

      <button> Submit </button>
    </form>
  );
}

// Title : Using Controlled Components.
// Controlled Components : HTML Elements Having Their Default Internal States Which We Control By Using React State Variables.

// Flow Of Control : Change Input => handleNameChange => setFullName => Change Value Of fullName => Render Input Element.

//   i) Create The Required Input Box And Initialize A State Variable For It. Pass The State Variable As Its Value.
//  ii) onChange Handler handleNameChange Is Called First.
// iii) Using event Traker We Retrieve The New Changed Value.
//  iv) We Set The Value Of The Input To The Retrived Value Using setFullName To Change The State Of The Input Element.
//   v) The Input Element Is Rendered Again To Display The New Chnaged Value.

// We Are Doing This So That We Can Retrieve The Value Of The Form Element In Real Time Indivisually Without
// Submitting The Form And Losing Its Complete Data. (Default Behaviour Of Forms)
// Apart From This We Can Also Control The Behaviour Of All The Indivisual Components Using This Method As We Are
// Replacing The Internal States Of Input Elements With Our Custom State Variables Of React Which We Can Control Fully.
// (We Are Actually Combining Both Of Them Into React State Variable Which We Can Control).
