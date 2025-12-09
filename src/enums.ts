enum Coffee {
  Latte = "latte",
  Espresso = "espresso",
}

function serveCoffee(c: Coffee) {
  return `serving ${c}`;
}

console.log(serveCoffee(Coffee.Espresso));
