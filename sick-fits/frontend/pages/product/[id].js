// nextjs syntax. Says use this template for anything that matches /product/<anything>. It gives us a query param called "id" which allows us to look up the item in our database

import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
