import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New York", "San Francisco", "Tokyo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
