import resizeImage from '../../../routes/api/util/resizeImage';

describe('resize image function test', () => {
  it('pass details to function and should return modified image', () => {
    expect(
      resizeImage(
        'santamonica',
        `${__dirname}../../../../public/resizedImgs/santamonica-200x200.jpg`,
        200,
        200
      )
    ).toBeDefined();
  });
});
