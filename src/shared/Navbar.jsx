import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-3 flex justify-between items-center bg-primary">
      <button onClick={() => navigate('/')} className="text-2xl lg:text-3xl text-primary-foreground font-bold">EaseTone</button>
      <div className="flex gap-4 text-primary">
        <Button onClick={() => navigate('/register')} variant="secondary">Register</Button>
        <Button onClick={() => navigate('/login')} variant="secondary">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;