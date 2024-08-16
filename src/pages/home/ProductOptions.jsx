// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaSearch, FaFilter, FaSort } from "react-icons/fa";

const ProductOptions = ({ setProductsName }) => {
  const form = useForm({
    defaultValues: {
      productName: "",
    },
  });

  const onSubmit = (values) => {
    setProductsName(values.productName);
  }

  return (
    <div className="flex justify-between gap-4">
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
        <Button size="sm">
          <FaFilter />
        </Button>
        <Button size="sm">
          <FaSort />
        </Button>
      </div>
    </div>
  );
};

export default ProductOptions;