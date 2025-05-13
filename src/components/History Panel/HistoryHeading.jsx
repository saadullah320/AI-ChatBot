export const HistoryHeading = ({ history , setHistory}) => {
    return(
        <>
        <div className="flex justify-center items-center content-center p-8">
        <h1 className="text-2xl bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text text-transparent"> Recent History</h1>
        <svg
            onClick={() => {
              localStorage.removeItem("history");
                setHistory([]);
            }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#e3e3e3"
          className="ml-2 mt-2 cursor-pointer hover:scale-150 transition-transform duration-100 ease-in-out"
        >
          <path d="m400-325 80-80 80 80 51-51-80-80 80-80-51-51-80 80-80-80-51 51 80 80-80 80 51 51Zm-88 181q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480Zm-336 0v480-480Z" />
        </svg>
      </div>
        </>
    )
}