import "./layout.scss";
import NavBar from "./componants/NavBar/NavBar";
import HomePage from "./routes/HomePage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="nabar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App