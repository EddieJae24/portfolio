// src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) setError((prev) => ({ ...prev, [name]: `${name} is required` }));
    else setError((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please complete all fields');
    } else {
      alert('Form submitted!');
    }
   
    {setFormData({ name: '', email: '', message: '' });
    setError({}); 
    }
    
};


  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.name && <p className="error">{error.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.email && <p className="error">{error.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.message && <p className="error">{error.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>

  );
}







export default Contact;
