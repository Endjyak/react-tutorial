// PascalCasing - capitalize first word of the name viz. Message()
function Message() {
  // JSX: JS XML
  const name = "Ondra";
  if (name) {
    return <h1>Hello {name}</h1>
  } else {
    return <h1>Hello World</h1>
  }
}

export default Message;