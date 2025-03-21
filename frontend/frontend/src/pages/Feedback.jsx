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

  const handleSubmit = async () => {
    if (selected === null) {
      alert("Please select a feedback emoji");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/feedback",
        {
          score,
          rating: selected,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Feedback submitted successfully!");
      navigate("/"); // or a thank you page
    } catch (err) {
      console.error(err);
      alert("Error submitting feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Your Score: {score}/50
      </h2>
      <p className="text-center text-lg mb-4">How did you feel about the test?</p>
      <div className="flex justify-center gap-4 mb-6 text-3xl">
        {emojis.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item.value)}
            className={`transition-transform ${
              selected === item.value ? "scale-125" : "opacity-50"
            }`}
          >
            {item.emoji}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
    </div>
  );
};

export default Feedback;
