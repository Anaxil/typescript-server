export class Product {
    private id: number;

    constructor (id: number, public name: string, public quantity: number=0) {
        this.id = id;
    }

    public updateQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }

    public addProducts(addedQuantity: number) {
        this.quantity += addedQuantity;
    }

    public substractProducts(substractedQuantity: number) {
        this.quantity -= substractedQuantity;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }
}