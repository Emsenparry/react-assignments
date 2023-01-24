import { useState } from "react";

const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phonenumber: "",
    email: "",
    comments: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    setContactInfo({ name: "", email: "", phonenumber: "", comments: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Kontakt Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Fulde navn"
            value={contactInfo.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phonenumber"
            placeholder="Telefon nummer"
            value={contactInfo.phonenumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}
          />
          <textarea
            name="comments"
            cols="30"
            rows="10"
            placeholder="Skriv dine kommentarer her"
            value={contactInfo.comments}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <div>
          <button type="reset">Reset</button>
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
};

export default Form;