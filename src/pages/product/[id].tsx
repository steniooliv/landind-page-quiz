import { NextRouter, useRouter } from "next/router";
import Head from "next/head";

import { IProduct, ProductProps } from "../../@types";
import { ProductPage } from "../../components/ProductPage";
import { Footer } from "../../components/Footer";

import data from "../../../data.json";


const Product = ({ product }: ProductProps) => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{product?.name.length != 0 ? product?.name.slice(0, 30) + "..." : ""}</title>
      </Head>

      <ProductPage {...product} />

      <Footer />
    </>
  );
}

export default Product;


Product.getInitialProps = async (router: NextRouter) => {
  const id = await router.query.id;
  let product = {};

  data.products.map(p => {
    if (p.id == id) {
      product = p;
    }
  });

  if (product == {}) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        statusCode: 301
      },
    }
  }

  return {
    product: product
  }
}