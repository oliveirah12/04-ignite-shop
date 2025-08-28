import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import Image from "next/image";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod facere quaerat dolorem saepe ducimus natus harum nobis repellendus quae. Itaque cumque quisquam ratione amet veritatis dignissimos officiis quos omnis?</p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
