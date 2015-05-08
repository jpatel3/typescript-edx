class Plant{
	constructor() {

	}
	getName(nameorid: any): string {
		if (typeof nameorid === "string")
		{
			return "The name of this plant is: " + nameorid;
		}
		else
		{
			return nameorid;
		}
	}
}

class PlantInfo extends Plant{
	constructor(){
		super()
	}

	getName (name: string): string;
	getName (id: number): string;
	getName (nameorid: any): string {
		var studentId = super.getName(nameorid);
		return studentId;
	}
}

var planting = new PlantInfo();
alert(planting.getName("Apple Tree"));
alert("The plant id is: " + PlantInfo.getName(1234));