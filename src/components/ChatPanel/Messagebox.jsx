import Answer from "./Answer";
import Question from "./question";

export default function Messagebox({ isPending, question, result }) {
  return (
    <div className="h-100 w-full mb-4 overflow-y-auto scrollbar-hidden">
    <h1 className="text-center mb-3 font-bold text-3xl bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text text-transparent">
        Hello user, Ask me anything
      </h1>
        {
            isPending ? (
            <div className="p-2 flex flex-col">
                {result.map((item, index) => {
                return (
                    <div key={index} className="p-2 flex flex-col">
                    <Question question={item.question ? item.question : null} />
                    <Answer answer={item.answer ? item.answer : null} />
                    </div>
                );
                })}
                <Question question={question ? question : null} />
            </div>
            ) : null
        }
        {
            isPending ? (
            <span className="dots font-bold text-zinc-200">.</span>
            ) : (
            result.map((item, index) => {
                return (
                <div key={index} className="p-2 flex flex-col">
                    <Question question={item.question ? item.question : null} />
                    <Answer answer={item.answer ? item.answer : null} />
                </div>
                );
            })
            )
        }
      </div>
  );
}