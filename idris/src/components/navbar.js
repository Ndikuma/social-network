// src/components/navbar.js
import React from "react";

export function Navbar({ children }) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {children}
      </div>
    </nav>
  );
}

export function NavbarItem({ href, children, current }) {
  return (
    <a
      href={href}
      className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
        current ? "bg-gray-900" : "hover:bg-gray-700"
      }`}
    >
      {children}
    </a>
  );
}

export function NavbarLabel({ children }) {
  return <span className="ml-2 text-white">{children}</span>;
}

export function NavbarDivider({ className }) {
  return <div className={`h-6 w-px bg-gray-600 mx-4 ${className || ""}`} />;
}

export function NavbarSection({ children, className }) {
  return (
    <div className={`flex items-center space-x-4 ${className || ""}`}>
      {children}
    </div>
  );
}

export function NavbarSpacer() {
  return <div className="flex-grow" />;
}
