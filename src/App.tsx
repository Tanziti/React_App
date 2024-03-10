import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New York", "San Francisco", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
