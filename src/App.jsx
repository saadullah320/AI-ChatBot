import { useState } from "react";
import ChatPanel from "./components/ChatPanel/Chatpanel";
import HistoryPanel from "./components/History Panel/HistoryPanel";
function App() {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  );

  const [selectedhistory, setSelectedHistory] = useState(null);
  const HandleSelectedHistory = (event) => {
    const selected = event.target.innerText;
    setSelectedHistory(selected);
  };

  return (
    <>
      <div className="no-desktop h-screen bg-zinc-800 overflow-hidden">
        <Drawer
          history={history}
          setHistory={setHistory}
          HandleSelectedHistory={HandleSelectedHistory}
        />
        <ChatPanel setHistory={setHistory} selectedhistory={selectedhistory} />
      </div>
      <div className="desktop-only h-screen grid-cols-5 bg-zinc-800 overflow-hidden">
        <HistoryPanel
          history={history}
          setHistory={setHistory}
          HandleSelectedHistory={HandleSelectedHistory}
        />
        <ChatPanel setHistory={setHistory} selectedhistory={selectedhistory} />
      </div>
    </>
  );
}

export default App;

// Drawer.jsx
function Drawer({ history, setHistory, HandleSelectedHistory }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          className="h-10 w-10 text-zinc-300 fixed top-4 left-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <div>
            <div className="fixed top-0 left-0 w-2/3 sm:w-1/2 h-full bg-zinc-800 z-20 transition-transform duration-300">
              <HistoryPanel
                history={history}
                setHistory={setHistory}
                HandleSelectedHistory={HandleSelectedHistory}
              />
              <button
                className={`h-10 w-10 text-zinc-300 fixed top-4 transition-all duration-300 z-30 
              ${isOpen ? "left-2/3 sm:left-1/2" : "left-4"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
              </button>
              <div
                className={`fixed left-2/3 sm:left-1/2 inset-0 bg-transparent bg-opacity-50 z-40 `}
                onClick={() => setIsOpen(false)}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
