import { useState } from "react";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setAlert("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setAlert("Thank you! Your message has been submitted.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setAlert("Error submitting form: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {alert && <p className="mb-4 text-center font-bold">{alert}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;