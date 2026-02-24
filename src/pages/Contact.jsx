import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setAlert("Please fill all fields!");
      return;
    }
    setAlert("Thank you! Your message has been submitted.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {alert && <div>{alert}</div>}
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;