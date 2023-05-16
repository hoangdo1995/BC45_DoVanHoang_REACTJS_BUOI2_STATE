import logo from './logo.svg';
import './App.css';
import Header from './ComponentGlassApp/Header';
import ChooseGlassBox from './ComponentGlassApp/ChooseGlassBox/ChooseGlassBox';


function App() {
  return (
    <div className="App container">
      <div className='body'>
        <Header/>
        <div className='py-5'>
          <ChooseGlassBox/>
        </div>
      </div>  
    </div>
  );
}

export default App;
