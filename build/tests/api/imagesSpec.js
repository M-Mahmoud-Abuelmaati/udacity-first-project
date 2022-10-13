"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Images endpoint response', () => {
    describe('index api endpoint response', () => {
        it('gets api and expected to be 200', (done) => {
            request
                .get('/api')
                .then((response) => {
                expect(response.status).toBe(200);
                done();
            })
                .catch((err) => console.log(err));
        });
    });
    describe('gets img resize function endpoint', () => {
        it('get img endpoint without height & width and expected type to be image/jpeg', (done) => {
            request
                .get('/api/files?img=icelandwaterfall.jpg')
                .then((response) => {
                expect(response.type).toEqual('image/jpeg');
                done();
            })
                .catch((err) => console.log(err));
        });
        it('get img endpoint with height & width and expected type to be image/jpeg', (done) => {
            request
                .get('/api/files?img=icelandwaterfall.jpg&width=800&height=800')
                .then((response) => {
                expect(response.type).toEqual('image/jpeg');
                done();
            })
                .catch((err) => console.log(err));
        });
    });
    describe('gets img resize function endpoint with errors', () => {
        it('get img endpoint with fake img name and expects to return error', (done) => {
            request
                .get('/api/files?img=icelandwaterfalls.jpg&width=800&height=800')
                .then((response) => {
                // console.log(response.error)
                expect(response.statusCode).toBe(404);
                done();
            })
                .catch((err) => console.log(err));
        });
        it('get img endpoint without details and expects to return error', (done) => {
            request
                .get('/api/files?')
                .then((response) => {
                expect(response.statusCode).toBe(404);
                done();
            })
                .catch((err) => console.log(err));
        });
    });
});
