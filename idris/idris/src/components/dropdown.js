// src/components/dropdown.js
import React, { useState } from "react";

export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, (child) => {
        if (child.type === DropdownButton) {
          return React.cloneElement(child, { onClick: toggleDropdown });
        }
        if (child.type === DropdownMenu) {
          return React.cloneElement(child, { isOpen });
        }
        return child;
      })}
    </div>
  );
}

export function DropdownButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center space-x-2">
      {children}
    </button>
  );
}

export function DropdownMenu({ children, isOpen, className, anchor }) {
  return (
    isOpen && (
      <div
        className={`absolute ${anchor} mt-2 w-56 bg-white rounded-md shadow-lg ${
          className || ""
        }`}
      >
        <div className="py-1">{children}</div>
      </div>
    )
  );
}

export function DropdownItem({ href, children }) {
  return (
    <a href={href} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
      {children}
    </a>
  );
}

export function DropdownDivider() {
  return <hr className="border-t border-gray-200" />;
}

export function DropdownLabel({ children }) {
  return <span className="ml-2">{children}</span>;
}
