import { HttpResponse, http } from 'msw';

export const handlers5 = [
  http.get('https://jsonplaceholder.typicode.com/users/9', () => {
    return new HttpResponse('Unauthorized', {
      status: 401,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  })
];
