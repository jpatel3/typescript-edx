interface IAccountInfo<TRouteNumber, TBankNumber>{
	routingNumber: TRouteNumber;
	banknumber: TBankNumber;
}

class BankingAccount implements IAccountInfo{

	get accountInfo(): IAccountInfo<string, number>{
		return{
			routingNumber: Constants.ROUTING_NUMBER,
			banknumber: Constants.BANK_NUMBER
		}

		
	}
}