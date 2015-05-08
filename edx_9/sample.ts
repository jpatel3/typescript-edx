class ListOfNumbers {
	_items: number[] = [];

	add(item: number) {
		this._items.push(item);
	}

	getItems(): number[] {
		return this._items;
	}
}

class ListOfString {
	_items: string[] = [];

	add(item: string){
		this._items.push(item);
	}

	getItems(): string[] {
		return this._items;
	}
}


class List<T> {
	_items: T[] = [];

	add(item:T){
		this._items.push(item);
	}

	getItems:(): T[]{
		return this._items;
	}
}

var accountList = List<IAccount>();