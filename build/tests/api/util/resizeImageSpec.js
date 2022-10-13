"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = __importDefault(require("../../../routes/api/util/resizeImage"));
describe('resize image function test', () => {
    it('pass details to function and should return modified image', () => {
        expect((0, resizeImage_1.default)('santamonica', `${__dirname}../../../../public/resizedImgs/santamonica-200x200.jpg`, 200, 200)).toBeDefined();
    });
});
