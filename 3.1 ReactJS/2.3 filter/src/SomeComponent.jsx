import ToMap from "./ToMap";

function SomeComponent() {
  return (
    <div>
      <h2>Filtered Fruit List</h2>

      {ToMap
        .filter(item => item.name.startsWith("A"))
        .map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
    </div>
  );
}

export default SomeComponent;
