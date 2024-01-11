import React, { useState, useEffect } from "react";
import axios from 'axios';

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    sapid: '',
    roll: '',
    branch: '',
    year: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await axios.post(
        process.env.REACT_APP_KEY,
        { sheet1: { ...formData } },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response);
      setSuccessMessage('Registration successful!');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (successMessage) {
      setFormData({
        name: '',
        sapid: '',
        roll: '',
        branch: '',
        year: '',
      });
    }
  }, [successMessage]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="sapid"
          inputMode="numeric"
          placeholder="Your Sapid"
          required
          onChange={handleChange}
          value={formData.sapid}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="roll"
          placeholder="Your Rollno."
          required
          onChange={handleChange}
          value={formData.roll}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="branch"
          placeholder="Your Branch"
          required
          onChange={handleChange}
          value={formData.branch}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="year"
          inputMode="numeric"
          placeholder="Year"
          required
          onChange={handleChange}
          value={formData.year}
        />
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        {isLoading ? (
          <button
            type="submit"
            className="register btn btn-style-two"
            disabled
          >
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              style={{ color: 'black' }}
            ></span>
            Loading...
          </button>
        ) : (
          <button type="submit" className="register btn btn-style-two">
            Register
          </button>
        )}
      </div>
      <br />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {successMessage && (
        <div>
          <span id="msg" style={{ color: 'black' }}>
            {successMessage}
          </span>
        </div>
      )}
    </form>
  );
};

function RegisterArea() {
  const handleRegistrationSuccess = () => {
    // You can add any additional logic to perform on successful registration
    console.log('Registration successful!');
  };

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45 pt-50">
            <div className="section-title text-center title-style-three mb-20">
              <h2>Register</h2>
            </div>
            <div className="contact-info-list text-center mb-40">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  Bidholi Campus, UPES, Dehradun, India
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  upesopen@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <RegisterForm onSuccess={handleRegistrationSuccess} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
