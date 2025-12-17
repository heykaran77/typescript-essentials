interface CoffeeCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

const Card = ({ name, price, isSpecial = false }: CoffeeCardProps) => {
  return (
    <div>
      <h2>Starbucks</h2>
      <p>
        {name} <span>{isSpecial && "🔥"}</span>
      </p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
