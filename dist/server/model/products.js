"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var Products = /** @class */ (function () {
    function Products(products) {
        if (products === void 0) { products = []; }
        var _this = this;
        this.productsList = new Array();
        products.forEach(function (product) { return _this.productsList.push(product); });
    }
    Products.prototype.list = function () {
        return this.productsList;
    };
    Products.prototype.add = function (productName, productQuantity) {
        var productIds = this.productsList.map(function (product) { return product.getId(); });
        var maxId = Math.max.apply(Math, productIds);
        this.productsList.push(new product_1.Product(++maxId, productName, productQuantity));
        return this.productsList;
    };
    Products.prototype.fetch = function (productID) {
        return productID && this.productsList.filter(function (product) { return product.getId() === productID; })
            .shift();
    };
    Products.prototype.find = function (query) {
        var productID = parseInt(query);
        query = query.toLowerCase();
        return this.productsList.filter(function (product) { return product.getId() === productID
            || product.getName().toLowerCase() === query; })
            .shift();
    };
    Products.prototype.delete = function (productID) {
        var deleted = false;
        this.productsList = this.productsList.filter(function (product) {
            deleted = deleted || product.getId() === productID;
            console.log(product.getId() + "|" + productID);
            return product.getId() !== productID;
        });
        return deleted;
    };
    return Products;
}());
exports.Products = Products;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBRW5DO0lBR0ksa0JBQVksUUFBNkI7UUFBN0IseUJBQUEsRUFBQSxhQUE2QjtRQUF6QyxpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUV6QyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFTSxzQkFBRyxHQUFWLFVBQVcsV0FBbUIsRUFBRSxlQUF1QjtRQUVuRCxJQUFJLFVBQVUsR0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ2pELFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFmLENBQWUsQ0FDL0IsQ0FBQztRQUVGLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUUzRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRU0sd0JBQUssR0FBWixVQUFhLFNBQWlCO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3hDLFVBQUMsT0FBZ0IsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxTQUFTLEVBQTdCLENBQTZCLENBQUM7YUFDbkQsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLHVCQUFJLEdBQVgsVUFBWSxLQUFhO1FBRXJCLElBQUksU0FBUyxHQUFXLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDM0IsVUFBQyxPQUFnQixJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLFNBQVM7ZUFDaEQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFEdEIsQ0FDc0IsQ0FBQzthQUM1QyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0seUJBQU0sR0FBYixVQUFjLFNBQWlCO1FBQzNCLElBQUksT0FBTyxHQUFZLEtBQUssQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUN4QyxVQUFDLE9BQWdCO1lBQ2IsT0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssU0FBUyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLFNBQVMsQ0FBQztRQUN6QyxDQUFDLENBQ0osQ0FBQztRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLDRCQUFRIiwiZmlsZSI6Im1vZGVsL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL3Byb2R1Y3RcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzIHtcclxuICAgIHByaXZhdGUgcHJvZHVjdHNMaXN0OiBBcnJheTxQcm9kdWN0PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0czogQXJyYXk8UHJvZHVjdD4gPSBbXSkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHNMaXN0ID0gbmV3IEFycmF5PFByb2R1Y3Q+KCk7XHJcblxyXG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHRoaXMucHJvZHVjdHNMaXN0LnB1c2gocHJvZHVjdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsaXN0KCk6IEFycmF5PFByb2R1Y3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChwcm9kdWN0TmFtZTogc3RyaW5nLCBwcm9kdWN0UXVhbnRpdHk6IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdElkczogQXJyYXk8bnVtYmVyPiA9IHRoaXMucHJvZHVjdHNMaXN0Lm1hcChcclxuICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuZ2V0SWQoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBtYXhJZDogbnVtYmVyID0gTWF0aC5tYXgoLi4ucHJvZHVjdElkcyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdHNMaXN0LnB1c2gobmV3IFByb2R1Y3QoKyttYXhJZCwgcHJvZHVjdE5hbWUsIHByb2R1Y3RRdWFudGl0eSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZldGNoKHByb2R1Y3RJRDogbnVtYmVyKTogUHJvZHVjdCB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RJRCAmJiB0aGlzLnByb2R1Y3RzTGlzdC5maWx0ZXIoXHJcbiAgICAgICAgICAgIChwcm9kdWN0OiBQcm9kdWN0KSA9PiBwcm9kdWN0LmdldElkKCkgPT09IHByb2R1Y3RJRClcclxuICAgICAgICAgICAgLnNoaWZ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBmaW5kKHF1ZXJ5OiBzdHJpbmcpOiBQcm9kdWN0IHtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJRDogbnVtYmVyID0gcGFyc2VJbnQocXVlcnkpO1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHNMaXN0LmZpbHRlcihcclxuICAgICAgICAgICAgKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHByb2R1Y3QuZ2V0SWQoKSA9PT0gcHJvZHVjdElEXHJcbiAgICAgICAgICAgIHx8IHByb2R1Y3QuZ2V0TmFtZSgpLnRvTG93ZXJDYXNlKCkgPT09IHF1ZXJ5KVxyXG4gICAgICAgICAgICAuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKHByb2R1Y3RJRDogbnVtYmVyKTogQm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0c0xpc3QgPSB0aGlzLnByb2R1Y3RzTGlzdC5maWx0ZXIoXHJcbiAgICAgICAgICAgIChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkID0gZGVsZXRlZCB8fCBwcm9kdWN0LmdldElkKCkgPT09IHByb2R1Y3RJRDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBwcm9kdWN0LmdldElkKCkgKyBcInxcIiArIHByb2R1Y3RJRCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5nZXRJZCgpICE9PSBwcm9kdWN0SUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVsZXRlZDtcclxuICAgIH1cclxufSJdfQ==