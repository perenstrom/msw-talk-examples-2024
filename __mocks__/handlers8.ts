import { HttpResponse, delay, http } from 'msw';

export const handlers8 = [
  http.get('https://jsonplaceholder.typicode.com/users/1', async () => {
    await delay();

    return HttpResponse.json({
      mocked: true,
      delay: 'default'
    });
  }),
  http.get('https://jsonplaceholder.typicode.com/users/2', async () => {
    await delay(3000);

    return HttpResponse.json({
      mocked: true,
      delay: '3 seconds'
    });
  })
];
