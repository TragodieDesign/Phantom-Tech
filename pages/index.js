import Head from "next/head"
import { Container } from "react-bootstrap"
import ControlledCarousel from "../components/ControlledCarousel"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"



const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Phantom Tech</title>
      </Head>
      <Container>
      <ControlledCarousel/>
      </Container>
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default HomePage
