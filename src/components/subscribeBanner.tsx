import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function SubscribeBanner() {
  return (
    <div className=" text-black p-4 my-10 md:p-8 flex flex-col items-center justify-center">
      <div className="mb-4 md:mb-0 md:mr-4 flex items-center">
        <FaEnvelope className="mr-2 text-xl" />
        <span className="text-lg">Subscribe to our newsletter</span>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          placeholder="Your email"
          className="bg-white text-gray-900 rounded-l px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        />
        <button className="bg-gray-900 text-white rounded-r px-6 py-2 flex items-center">
          <span className="mr-2">Subscribe</span>
          <FaPaperPlane className="text-lg" />
        </button>
      </div>
    </div>
  );
}
