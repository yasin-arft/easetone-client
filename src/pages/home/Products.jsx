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

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [productsName, setProductsName] = useState('');
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ['easetone', 'products', currentPage, productsName],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?page=${currentPage}&search=${productsName}`);

      return res.data
    }
  });


  return (
    <section>
      <h2 className="text-2xl font-bold text-center my-3">Our products</h2>
      <ProductOptions setProductsName={setProductsName} />
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
                  <p>{category}</p>
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

      {
        productsName === '' ?
          '' :
          <ProductsPagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      }
    </section>
  );
};

export default Products;