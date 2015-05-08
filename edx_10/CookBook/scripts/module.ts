module ModuleWithExport {

	// module is container
	// export makes it available outside
	// if we want the class public we need to mark as export
	export class Hello {
		constructor() {
			console.log('Hello');
			console.log('Calling into World class constructor '+
						'from ModuleWithExport.Hello.');
			var world = new World();
		}
	}

	class World {
		constructor() {
			console.log('World');
		}
	}
}

var hello = new ModuleWithExport.Hello();

// you can alias module by importing
// import Accounts = AcmeBank.Accounts;
// import Lists = AcmeBank.Lists;