import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const emojis = [
  { emoji: "😡", value: 1 },
  { emoji: "😕", value: 2 },
  { emoji: "🙂", value: 3 },
  { emoji: "😃", value: 4 },
  { emoji: "🤩", value: 5 },
];

const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
const [message,setMessage]=useState('')
const handleChange2=(e)=>{
  setMessage(e.target.value)
}

  const handleSubmit = async () => {
    if (selected === null) {
      alert("Please select a feedback emoji");
      return;
    }

    const token = localStorage.getItem("token");
    console.log(token)
    console.log(message)
    try {
      setLoading(true);
      await axios.post(
        "http://localhost:8080/api/feedback",
        {
          score,
          rating: selected,
          message
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Feedback submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error submitting feedback.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container py-5">
    <div className="text-center mb-4">
      <h4 className="mt-3">Congratulations you have Successfully Completed The Test</h4>
      <p className="fs-5">
        Score :{" "}
        <span className="badge bg-warning text-dark fs-5 px-3 py-2">
          {score}/50
        </span>
      </p>
      <p className="fw-bold">
        Your ID :{" "}
        <span className="badge bg-info text-white fs-6 px-3 py-2">
          784962
        </span>
      </p>
    </div>
    <div className="mx-auto shadow p-4 bg-white rounded" style={{ maxWidth: "600px" }}>
      <h5 className="mb-2">Feedback</h5>
      <p className="text-muted mb-3">
        Give us a feedback! <br />
        Your input is important for us. We take customer feedback very seriously.
      </p>
      <div className="d-flex justify-content-center gap-3 mb-4 fs-2">
        {emojis.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`btn btn-light border rounded-circle px-3 py-1 fs-2 ${
              selected === item.value ? "border-primary scale-up" : "opacity-50"
            }`}
            style={{
              transform: selected === item.value ? "scale(1.3)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
            onClick={() => setSelected(item.value)}
          >
            {item.emoji}
          </button>
        ))}
      </div>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="Add a comment"
        value={message}
        onChange={handleChange2}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="btn btn-dark w-100"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
      <div className="text-center mt-3">
        <button
          className="btn btn-link text-decoration-none"
          onClick={() => navigate("/")}
        >
          ⬅ Back to home
        </button>
      </div>
    </div>
  </div>
  );
};
export default Feedback;
