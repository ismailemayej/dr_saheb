"use client";

import Link from "next/link";
import React from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: string;
}

const Modal: React.FC<ServiceModalProps> = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-lg shadow-lg p-6 relative">
        <h2 className="text-xl font-semibold mb-4"> Appointment Details </h2>
        <hr />
        <p className="text-gray-700 dark:text-gray-300 mb-6 bangla">
          {details}
        </p>
        <div className="flex gap-4">
          <Link
            href="/book-Appointment"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
              />
            </svg>
            Book Appointment
          </Link>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
