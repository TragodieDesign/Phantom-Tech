import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const ProductPage = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Carregando produto...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product.title} Produto</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2 m-auto h-40 w-40">
        <NextImage media={product.image} />
      </div>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight  text-white">
            {product.title} 
          </h4>
          <h4 className="mt-1 font-semibold text-lg leading-tight  text-green-600">
            R${product.price}
          </h4>
          <div className="mt-1 text-white">{product.description}</div>
        </div>

        {product.status === "published" ? (
          <button
            className="snipcart-add-item mt-4 bg-green-600 border border-green-600 d hover:shadow-lg text-white font-semibold py-2 px-4 rounded shadow"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={router.asPath}
            data-item-description={product.description}
            data-item-image={getStrapiMedia(
              product.image.formats.thumbnail.url
            )}
            data-item-name={product.title}
            v-bind="customFields"
          >
            Adicionar ao carrinho
          </button>
        ) : (
          <div className="text-center mr-10 mb-1" v-else>
            <div
              className="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Em breve...
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                Este produto ainda não está disponível.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}
