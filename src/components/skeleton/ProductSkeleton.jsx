import { Skeleton } from "@/components/ui/skeleton"

const ProductSkeleton = () => {
  return (
    <div className="space-y-3" >
      <Skeleton className="w-full h-[200px]" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full h-3" />
      <Skeleton className="w-4/5 h-3" />
      <Skeleton className="w-1/2 h-3" />
      <Skeleton className="w-2/3 h-3" />
      <Skeleton className="w-full h-8" />
    </div>
  );
};

export default ProductSkeleton;