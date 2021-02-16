import './App.css';
import CounterApp from "./comps/counterApp"
import AppProto from './protfolioComps/appProto';

function App() {
  let user = "koko";

  return (
    <div className="App">
      <AppProto />
     {/* <CounterApp /> */}
    </div>
  );
}

export default App;
