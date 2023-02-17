import { DioAccount } from "./DioAccount";

export class SuperAccount extends DioAccount {
  // overload deposit method
  deposit = (qtd: number): void => {
    super.deposit(qtd + 10);
  };
}
