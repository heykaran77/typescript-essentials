import type { Coffee } from "../types/types";
import Card from "./Card";

interface CoffeeListProps {
  items: Coffee[];
}

const CoffeeList = ({ items }: CoffeeListProps) => {
  return (
    <div>
      {items.map((chai) => (
        <Card
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 30}
        />
      ))}
    </div>
  );
};

export default CoffeeList;
