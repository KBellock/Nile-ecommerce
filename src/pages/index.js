import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  console.log(products);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Nile E-Commerce</title>
      </Head>

     
     <Header />

     <main className="max-w-screen-2xl mx-auto">
       <Banner />

       <ProductFeed products={products} />
     </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()

  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: { products }, // will be passed to the page component as props
  }
}
