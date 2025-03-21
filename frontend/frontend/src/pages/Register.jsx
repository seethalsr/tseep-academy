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
    // <div className="bg-white p-6 rounded-lg shadow-md w-96">
    //   <h2 className="text-2xl font-bold mb-4">Register</h2>
    //   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    //     <input {...register("fullName")} placeholder="Full Name" className="input" required />
    //     <input {...register("email")} placeholder="Email" type="email" className="input" required />
    //     <input {...register("mobile")} placeholder="Mobile Number" className="input" required />
    //     <select {...register("role")} className="input" required>
    //       <option value="">Select Role</option>
    //       <option value="student">Student</option>
    //       <option value="employee">Employee</option>
    //     </select>
    //     <input {...register("password")} placeholder="Password" type="password" className="input" required />
    //     <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
    //   </form>
    // </div>
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              {...register("fullName")}
              className="form-control"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              {...register("mobile")}
              className="form-control"
              placeholder="Enter mobile number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select {...register("role")} className="form-select" required>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>


  );
};

export default Register;
