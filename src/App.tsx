import * as React from "react";
import "./styles.css";

export default function App() {
  const [formValues, setFormValues] = React.useState([
    {
      firstName: "",
      lastName: ""
    }
  ]);
  const [show, setShow] = React.useState(false);

  const handleFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormValues([...formValues, { [event.target.name]: event.target.value }]);
  };

  const renderList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    if (formValues.length < 1) return false;
    return formValues.map((item) => (
      <li>{item.firstName + " " + item.lastName}</li>
    ));
  };

  const showList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShow(true);
  };
  return (
    <div className="App">
      <p>This example will show how to update array objects in React Hooks</p>

      <form>
        <div>
          <label> Firstname :</label>{" "}
          <input
            type="text"
            name="firstName"
            onChange={(e) => handleFields(e)}
          />
          <label> Lastname :</label>{" "}
          <input
            type="text"
            name="lastName"
            onChange={(e) => handleFields(e)}
          />
          <button onClick={showList}>Add</button>
        </div>
      </form>
      <p>Full Name</p>
      <ul>{show ? renderList() : <></>}</ul>
    </div>
  );
}
