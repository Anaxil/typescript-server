"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
    }
    Server.prototype.setRoutes = function () {
        this.app.get("/", this.renderIndex);
    };
    Server.prototype.startServer = function () {
        this.app.listen(3000, function () {
            console.log("serwer na porcie 3000");
        });
    };
    Server.prototype.renderIndex = function (req, res) {
        res.send("Hello World!");
    };
    return Server;
}());
exports.Server = Server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQUVuQztJQUdJO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sMEJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sNEJBQVcsR0FBbkIsVUFBb0IsR0FBb0IsRUFBRSxHQUFxQjtRQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSx3QkFBTSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcclxuICAgIHByaXZhdGUgYXBwOiBleHByZXNzLkV4cHJlc3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJvdXRlcygpIHtcclxuICAgICAgICB0aGlzLmFwcC5nZXQoXCIvXCIsIHRoaXMucmVuZGVySW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydFNlcnZlcigpIHtcclxuICAgICAgICB0aGlzLmFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vyd2VyIG5hIHBvcmNpZSAzMDAwXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySW5kZXgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIHJlcy5zZW5kKFwiSGVsbG8gV29ybGQhXCIpO1xyXG4gICAgfVxyXG59Il19
