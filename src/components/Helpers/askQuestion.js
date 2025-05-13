const API_KEY = import.meta.env.VITE_CHATBOT_API_KEY;
const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";

const duplicate = (question) => {
  const history = JSON.parse(localStorage.getItem("history"));
  if (history) {
    for (let i = 0; i < history.length; i++) {
      if (history[i] === question) {
        return false;
      }
    }
  }
  return true;
}

 export const askQuestion = async (question) => {
    if(question === "") return;
    if(question && duplicate(question)){
      if (localStorage.getItem("history") === null) {
        localStorage.setItem("history", JSON.stringify([question]));
      }else{
      const history = JSON.parse(localStorage.getItem("history"));
      history.push(question);
      localStorage.setItem("history", JSON.stringify(history));
      }
    }

    const payload = {
      contents: [
        {
          parts: [{ text: question }],
        },
      ],
    };
    try{
    let response = await fetch(url+API_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    response = await response.json();
    const data = response.candidates[0].content.parts[0].text
    return data;
    }catch(err){
      return err.message;
    }

  };