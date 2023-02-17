export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (qtd: number): void => {
    this.balance += qtd;
    if (this.validateStatus()) {
      console.log("Voce depositou");
    }
  };

  withdraw = (qtd: number): void => {
    if (qtd > this.balance) {
      throw new Error("Saldo insuficiente");
    } else {
      this.balance -= qtd;
      console.log("Voce sacou");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
