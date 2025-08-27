interface ProductPageProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductPageProps) {
  return (
    <h1>Produto: {params.id}</h1>
  )
}
