import './App.css';
const showH1 = false;
const data = [
  {id: 1, name: "A"},
  {id: 5, name: "A"},
  {id: 12, name: "A"},
]
const datamap = data.map((data1) => {
  return (<li key={data1.id}>{data1.name}</li>)
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {showH1 === true ? <h1>Ahmed Mo</h1> : <h2>Zakan</h2>}
        <div >
          <ul>
            {datamap}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
