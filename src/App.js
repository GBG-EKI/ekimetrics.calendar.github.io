import logo from './logo.svg';
import './App.css';
import Calendar from './calendar'

function App() {
  return (
    <div 
    style={{
      flexDirection: 'column'
    }}
    >
      <div
      style={{flex:1}}
      ></div>
      <div className="App"
      style={{
        maxHeight: '80vh',
        flex:6
      }}>
          <Calendar></Calendar>
      </div>
      <div
      style={{flex:1}}
      ></div>
    </div>
  );
}

export default App;
