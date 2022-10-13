"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const middleware_1 = __importDefault(require("./middlewares/middleware"));
const app = (0, express_1.default)();
const port = 5000;
//Middleware
app.use(express_1.default.static(`/public`));
app.use('/', middleware_1.default, index_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
