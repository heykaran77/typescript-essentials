import { useState } from "react";

interface OrderFormProps {
  onSubmitForm(order: { name: string; cups: number }): void;
}

const OrderForm = ({ onSubmitForm }: OrderFormProps) => {
  const [name, setName] = useState<string>("Coco Butter");
  const [cups, setCups] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm({ name, cups });
    setName("");
    setCups(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Coffee Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label>Cups</label>
      <input
        type="number"
        placeholder="Cups Number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default OrderForm;
