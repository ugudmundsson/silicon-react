import { useState } from "react";
import notification from "../Page7/assets/notification.svg";
import "./Page7.css";

function Page7() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidate = (formData) => {
    setErrors({});
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: `Must be a vaild e-mail.`,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    handleValidate(formData);

    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    console.log(res);
    if (res.ok) {
      setSubmitted(true);
      setFormData({ email: "" });
      setErrors("");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="subscribe pg7-bg container">
        <div id="notification">
          <img src={notification} alt="Icon notification" />
        </div>
        <div id="subshead">
          <h4>
            Subscribe to our newsletter{" "}
            <span className="subnews">
              to stay informed about latest updates
            </span>
          </h4>
        </div>
        <div className="emailform">
          <i className="fa-regular fa-envelope"></i>
          <div>
            <input
              className="input-sub"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
            <span className="suberror">{errors.email && errors.email}</span>
            {submitted && (
              <div className="submessage">
                <span>Thank you for Subscribing!</span>
              </div>
            )}
          </div>
          <button className="btn-sub" type="submit">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Page7;
