"use client";
import SendFeedbackButton from "@/components/Atoms/button/sendFeedbackButton";
import React, { useState } from "react";

const FeedbackOurTeam = () => {
  const [feedback, setFeedback] = useState("");
  const maxChars = 1000;

  const handleInputChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setFeedback(e.target.value);
    }
  };

  return (
    <div className="w-[880px] bg-[#1A1A1C] p-6 flex flex-col gap-4">
      <h1>Write Feedback</h1>

      <div className="flex flex-col gap-2">
        <textarea
          placeholder="What can we do to improve Impersonal?"
          className="w-full h-[263px] border-[2px] flex rounded-[16px] bg-transparent border-[#39393B] py-2 px-3 resize-none"
          value={feedback}
          onChange={handleInputChange}
        />
        <p className="self-end">
          {feedback.length}/{maxChars}
        </p>
      </div>

      <SendFeedbackButton />
    </div>
  );
};

export default FeedbackOurTeam;
