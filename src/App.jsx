import "./App.css";
import { Crousel } from "./components/Crousel";
import { slides } from "./data/crouselData.json";

function App() {
  return (
    <div className="App">
      <Crousel data={slides} />
    </div>
  );
}

export default App;
