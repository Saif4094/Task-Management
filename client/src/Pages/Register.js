import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "../components/User/Avatar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Adjust the import path as needed
import { registerUser } from "../Services/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const navigate = useNavigate();
  const { user, setUser, setPicture, setUserId, setToken } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser({ first_name: firstname, last_name: lastname, email, password, pictureUrl });
      setUser(response.email);
      setToken(response.token);
      setPicture(response.picture);
      setUserId(response._id);
      navigate("/");
    } catch (error) {
      console.log("Error registering in:", error);
    }
  };

  return (
    <Wrapper className="d-flex align-items-center justify-content-center mt-5">
      <GlassMorphism className="col-10 col-md-8 col-lg-6 p-3">
        <h1 className="display-6">Create an account.</h1>
        <p className="text-sm fw-bolder">Get things done.</p>
        <form className="py-3" onSubmit={handleSubmit}>
          {pictureUrl && <Avatar url={pictureUrl} />}
          <div className="row mb-3">
            <div>
              <label htmlFor="inputPictureUrl" className="form-label">Picture Url</label>
              <input
                type="text"
                className="form-control"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                id="inputPictureUrl"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="inputFirstname" className="form-label">Firstname</label>
              <input
                type="text"
                className="form-control"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                id="inputFirstname"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastname" className="form-label">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <p className="text-sm mt-2 mb-0">
            Already have an account? <strong className="text-decoration-underline" onClick={() => navigate('/login')}>sign in</strong>
          </p>
        </form>
      </GlassMorphism>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div``;

const GlassMorphism = styled.div`
  background: rgba(155, 155, 155, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;
