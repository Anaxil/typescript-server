"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//body-parser - przekazywanie danych przez użytkownika
var bodyParser = require("body-parser");
var IndexRoute = require("./routes/index");
var ProductsRoute = require("./routes/products");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.setRoutes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.setRoutes = function () {
        var router = express.Router();
        router.use(IndexRoute.Index.routes());
        router.use(ProductsRoute.Products.routes());
        this.app.use(router);
    };
    Server.prototype.startServer = function () {
        this.app.listen(3000, function () {
            console.log("serwer na porcie 3000");
        });
    };
    return Server;
}());
exports.Server = Server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQUNuQyxzREFBc0Q7QUFDdEQsd0NBQTBDO0FBQzFDLDJDQUE2QztBQUM3QyxpREFBbUQ7QUFFbkQ7SUFPSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUMvQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBYmEsZ0JBQVMsR0FBdkI7UUFDSSxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBYU8sMEJBQVMsR0FBakI7UUFDSSxJQUFJLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsYUFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksd0JBQU0iLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG4vL2JvZHktcGFyc2VyIC0gcHJ6ZWthenl3YW5pZSBkYW55Y2ggcHJ6ZXogdcW8eXRrb3duaWthXHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIEluZGV4Um91dGUgZnJvbSBcIi4vcm91dGVzL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIFByb2R1Y3RzUm91dGUgZnJvbSBcIi4vcm91dGVzL3Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcclxuICAgIHByaXZhdGUgYXBwOiBleHByZXNzLkV4cHJlc3M7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib290c3RyYXAoKSA6IFNlcnZlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuICAgICAgICAgICAgZXh0ZW5kZWQ6IHRydWVcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Um91dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRSb3V0ZXMoKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuICAgICAgICByb3V0ZXIudXNlKEluZGV4Um91dGUuSW5kZXgucm91dGVzKCkpO1xyXG4gICAgICAgIHJvdXRlci51c2UoUHJvZHVjdHNSb3V0ZS5Qcm9kdWN0cy5yb3V0ZXMoKSk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKHJvdXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2VydmVyKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ3ZXIgbmEgcG9yY2llIDMwMDBcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19
