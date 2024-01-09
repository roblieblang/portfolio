import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Sending:", formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        visitorEmail: formData.email,
        visitorName: formData.name,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmissionMessage("Email sent successfully. Thanks for stopping by!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmissionMessage("Error sending email. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-4xl md:text-5xl text-center">Get in Touch</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <button
        type="submit"
        className="md:px-6 md:py-3 px-4 py-2 bg-blue-800 text-white md:text-xl rounded hover:bg-gray-700"
      >
        Send
      </button>
      {submissionMessage && (
        <div className="mt-4 text-center">{submissionMessage}</div>
      )}
    </form>
  );
}
