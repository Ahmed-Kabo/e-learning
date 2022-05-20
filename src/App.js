import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="task" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
