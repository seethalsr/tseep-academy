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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6">MCQ Test</h1>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-medium">{i + 1}. {q.question}</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {q.options.map((opt, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q${i}`}
                  value={opt}
                  onChange={() => handleOptionChange(i, opt)}
                  className="accent-blue-500"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit Test
      </button>
    </div>
  );
};

export default Test;
