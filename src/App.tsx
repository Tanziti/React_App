import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>My Alert</Alert>
      <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
