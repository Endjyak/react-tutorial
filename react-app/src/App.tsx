import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>Click on me</Button>
    </div>
  );
}

export default App;
