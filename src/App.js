import './App.css';
import {Routes, Route} from 'react-router-dom'
import Page from './Page/Page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
