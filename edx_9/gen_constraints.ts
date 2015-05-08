class List<T extends IAccount>{
	_items:T[] = [];

	add(item:T){
		this._items.push(item);
	}

	getItem(): T[{
		return this._items;
	}
}