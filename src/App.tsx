import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Main from "./components/Main/main";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
