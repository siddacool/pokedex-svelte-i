import { wrap } from 'svelte-spa-router/wrap';

const routes = {
  '/': wrap({
    asyncComponent: () => import('pages/Home.svelte'),
  }),
  '/:id': wrap({
    asyncComponent: () => import('pages/Details.svelte'),
  }),
};

export default routes;
