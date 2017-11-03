"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Index = /** @class */ (function () {
    function Index() {
    }
    Index.routes = function () {
        var router = express.Router();
        var indexRoute = new Index();
        router.get("/", indexRoute.index.bind(indexRoute));
        return router;
    };
    Index.prototype.index = function (req, res) {
        res.send("Hello World!");
    };
    return Index;
}());
exports.Index = Index;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQUVuQztJQUFBO0lBY0EsQ0FBQztJQVppQixZQUFNLEdBQXBCO1FBQ0ksSUFBSSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU5QyxJQUFJLFVBQVUsR0FBVyxJQUFJLEtBQUssRUFBRSxDQUFBO1FBRXBDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0scUJBQUssR0FBWixVQUFhLEdBQW9CLEVBQUUsR0FBcUI7UUFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsWUFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksc0JBQUsiLCJmaWxlIjoicm91dGVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdXRlcygpOiBleHByZXNzLlJvdXRlciB7XHJcbiAgICAgICAgbGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXhSb3V0ZSA6IEluZGV4ID0gbmV3IEluZGV4KClcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIuZ2V0KFwiL1wiLCBpbmRleFJvdXRlLmluZGV4LmJpbmQoaW5kZXhSb3V0ZSkpO1xyXG4gICAgICAgIHJldHVybiByb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZGV4KHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuICAgICAgICByZXMuc2VuZChcIkhlbGxvIFdvcmxkIVwiKTtcclxuICAgIH1cclxufSJdfQ==
