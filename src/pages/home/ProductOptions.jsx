import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaSearch, FaSort } from "react-icons/fa";
import Filter from "./Filter";
import { useContext } from "react";
import { ProductOptionsContext } from "@/contexts/ProductOptionsContext";


const ProductOptions = () => {
  const { setSearchedProducts } = useContext(ProductOptionsContext);
  const form = useForm({
    defaultValues: {
      productName: "",
    },
  });

  // search by form on submit handler
  const onSubmit = (values) => {
    setSearchedProducts(values.productName.trim());
  }

  return (
    <div className="flex justify-between gap-4">

      {/* search by name form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Search" {...field} className="h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="sm">
            <FaSearch />
          </Button>
        </form>
      </Form>
      <div className="flex gap-2">

        {/* filter drawer */}
        <Filter />

        {/* sort button */}
        <Button size="sm">
          <FaSort />
        </Button>
      </div>
    </div>
  );
};

export default ProductOptions;