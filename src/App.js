import { Box } from '@mui/system';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Box style ={{marginTop:78}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App