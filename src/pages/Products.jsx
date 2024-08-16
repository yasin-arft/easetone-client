import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Products = () => {
  const { data } = useQuery({
    queryKey: ['easetone', 'products'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/products');

      return res.data
    }
  });

  console.log(data);


  return (
    <section>
      <h2 className="text-2xl font-bold text-center my-3">Our products</h2>
    </section>
  );
};

export default Products;