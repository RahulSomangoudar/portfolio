import React, { useState } from "react";
import "./Contact.css";
import ScrollFloat from "./ScrollFloat";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const form = new FormData();
    form.append("access_key", "a76ce966-aba1-4542-8244-f03189b5edba"); // Replace with your Web3Forms Access Key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await res.json();

    if (result.success) {
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatusMessage("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact">
      <ScrollFloat containerClassName="achievements-heading">
        Contact Me
      </ScrollFloat>
      <p>Feel free to reach out for collaborations or any inquiries.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </section>
  );
};

export default Contact;
