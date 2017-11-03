import { Product } from "./product"

export class Products {
    private productsList: Array<Product>;

    constructor(products: Array<Product> = []) {
        this.productsList = new Array<Product>();

        products.forEach((product) => this.productsList.push(product));
    }

    public list(): Array<Product> {
        return this.productsList;
    }

    public add(productName: string, productQuantity: number) {

        let productIds: Array<number> = this.productsList.map(
            (product) => product.getId()
        );

        let maxId: number = Math.max(...productIds);

        this.productsList.push(new Product(++maxId, productName, productQuantity));

        return this.productsList;
    }

    public fetch(productID: number): Product {
        return productID && this.productsList.filter(
            (product: Product) => product.getId() === productID)
            .shift();
    }
    
    public find(query: string): Product {

        let productID: number = parseInt(query);
        query = query.toLowerCase();

        return this.productsList.filter(
            (product: Product) => product.getId() === productID
            || product.getName().toLowerCase() === query)
            .shift();
    }

    public delete(productID: number): Boolean {
        let deleted: Boolean = false;

        this.productsList = this.productsList.filter(
            (product: Product) => {
                deleted = deleted || product.getId() === productID;
                console.log( product.getId() + "|" + productID);
                return product.getId() !== productID;
            }
        );

        return deleted;
    }
}