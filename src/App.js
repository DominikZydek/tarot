import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Reading from "./Reading";

function App() {

  return (
    <div className="App text-center min-h-screen bg-zinc-700 text-neutral-200 p-5">
      <h1 className="text-5xl mb-10 text-teal-700 font-semibold cursor-pointer" onClick={() => window.location.href = "/"}>Virtual Witch</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/daily" element={<Reading type="daily" />} />
          <Route path="/weekly" element={<Reading type="weekly" />} />
          <Route path="/advice" element={<Reading type="advice" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
