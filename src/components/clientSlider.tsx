"use client";
import { Product } from "../styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const revalidate = 60 * 60 * 2

interface ClientSliderProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function ClientSlider({ products }: ClientSliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt={product.name}/>
          <footer>
            <strong>{product.name}</strong>
            <span>R$ {product.price.toFixed(2)}</span>
          </footer>
        </Product>
      ))}
    </div>
  );
}
