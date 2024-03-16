import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>My button</Button>
    </div>
  );
}

export default App;
