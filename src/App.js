import "./App.css";
import { AlchemyContextProvider } from "./context/Alchemy";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <AlchemyContextProvider>
      <div className="App">
        <Dashboard />
      </div>
    </AlchemyContextProvider>
  );
}

export default App;
