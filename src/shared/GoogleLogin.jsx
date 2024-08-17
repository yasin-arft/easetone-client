import { Button } from "@/components/ui/button";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // google login handler
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success('Successfully Logged in');
        navigate('/profile');
        setLoading(false);
      })
      .catch(() => {
        toast.error('Unexpected error happened');
        setLoading(false);
      })
  }

  return (
    <div className="text-center">
      <Button onClick={handleGoogleLogin}>
        Login with google
      </Button>
    </div>
  );
};

export default GoogleLogin;