import { Injectable } from "@angular/core";

export class ProductService {
	getProducts() : Product[] {
		return [
			{ name: "Keyboard", quantity: 10 },
			{ name: "Mouse", quantity: 15 },
			{ name: "Pencil", quantity: 25 }
		];
	}
}

export class Product {
	name!: string;
	quantity!: number;
}

//providers' eklemeden direkt inject etmek istiyorsak decorator ile işaretleriz.
@Injectable({
	providedIn: 'root'
})
export class ProductServiceNoProviders {
	getProductsNoProviders() : ProductNoProviders[] {
		return [
			{ name: "Keyboard", quantity: 10 },
			{ name: "Mouse", quantity: 15 },
			{ name: "Pencil", quantity: 25 }
		];
	}
}

export class ProductNoProviders {
	name!: string;
	quantity!: number;
}