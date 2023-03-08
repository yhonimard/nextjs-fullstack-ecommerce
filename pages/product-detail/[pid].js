import ProductDetailComponent from "@//components/ProductDetail/ProductDetailComponent";
import axios from "axios";

const ProductDetails = ({ data }) => {
  return (
    <>
      <ProductDetailComponent datrs={data} />
    </>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/products/get`);

  const paths = data.result.map((i) => {
    return {
      params: {
        pid: `${i.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { pid } = params;
  const { data } = await axios.get(
    `http://localhost:3000/api/products/get/${pid}`
  );
  console.log(data);
  return {
    props: {
      data,
    },
  };
};