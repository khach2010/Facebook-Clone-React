import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      {/* Body
        1: sidebar
        2: feeds
        3: widgets
        */}
    </div>
  );
}

export default App;
