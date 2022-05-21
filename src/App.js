import { Route, Routes } from "react-router-dom";
import Discussion from "./pages/Discussion";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="discussion" element={<Discussion />} />
          <Route path="task" element={<Lessons />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
