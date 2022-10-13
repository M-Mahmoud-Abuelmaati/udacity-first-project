"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPath = (req, res, next) => {
    console.log(`Path: ${req.path} Method: ${req.method}`);
    next();
};
exports.default = checkPath;
