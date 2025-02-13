import React, { useState } from "react";

const HealthQuizzes = () => {
  // Quiz Question State
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample Question
  const question = {
    text: "Which vitamin is essential for strong bones?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D",
  };

  // Handle Answer Selection
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  // Handle Submit
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">🩺 Health Quiz</h1>

        {/* Quiz Question */}
        <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
        <ul className="space-y-3">
          {question.options.map((option, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg border cursor-pointer transition ${
                selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>

        {/* Submit Button */}
        <button
          className="mt-5 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
          onClick={handleSubmit}
          disabled={!selectedAnswer || isSubmitted}
        >
          Submit
        </button>

        {/* Show Result */}
        {isSubmitted && (
          <p className={`mt-4 font-semibold ${selectedAnswer === question.correctAnswer ? "text-green-600" : "text-red-600"}`}>
            {selectedAnswer === question.correctAnswer ? "✅ Correct! Vitamin D is essential for strong bones." : "❌ Incorrect. The correct answer is Vitamin D."}
          </p>
        )}
      </div>
    </div>
  );
};

export default HealthQuizzes;
