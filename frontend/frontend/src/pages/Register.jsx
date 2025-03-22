import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
const { register, handleSubmit } = useForm();
const navigate = useNavigate();
const onSubmit = async (data) => {
    try {
        console.log(data);
      await axios.post("http://localhost:8080/api/auth/register", data);
      alert("Registration successful ✅");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
    <div className="d-flex flex-column flex-md-row align-items-center bg-white rounded-4 shadow-sm p-4" style={{ width: "90%", maxWidth: "900px" }}>
      
      {/* Form Section */}
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center fw-bold mb-3" style={{ color: "#343a40" }}>
          <span style={{ borderBottom: "3px solid #f4c430" }}>Register</span>
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              {...register("fullName")}
              className="form-control rounded-pill"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <div className="input-group">
              <span className="input-group-text rounded-start-pill">🇮🇳 +91</span>
              <input
                {...register("mobile")}
                className="form-control rounded-end-pill"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Current Status</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  {...register("role")}
                  className="form-check-input"
                  type="radio"
                  value="student"
                  id="student"
                  required
                />
                <label className="form-check-label" htmlFor="student">
                  Student
                </label>
              </div>
              <div className="form-check">
                <input
                  {...register("role")}
                  className="form-check-input"
                  type="radio"
                  value="employee"
                  id="employee"
                  required
                />
                <label className="form-check-label" htmlFor="employee">
                  Employee
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="form-control rounded-pill"
              placeholder="Enter password"
              required
            />
          </div>

          <button className="btn w-100 rounded-pill" style={{ backgroundColor: "#003e5f", color: "#fff" }} type="submit">
            Save
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#007bff", cursor: "pointer", fontWeight: "500" }}
          >
            Login Now
          </span>
        </p>
      </div>
    </div>
  </div>
  );
};
export default Register;
