import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function onOpen() {
    setIsOpen((open) => !open);
  }
  function onClose() {
    if (isOpen) {
      setIsOpen(false);
    }
  }
  return (
    <header className="header">
      <div className="logo">
        Logo
        <img src='/vite.svg' alt="Logo" />
      </div>
      <nav
        className={`nav-links ${isOpen ? "nav-open" : "nav-close"}`}
        onClick={onClose}
      >
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
      <div className="menu-button" onClick={onOpen}>
        <div className={`menu-icon ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
