import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";
import ProductsPagination from "@/components/pagination/productsPagination";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useState } from "react";
import ProductOptions from "./ProductOptions";
import { ProductOptionsContext } from "@/contexts/ProductOptionsContext";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchedProducts, setSearchedProducts] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const axiosPublic = useAxiosPublic();

  console.log({brand, category, minPrice, maxPrice});
  
  const { data: products = [] } = useQuery({
    queryKey: ['easetone', 'products', currentPage, searchedProducts, brand, category, minPrice, maxPrice],
    queryFn: async () => {
      const res = await axiosPublic.get('/products', {
        params: {
          page: currentPage,
          search: searchedProducts,
          brand,
          category,
          minPrice,
          maxPrice
        }
      });

      return res.data
    }
  });

  // product option context values
  const productOptions = { setCurrentPage, setSearchedProducts, setBrand, setCategory, setMinPrice, setMaxPrice };

  return (
    <section>
      <h2 className="text-2xl font-bold text-center my-3">Our products</h2>

      {/* product options */}
      <ProductOptionsContext.Provider value={productOptions} >
        <ProductOptions />
      </ProductOptionsContext.Provider>

      {/* product display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
        {
          products.map(product => {
            const { _id, name, image, description, brand, category, price, ratings, creationDate, } = product;

            return (
              <Card key={_id}>
                <figure>
                  <img src={image} alt={`${name} image`} className="w-auto h-full mx-auto" />
                </figure>
                <CardHeader>
                  <CardTitle className="text-2xl line-clamp-1">{name}</CardTitle>
                  <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Category: {category}</p>
                  <p>Brand: {brand}</p>
                  <p>Price: {price}</p>
                  <p>Ratings: {ratings}</p>
                  <p>
                    {creationDate && format(new Date(creationDate), 'dd/MM/yyyy, h:mm:ss aaa')}
                  </p>
                </CardContent>
                <CardFooter className="block">
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>

      {/* pagination options */}
      {
        searchedProducts !== '' ?
          '' :
          <ProductsPagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      }
    </section>
  );
};

export default Products;