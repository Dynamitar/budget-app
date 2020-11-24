export class BudgetItem {
  description: string;
  amount: number;

  constructor(amount: number, description: string) {
    this.amount = amount;
    this.description = description;
  }

}