import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    correct: "Paris",
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "React is a ___?",
    options: ["Library", "Framework", "Language", "Tool"],
    correct: "Library",
  },
  {
    question: "Which one is a backend language?",
    options: ["HTML", "CSS", "Node.js", "React"],
    correct: "Node.js",
  },
  {
    question: "JWT stands for?",
    options: ["Java Web Token", "JSON Web Token", "JavaScript Token", "None"],
    correct: "JSON Web Token",
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correct: "MongoDB",
  },
  {
    question: "Tailwind CSS is a ___?",
    options: ["Library", "Framework", "Utility-first CSS framework", "None"],
    correct: "Utility-first CSS framework",
  },
  {
    question: "What is used to hash passwords?",
    options: ["JWT", "Bcrypt", "Axios", "React"],
    correct: "Bcrypt",
  },
  {
    question: "Which hook is used for forms?",
    options: ["useState", "useEffect", "useForm", "useParams"],
    correct: "useForm",
  },
  {
    question: "LocalStorage stores data in?",
    options: ["Session", "Database", "Browser", "Cookie"],
    correct: "Browser",
  },
];

const Test = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0); // ✅ Add this line
  const navigate = useNavigate();

  const handleOptionChange = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) score += 5;
    });

    // Pass score to feedback page using state
    navigate("/feedback", { state: { score } });
  };

  return (
    <div className="d-flex" style={{ height: "100vh", background: "#f7f9fc" }}>
    {/* Sidebar */}
    <div className="p-4 border-end" style={{ width: "250px", background: "#fff" }}>
      <div className="mb-4 d-flex align-items-center">
        <h5 className="m-0 fw-bold">TSEEP</h5>
      </div>

      <div className="d-flex flex-wrap gap-2">
        {questions.map((_, idx) => (
          <button
            key={idx}
            className={`btn btn-sm ${
              answers[idx] ? "btn-success" : "btn-outline-secondary"
            }`}
            style={{ width: "40px", height: "40px" }}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <small>
          <div><span className="badge bg-success me-2">&nbsp;</span>Attended</div>
          <div><span className="badge bg-secondary me-2">&nbsp;</span>Not Attended</div>
          <div><span className="badge bg-light border me-2">&nbsp;</span>Yet to Attend</div>
        </small>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-grow-1 p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">
          Asses Your <span className="text-primary">Intelligence</span>
        </h4>
        <div className="d-flex align-items-center gap-3">
          <span className="text-warning fw-bold">🕒 5 Min</span>
          <button className="btn btn-outline-danger btn-sm">Logout</button>
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <h5 className="mb-3">
          {currentQuestion + 1}. {questions[currentQuestion].question}
        </h5>

        <div>
          {questions[currentQuestion].options.map((opt, i) => (
            <div className="form-check mb-2" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name={`q${currentQuestion}`}
                value={opt}
                checked={answers[currentQuestion] === opt}
                onChange={() => handleOptionChange(currentQuestion, opt)}
                id={`q${currentQuestion}_opt${i}`}
              />
              <label
                className="form-check-label"
                htmlFor={`q${currentQuestion}_opt${i}`}
              >
                {opt}
              </label>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-outline-secondary"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            ← Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              className="btn btn-primary"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next →
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};
export default Test;
