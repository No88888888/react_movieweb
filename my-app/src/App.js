import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
// import Movie from "./components/Movie";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element="hello" />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
