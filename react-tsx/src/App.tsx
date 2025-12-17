import Card from "./components/Card";
import Counter from "./components/Counter";
import type { Coffee } from "./types/types";
import CoffeeList from "./components/CoffeeList";
import OrderForm from "./components/OrderForm";

function App() {
  const menu: Coffee[] = [
    { id: 1, name: "Espresso", price: 24 },
    { id: 2, name: "Java Chip", price: 40 },
    {
      id: 3,
      name: "Hibiscus",
      price: 30,
    },
  ];
  return (
    <>
      <div>
        <h1>Cards</h1>
        <Card price={250} name="Espresso" />
        <Card price={315} name="Java Chips" isSpecial={true} />
        <Counter />
        <CoffeeList items={menu} />
        <OrderForm
          onSubmitForm={(order) => {
            console.log(order.name, order.cups);
          }}
        />
      </div>
    </>
  );
}

export default App;
