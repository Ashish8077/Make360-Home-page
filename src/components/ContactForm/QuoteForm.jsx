import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section className="p-10 bg-blue-900 text-white">
      {submitted ? (
        <h2>Submitted!</h2>
      ) : (
        <>
          <input
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </section>
  );
}
