import { HttpResponse, http } from 'msw';

export const handlers2 = [
  http.get('https://jsonplaceholder.typicode.com/posts/2', ({}) => {
    return HttpResponse.json({
      this: 'is a mocked response'
    });
  })
];
