import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Praha", "Brno", "Olomouc", "Most", "Karviná", "Kadaň"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />{" "}
    </div>
  );
}

export default App;
