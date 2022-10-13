"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const resizeImg = (imgName, imgLocation, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    let resizedImgLocation;
    if (width && height) {
        const location = `${__dirname}../../../../public/resizedImgs/${imgName}-${width}x${height}.jpg`;
        const imgLocationExists = path_1.default.join(`${location}`);
        const fileExists = yield fs_1.promises
            .readFile(imgLocationExists)
            .then((data) => {
            return data;
        })
            .catch(() => {
            return undefined;
        });
        if (!fileExists) {
            yield (0, sharp_1.default)(imgLocation)
                .resize({
                width,
                height,
            })
                .toFile(`${location}`);
        }
        resizedImgLocation = path_1.default.join(`${location}`);
    }
    else {
        resizedImgLocation = path_1.default.join(`${__dirname}../../../../public/imgs/${imgName}.jpg`);
        yield fs_1.promises
            .readFile(resizedImgLocation)
            .then(() => {
            return resizedImgLocation;
        })
            .catch(() => {
            return (resizedImgLocation = 'Unable to find the specified file');
        });
    }
    return resizedImgLocation;
});
exports.default = resizeImg;
