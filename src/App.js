import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "../src/Components/Router/Router";
function App() {
  return (
    <div className="App">
      {/* hello */}
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
