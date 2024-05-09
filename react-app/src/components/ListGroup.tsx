function ListGroup() {
  let items = ["Praha", "Brno", "Olomouc", "Most", "Karviná"];
  items = [];

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p></p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
