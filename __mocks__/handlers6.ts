import { HttpResponse, http } from 'msw';

export const handlers6 = [
  http.get('https://jsonplaceholder.typicode.com/users/10', () => {
    return HttpResponse.error();
  })
];
