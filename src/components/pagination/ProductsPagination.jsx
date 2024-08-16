import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const ProductsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ['productsCount'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/products-count');

      return res.data;
    }
  });

  if (isLoading) return

  // const { totalUser } = 40;
  const totalPages = Math.ceil(data.totalProducts / 12);
  const pageNumbers = [...Array(totalPages).keys()];

  return (
    <div className="mb-5">
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 0 ? setCurrentPage(currentPage - 1) : 0}
              className="cursor-pointer"
            />
          </PaginationItem>
          {
            pageNumbers.map(page => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  className={`border cursor-pointer ${page === currentPage && "border-red-light border-2"
                    } `}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))
          }
          <PaginationItem>
            <PaginationNext
              onClick={() => currentPage < totalPages - 1 ? setCurrentPage(currentPage + 1) : totalPages - 1}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPagination;