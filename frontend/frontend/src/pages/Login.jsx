import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
const { register, handleSubmit } = useForm();
const navigate = useNavigate();
const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", data);
      const token=res.data.token;
      console.log(token)
      if(token) {
        localStorage.setItem("token", token);
        alert("Login successful ✅");
        navigate("/test");
      }else{
        alert("login failed  ❌-no token received ")
      }console.log()
    } catch (error) {
      alert(error.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
  
    {/* Centered Login Form */}
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="shadow-sm p-4 rounded-3" style={{ width: "100%", maxWidth: "400px", border: "1px solid #f0f0f0" }}>
        
        {/* Login Heading */}
        <h3 className="text-center mb-4" style={{ fontWeight: "700", color: "#003e5f" }}>
          <span style={{ borderBottom: "4px solid #f4c430", paddingBottom: "4px" }}>Login</span>
        </h3>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Mobile Number */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Mobile Number</label>
            <div className="input-group">
              <span className="input-group-text bg-white">🇮🇳 +91</span>
              <input
                {...register("mobile")}
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-100" style={{ backgroundColor: "#003e5f", color: "#fff" }}>
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-3" style={{ fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Register Now
          </span>
        </div>
      </div>
    </div>
  </div>

  );
};
export default Login;
