import './App.css';
import MainContent from './components/MainContent';
import Container from '@mui/material/Container';





function App() {
  return (
    <div className="App"  >
      
      <Container maxWidth="lg" style={{
        display: 'flex',
        alignItems:'center'
        }} >
        <MainContent/>
      </Container>
      
    </div>
  );
}

export default App;
