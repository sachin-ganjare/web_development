// we have to build some array manually first.
  
function SomeComponent() {
  const elements = [];

  ToMap.forEach(item => {
    elements.push(
      <p key={item.id}>{item.name}</p>        // you cannot 'return'.
    );
  });

  return (
    <div>
      <h2>Fruit List</h2>
      {elements}
    </div>
  );
}
