// mocks.js
import { rest } from 'msw';

const handlers = [
  rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        quote: 'Money is the root of all evil.',
        author: 'Mark Twain',
        categories: 'money',
      },
    ]),
  )),
];

export default handlers;
