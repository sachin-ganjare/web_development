import ToMap from "./ToMap";

function SomeComponent() {
  return (
    <div>
      <h2>Fruit List</h2>

      {ToMap.map(item => (
        <p key={item.id}>{item.name}</p>  // another pespective: try as a 'named' function.
      ))}
    </div>
  );
}

export default SomeComponent;
