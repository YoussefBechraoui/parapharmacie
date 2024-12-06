import React, { useState } from "react";
import "./style.css";

const ClientAuth = ({ setCurrentView }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    
    age: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Client Login:", { email: formData.email, password: formData.password });
      
      setCurrentView("Default");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      if (!formData.name || !formData.surname || !formData.age) {
        alert("Please fill in all the fields.");
        return;
      }
      console.log("Client Signup:", {
        name: formData.name,
        surname: formData.surname,
        age: formData.age,
        email: formData.email,
        password: formData.password,
      });
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Client Login" : "Client Signup"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {!isLogin && (
          <>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <button className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default ClientAuth;
