import logo from './logo.svg';
import './App.css';
import Header from './main/Header';
import History from './history/History';

import Informs from './inform/Inform';
import BasicTabs from './blocks/Blocks';
import Soc from './soc/Soc';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <History></History>

      <BasicTabs></BasicTabs>
      
      
   
    </div>
  );
}

export default App;
