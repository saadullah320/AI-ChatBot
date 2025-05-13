import { useEffect, useState, useTransition } from "react";
import { askQuestion } from "../Helpers/askQuestion";
import Messagebox from "./Messagebox";
import QuestionInput from "./QuestionInput";

export default function ChatPanel({ setHistory, selectedhistory }) {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [isPending, startTransition] = useTransition();
  const handlequestion = () => {
    startTransition(async () => {
      if (question.length === 0) return;
      const data = await askQuestion(question);
      setResult((prev) => [...prev, { question, answer: data }]);
      setQuestion("");
    });
  };

  useEffect(() => {
    if (selectedhistory) {
      setQuestion(selectedhistory);
      setResult([]);
      startTransition(async () => {
        const data = await askQuestion(selectedhistory);
        setResult((prev) => [
          ...prev,
          { question: selectedhistory, answer: data },
        ]);
        setQuestion("");
      });
    }
  }, [selectedhistory]);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, [question]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handlequestion();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="bg-zinc-900 p-5 flex flex-col col-span-4 min-w-full justify-around items-center">
      <Messagebox isPending={isPending} question={question} result={result} />
      <div className="border-2 bg-zinc-800 text-zinc-300 border-zinc-600 rounded-3xl flex p-3 w-1/2">
        <QuestionInput
          question={question}
          setQuestion={setQuestion}
          handlequestion={handlequestion}
        />
      </div>
    </div>
  );
}
