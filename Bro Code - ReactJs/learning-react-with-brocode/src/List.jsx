const List = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 62 },
    { id: 4, name: "kiwi", calories: 42 },
    { id: 5, name: "grapes", calories: 62 },
    { id: 6, name: "strawberry", calories: 32 },
  ];

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      Name : {fruit.name} | Calories : {fruit.calories}
    </li>
  ));

  return <ol>{listItems}</ol>;
};

export default List;
