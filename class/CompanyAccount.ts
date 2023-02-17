import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (qtd: number): void => {
    this.deposit(qtd);
    console.log("Voce pegou um empréstimo");
  };
}
