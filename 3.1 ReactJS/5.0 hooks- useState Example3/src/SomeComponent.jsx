import React, { useState } from "react";

function SomeComponent() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  const user = {
    ...fullName,
    id: 1,
    username: "jamesbond007"
  };

  return (
    <div>
      <input
        name="fName"
        value={fullName.fName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lName"
        value={fullName.lName}
        onChange={handleChange}
        placeholder="Last Name"
      />

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default SomeComponent;
