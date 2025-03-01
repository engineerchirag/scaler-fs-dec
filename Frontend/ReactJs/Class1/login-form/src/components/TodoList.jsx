const Heading = (props) => {
    console.log(props.title, props.color);
    // let title = "Hello World!";

    // return <h1 style="color: red;">{props.title}</h1>;
    return <h1 style={{color: props.color}}>{props.title}</h1>;
}

const List = () => {
  return (
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>        
      </ul>
  )
}

const Summary = () => {
  return <h3>Summary of Todo List</h3>;
}

const TodoList = (props) => {
  return (
    <div>
        {props.color}
      <Heading title="First Heading" color="red"/>
      <Heading title="Second Heading" color="green"/>
      <List />
      <Summary />
    </div>
  )
}

export default TodoList;
