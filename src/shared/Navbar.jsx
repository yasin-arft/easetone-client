import { Button } from "@/components/ui/button";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // logout handler 
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success('Logged out successfully.');
      })
      .catch(() => {
        toast.error('Unexpected error happened!');
      })
  }

  return (
    <nav className="p-3 flex justify-between items-center bg-primary">
      <button onClick={() => navigate('/')} className="text-2xl lg:text-3xl text-primary-foreground font-bold">EaseTone</button>
      <div className="flex gap-4 text-primary">
        {
          loading ? <span>Loading...</span> :
            user ? <Button onClick={handleLogout} variant="secondary">Logout</Button> :
              <>
                <Button onClick={() => navigate('/register')} variant="secondary">Register</Button>
                <Button onClick={() => navigate('/login')} variant="secondary">Login</Button>
              </>
        }
      </div>
    </nav>
  );
};

export default Navbar;