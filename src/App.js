import './App.css';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <h1>Perfect Tabs Demo</h1>
      <Tabs>
        <div label="Vishal">
          Hi, This is Vishal <em> A Developer</em>!
        </div>
        <div label="Kajol">
          Hi, This is Kajol <em>A Professor</em>!
        </div>
        <div label="Kashish">
          Hi, This is Kashish <em>A Student</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
