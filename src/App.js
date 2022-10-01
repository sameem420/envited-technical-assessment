import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateEvent from "./pages/CreateEvent";
import Event from "./pages/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/create" element={<CreateEvent />}></Route>
        <Route path="/event" element={<Event />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

