import "./App.css";
import { Event } from "./Event";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { OJaune } from "./OJaune";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OJaune />
      <Event />
    </div>
  );
}

export default App;
