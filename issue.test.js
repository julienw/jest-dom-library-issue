const { waitFor } = require('@testing-library/dom');

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

it('errors with a weird error', async () => {
  Promise.resolve().then(() => {
    throw Error('oops, error');
  });

  // wait forever
  await waitFor(() => {
    throw Error();
  });
});
