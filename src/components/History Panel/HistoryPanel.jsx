import { HistoryHeading } from "./HistoryHeading";
import Historylist from "./HistoryList";

export default function HistoryPanel({ history , setHistory, HandleSelectedHistory}){
    
  return (
    <div className=" bg-zinc-800 w-full">
      <HistoryHeading history={history} setHistory={setHistory} />
      <Historylist history={history} setHistory={setHistory} HandleSelectedHistory={HandleSelectedHistory}/>
    </div>
  );
}
