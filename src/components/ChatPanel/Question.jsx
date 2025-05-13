
export default function Question({ question }) {
  return (
    <>
      {question && (
        <span className="text-zinc-400 bg-zinc-700 text-right inline-block self-end p-3 mr-5 mb-5 rounded-b-3xl rounded-tl-3xl">
          {question}
        </span>
      )}
    </>
  );
}
