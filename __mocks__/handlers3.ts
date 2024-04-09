import { HttpResponse, http } from 'msw';

export const handlers3 = [
  http.get('https://jsonplaceholder.typicode.com/todos/:id', ({ params }) => {
    return HttpResponse.json({
      this: 'is a mocked response based on parameters',
      id: params.id
    });
  })
];
