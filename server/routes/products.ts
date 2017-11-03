import * as express from "express";
import * as Product from "../model/product";
import * as ProductsModel from "../model/products"

export class Products {

    private p: Product.Product;
    // private productList: Array<Product.Product> = [];
    private productList: ProductsModel.Products;

    constructor() {

        this.productList = new ProductsModel.Products([
            new Product.Product(1, "Produkt 1", 1),
            new Product.Product(2, "PRodukt 12", 12),
            new Product.Product(3, "produKT 0")
        ]);

    }

    public static routes(): express.Router {
        let router: express.Router = express.Router();

        let productsRoute: Products = new Products()

        router.get("/products/", productsRoute.index.bind(productsRoute));
        router.get("/products/:product", productsRoute.find.bind(productsRoute));
        router.post("/products/", productsRoute.create.bind(productsRoute));
        router.post("/products/delete/:product_id", productsRoute.delete.bind(productsRoute));
        return router;
    }

    public index(req: express.Request, res: express.Response) {
        res.json(this.productList.list());
    }

    public find(req: express.Request, res: express.Response) {
        let productQuery: string = req.params.product;

        if (!productQuery) {
            res.status(404).send("Product not found");
            return;
        }

        let product: Product.Product = this.productList.find(productQuery);

        if (!product) {
            res.status(404).send("Product not found");
            return;
        }

        res.json(product);
    }

    public create(req: express.Request, res: express.Response) {
        let productName: string = req.body.product_name;
        let productQuantity: number = parseInt(req.body.quantity) || 0;
        
        if (!productName) {
            res.status(500).send("Product name not found");
            return;
        }        

        res.json(this.productList.add(productName, productQuantity));
        
    }    

    public delete(req: express.Request, res: express.Response) {
        let productID: number = parseInt(req.params.product_id);

        let wasDeleted: Boolean = this.productList.delete(productID);

        if(!wasDeleted) {
            res.status(404).send("Product not found");
            return;
        }

        return res.json({success: true});

    }
}