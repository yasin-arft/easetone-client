import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto bg-primary p-5 md:p-10">
      <div className='md:flex p-3 gap-2 justify-between text-white'>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Ease tone</h2>
        </div>
        <div className='flex-1'>
          <h2 className='my-2 font-medium'>Important Links </h2>
          <ul className='space-y-2'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='flex-1'>
          <h2 className='my-2 font-medium'>Social Links </h2>
          <ul className='space-y-2 text-2xl'>
            <li><a><FaFacebookSquare /></a></li>
            <li><a><FaTwitterSquare /></a></li>
            <li><a><FaInstagramSquare /></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t relative my-3">
      </div>
      <div className="text-white text-center py-3">
        <p>Copyright &copy; 2024 - All right reserved by Ease Tone.</p>
      </div>
    </footer>
  );
};

export default Footer;