export default function QuestionInput({question, setQuestion, handlequestion}){
    return(
        <>
        <input
          type="text"
          placeholder="Ask me anything..."
          className=" outline-none w-full h-full p-1"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="p-1 cursor-pointer"
          onClick={handlequestion}
          type="submit"
        >
          Ask
        </button>
        </>
    )
}