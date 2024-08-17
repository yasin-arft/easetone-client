import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Link } from "react-router-dom"
import GoogleLogin from "@/shared/GoogleLogin"
import { Button } from "@/components/ui/button"

const signUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: "This field has to be filled." }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters.", }),
})

const Register = () => {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: ''
    }
  })

  const handleRegister = async (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);
    
  }

  return (
    <section className="my-7">
      <div className="md:w-1/2 mx-auto">
        <div>
          <div className="max-w-full mx-auto border p-4 rounded-xl">
            <h2 className="text-3xl text-center font-semibold mb-6">Register!</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Type name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Type email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Type password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="disabled:bg-gray-500 w-full col-span-2"
                >
                  Register
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div>
          <div className="border relative my-5">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-semibold text-lg">Or</span>
          </div>
          <GoogleLogin />
          <p className="text-center mt-5">Already have an account? <Link to={'/login'} className="underline text-red-light">Login</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Register;