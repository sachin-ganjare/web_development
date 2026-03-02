import ToMap from "./ToMap";

function SomeComponent() {
  const elements = [];

  ToMap.forEach(item => {
    // FILTER CONDITION
    if (item.name.startsWith("A")) {
      elements.push(
        <p key={item.id}>{item.name}</p>
      );
    }
  });

  return (
    <div>
      <h2>Filtered Fruit List</h2>
      {elements}
    </div>
  );
}

export default SomeComponent;
