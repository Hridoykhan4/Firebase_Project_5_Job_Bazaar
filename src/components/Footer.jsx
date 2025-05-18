import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Job_Bazaar</h2>
          <p className="text-sm text-gray-400 mb-4">
            There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
          </p>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Branding</li>
            <li className="hover:text-white cursor-pointer">Design</li>
            <li className="hover:text-white cursor-pointer">Marketing</li>
            <li className="hover:text-white cursor-pointer">Advertisement</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Press kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Terms of use</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Cookie policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>@2024 Job_Bazaar. All Rights Reserved</p>
        <div className="text-right mt-4 md:mt-0">
          <p>Activate Windows</p>
          <p>Go to Settings to activate Windows.</p>
          <p className="text-blue-400 cursor-pointer hover:underline">Powered by Job_Bazaar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
