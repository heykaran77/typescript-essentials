// Abstract Class
class Cooking {
  constructor(protected gas: number, public company: string) {}
}
// Implementation of the Abstract Class
class CookPizza extends Cooking {}
