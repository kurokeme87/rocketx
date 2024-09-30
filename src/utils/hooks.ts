import { useState } from 'react';

export default function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  const open = () => {
    setIsOpen(true); // Set the state to true (open)
  };

  const close = () => {
    setIsOpen(false); // Set the state to false (closed)
  };

  return { isOpen, toggle, open, close };
}
