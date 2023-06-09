import {
  FaGift,
  FaMoneyBill,
  FaSuperpowers,
  FaTimesCircle,
  FaTruck,
} from "react-icons/fa";
const Fade = require("react-reveal/Fade");

const deliveryOptions = [
  {
    name: "Express Delivery",
    description: "Start from $10",
    icon: FaTruck,
    color: "bg-blue-500",
  },
  {
    name: "Cash on Delivery",
    description: "For free return",
    icon: FaMoneyBill,
    color: "bg-purple-500",
  },
  {
    name: "365 Days",
    description: "For free return",
    icon: FaTimesCircle,
    color: "bg-red-500",
  },
  {
    name: "payment",
    description: "Secure system",
    icon: FaGift,
    color: "bg-red-500",
  },
  {
    name: "Online Support",
    description: "24/7 daily",
    icon: FaSuperpowers,
    color: "bg-green-500",
  },
];

export default function ServiceBanner() {
  return (
    <div className="flex justify-center items-center my-10 p-10">
      {deliveryOptions.map((option) => (
        <Fade key={option.name} bottom cascade>
          <div
            className={`w-64 border rounded-lg p-4 mr-6 ${option.color} text-white flex items-center`}
          >
            <option.icon className="text-4xl mr-4" />
            <div>
              <div className="text-xl font-medium">{option.name}</div>
              <div className="text-sm">{option.description}</div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}
