import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const Profile = () => {
  const {user} = useContext(AuthContext);

  return (
    <section>
      <h2 className="text-3xl text-center font-bold my-5">Hi,{user?.displayName}</h2>
    </section>
  );
};

export default Profile;