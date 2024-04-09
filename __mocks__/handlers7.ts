import { HttpResponse, bypass, http, passthrough } from 'msw';

export const handlers7 = [
  http.get(
    'https://jsonplaceholder.typicode.com/users/3',
    async ({ request }) => {
      const url = new URL(request.url);
      const shouldPassthrough = url.searchParams.get('passthrough');
      if (shouldPassthrough) return passthrough();

      const realUser = await fetch(bypass(request)).then((response) =>
        response.json()
      );

      return HttpResponse.json({
        ...realUser,
        newProperty: 'This is a mocked property'
      });
    }
  )
];
