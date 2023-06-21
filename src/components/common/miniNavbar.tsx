"use client";
import { BsCurrencyExchange } from "react-icons/bs";
import { FiHelpCircle, FiMail, FiPhone } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import Select from "react-select";

import { CSSProperties } from "react";

interface Option {
  value: string;
  label: string;
  icon: JSX.Element;
}

const languageOptions: Option[] = [
  { value: "en", label: "English", icon: <IoLanguage /> },
  { value: "bn", label: "Bangla", icon: <IoLanguage /> },
];

const currencyOptions: Option[] = [
  { value: "usd", label: "USD", icon: <BsCurrencyExchange /> },
  { value: "taka", label: "Taka", icon: <BsCurrencyExchange /> },
];

const customSelectStyles = {
  control: (provided: CSSProperties) => ({
    ...provided,
    background: "linear-gradient(to right, #4F6EF7, #4A8CF7)",
    border: "none",
    boxShadow: "none",
    padding: "0 10px",
    borderRadius: "4px",
    cursor: "pointer",
    height: "32px",
  }),
  option: (provided: CSSProperties, state: { isSelected: boolean }) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "4px 10px",
    cursor: "pointer",
    background: state.isSelected ? "#4F6EF7" : "transparent",
    color: state.isSelected ? "white" : "inherit",
  }),
  singleValue: (provided: CSSProperties) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    color: "white",
  }),
};

const MiniNavbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="tel:123456789" className="flex items-center text-gray-100">
          <FiPhone className="mr-1" />
          <span>123456789</span>
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center text-gray-100"
        >
          <FiMail className="mr-1" />
          <span>info@example.com</span>
        </a>
        <a href="/help" className="flex items-center text-gray-100">
          <FiHelpCircle className="mr-1" />
          <span>Need Help</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-100">
          <IoLanguage className="mr-1" />
          <Select
            options={languageOptions}
            defaultValue={languageOptions[0]}
            styles={customSelectStyles}
            components={{ IndicatorSeparator: null }}
          />
        </div>
        <div className="flex items-center text-gray-100">
          <BsCurrencyExchange className="mr-1" />
          <Select
            options={currencyOptions}
            defaultValue={currencyOptions[0]}
            styles={customSelectStyles}
            components={{ IndicatorSeparator: null }}
          />
        </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
