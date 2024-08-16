import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductsPagination = ({ currentPage, setCurrentPage }) => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ['easetone', 'productsCount'],
    queryFn: async () => {
      const res = await axiosPublic.get('/products-count');

      return res.data;
    }
  });

  if (isLoading) return

  const totalPages = Math.ceil(data.totalProducts / 8);
  const pageNumbers = [...Array(totalPages).keys()];

  return (
    <div className="mb-5">
      <Pagination className="mt-4">
        <PaginationContent className="overflow-auto">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 0 ? setCurrentPage(currentPage - 1) : 0}
              className="cursor-pointer"
            />
          </PaginationItem>
          <PaginationContent className="flex gap-1 overflow-auto">
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
          </PaginationContent>
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