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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const resizeImage_1 = __importDefault(require("./util/resizeImage"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.status(200).send('Img Route');
});
router.get('/files', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { width, height, img } = req.query;
    if (img) {
        try {
            const imgLocation = path_1.default.join(__dirname, `../../public/imgs/${img}`);
            const imgName = img.toString().replace('.jpg', '');
            const resizedImgLocation = yield (0, resizeImage_1.default)(imgName, imgLocation, parseInt(width), parseInt(height));
            res.status(200).sendFile(resizedImgLocation);
        }
        catch (error) {
            res.status(404).send('Unable to find the specified file');
        }
    }
    else {
        res.status(404).send('Unable to find the specified file');
    }
}));
exports.default = router;
