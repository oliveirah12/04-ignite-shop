import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { HomeContainer } from "../styles/pages/home";
import ProductsSlider from "../components/ProductsSlider";

export const revalidate = 7200

export default async function Home() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100)
    };
  });

  return (
    <HomeContainer>
      <ProductsSlider products={products} />
    </HomeContainer>
  )
}
