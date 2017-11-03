"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, name, quantity) {
        if (quantity === void 0) { quantity = 0; }
        this.name = name;
        this.quantity = quantity;
        this.id = id;
    }
    Product.prototype.updateQuantity = function (newQuantity) {
        this.quantity = newQuantity;
    };
    Product.prototype.addProducts = function (addedQuantity) {
        this.quantity += addedQuantity;
    };
    Product.prototype.substractProducts = function (substractedQuantity) {
        this.quantity -= substractedQuantity;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
exports.Product = Product;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUdJLGlCQUFhLEVBQVUsRUFBUyxJQUFZLEVBQVMsUUFBa0I7UUFBbEIseUJBQUEsRUFBQSxZQUFrQjtRQUF2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNuRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZCQUFXLEdBQWxCLFVBQW1CLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQ0FBaUIsR0FBeEIsVUFBeUIsbUJBQTJCO1FBQ2hELElBQUksQ0FBQyxRQUFRLElBQUksbUJBQW1CLENBQUM7SUFDekMsQ0FBQztJQUVNLHVCQUFLLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0seUJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSwwQkFBTyIsImZpbGUiOiJtb2RlbC9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChpZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgcXVhbnRpdHk6IG51bWJlcj0wKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVRdWFudGl0eShuZXdRdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IG5ld1F1YW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQcm9kdWN0cyhhZGRlZFF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnF1YW50aXR5ICs9IGFkZGVkUXVhbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnN0cmFjdFByb2R1Y3RzKHN1YnN0cmFjdGVkUXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgLT0gc3Vic3RyYWN0ZWRRdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxufSJdfQ==
