
export default function Historylist({ history, setHistory, HandleSelectedHistory}) {
  
  return (
    <div>
      {history && history.length > 0 ? (
        <div className="overflow-y-auto h-[calc(100vh-100px)]">
          {history.map((item, index) => (
            <div
              key={index}
              className="p-3 pl-7 hover:bg-zinc-700 cursor-pointer"
              onClick={HandleSelectedHistory}
            >
              <p className="text-gray-300 truncate">{item}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-100px)]">
          <p className="text-gray-500">No recent history</p>
        </div>
      )}
    </div>
  );
}
