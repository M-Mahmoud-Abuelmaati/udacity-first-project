import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Images endpoint response', (): void => {
  describe('index api endpoint response', () => {
    it('gets api and expected to be 200', (done: DoneFn): void => {
      request
        .get('/api')
        .then((response): void => {
          expect(response.status).toBe(200);
          done();
        })
        .catch((err): void => console.log(err));
    });
  });
  describe('gets img resize function endpoint', () => {
    it('get img endpoint without height & width and expected type to be image/jpeg', (done: DoneFn): void => {
      request
        .get('/api/files?img=icelandwaterfall.jpg')
        .then((response): void => {
          expect(response.type).toEqual('image/jpeg');
          done();
        })
        .catch((err): void => console.log(err));
    });
    it('get img endpoint with height & width and expected type to be image/jpeg', (done: DoneFn): void => {
      request
        .get('/api/files?img=icelandwaterfall.jpg&width=800&height=800')
        .then((response): void => {
          expect(response.type).toEqual('image/jpeg');
          done();
        })
        .catch((err): void => console.log(err));
    });
  });

  describe('gets img resize function endpoint with errors', (): void => {
    it('get img endpoint with fake img name and expects to return error', (done): void => {
      request
        .get('/api/files?img=icelandwaterfalls.jpg&width=800&height=800')
        .then((response): void => {
          // console.log(response.error)
          expect(response.statusCode).toBe(404);
          done();
        })
        .catch((err): void => console.log(err));
    });
    it('get img endpoint without details and expects to return error', (done): void => {
      request
        .get('/api/files?')
        .then((response): void => {
          expect(response.statusCode).toBe(404);
          done();
        })
        .catch((err): void => console.log(err));
    });
  });
});
