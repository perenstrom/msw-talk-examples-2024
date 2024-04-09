import { HttpResponse, http } from 'msw';

export const handlers4 = [
  http.get('https://jsonplaceholder.typicode.com/users/8', () => {
    return new HttpResponse(JSON.stringify({ see: 'headers' }), {
      headers: {
        'X-Custom-Header': 'hello',
        'Content-Type': 'application/json',
        'Content-Length': '20'
      }
    });
  })
];
