import * as React from "react";
import "./styles.css";

export default function App() {
  const [fieldVal, setFieldVal] = React.useState([
    {
      id: 0,
      firstName: "",
      lastName: ""
    }
  ]);
  const [fn, setFn] = React.useState("");
  const [ln, setLn] = React.useState("");

  const handleField = (event: React.ChangeEvent<HTMLInputElement>): boolean => {
    event.preventDefault();
    const { name, value } = event.target;
    setFieldVal([
      ...fieldVal,
      {
        id: fieldVal.length,
        firstName: fn,
        lastName: ln
      }
    ]);

    return true;
  };

  const renderVal = () => {
    console.log(JSON.stringify(fieldVal));
  };
  return (
    <div className="App">
      FirstName:->{" "}
      <input
        type="text"
        name="firstName"
        onChange={(e) => setFn(e.target.value)}
      />
      LastName:->{" "}
      <input
        type="text"
        name="lastName"
        onChange={(e) => setLn(e.target.value)}
      />
      <button onClick={(e) => handleField(e)}>Submit</button>
      <p>{JSON.stringify(fieldVal)}</p>
      <div>
        {fieldVal.map((item, index) => (
          <div key={index}>{item.firstName + " " + item.lastName}</div>
        ))}
      </div>
    </div>
  );
}
