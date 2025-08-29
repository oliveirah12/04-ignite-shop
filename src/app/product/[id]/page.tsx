import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import Image from "next/image";
import Stripe from "stripe";

export const revalidate = 3600; 

export async function generateStaticParams() {
  const products = await stripe.products.list();

  return products.data.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function Product({ params }: ProductPageProps) {
  const { id: productId } = await params;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  const productProps = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount! / 100),
    description: product.description ?? "",
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={productProps.imageUrl} width={520} height={480} alt=""/>
      </ImageContainer>

      <ProductDetails>
        <h1>{productProps.name}</h1>
        <span>{productProps.price}</span>
        <p>{productProps.description}</p>
        <button>Comprar</button>
      </ProductDetails>
    </ProductContainer>

  )
}
