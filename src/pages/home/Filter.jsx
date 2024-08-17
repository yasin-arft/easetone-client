import { useForm } from "react-hook-form"
import { FaFilter } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useContext } from "react";
import { ProductOptionsContext } from "@/contexts/ProductOptionsContext";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"


const Filter = () => {
  const {setCurrentPage, setSearchedProducts, setBrand, setCategory, setMinPrice, setMaxPrice } = useContext(ProductOptionsContext);

  const form = useForm({
    defaultValues: {
      brand: "",
      category: "",
      minPrice: "",
      maxPrice: ""
    },
  });

  // filter form on submit handler
  const onSubmit = (values) => {
    setCurrentPage(0);
    setSearchedProducts('');
    setBrand(values.brand.trim());
    setCategory(values.category.trim());
    setMinPrice(values.minPrice.trim());
    setMaxPrice(values.maxPrice.trim());
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm">
          <FaFilter />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter products</DrawerTitle>
        </DrawerHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md mx-auto p-3">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Brand" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Min price" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Max price" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DrawerClose asChild className="md:col-span-2">
              <Button type="submit">
                Done
              </Button>
            </DrawerClose>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};

export default Filter;