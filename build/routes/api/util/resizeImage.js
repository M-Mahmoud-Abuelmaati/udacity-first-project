"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs_1 = __importStar(require("fs"));
const resizeImg = (imgName, imgLocation, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    let resizedImgLocation;
    if (width && height) {
        const dirLocation = path_1.default.join(__dirname, `/../../../public/resizedImgs/`);
        const location = path_1.default.join(dirLocation, `${imgName}-${width}x${height}.jpg`);
        const fileExists = yield fs_1.promises
            .readFile(location)
            .then((data) => {
            return data;
        })
            .catch(() => {
            return undefined;
        });
        if (!fileExists) {
            if (!fs_1.default.existsSync(dirLocation)) {
                try {
                    fs_1.default.mkdirSync(dirLocation);
                }
                catch (error) {
                    console.log(error);
                }
            }
            yield (0, sharp_1.default)(imgLocation)
                .resize({
                width,
                height,
            })
                .toFile(location);
        }
        resizedImgLocation = location;
    }
    else {
        resizedImgLocation = path_1.default.join(__dirname, `../../../public/imgs/${imgName}.jpg`);
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
