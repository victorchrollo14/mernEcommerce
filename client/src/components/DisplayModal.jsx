import React, { useEffect, useState } from "react";

const DisplayModal = ({ children, showModal, setShowModal }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    const interval = setInterval(() => {
      setWidth((prev) => prev + 1);
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-darkBlue opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-lightestBlue rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-lightestBlue px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
          <div className="bg-blueSlate px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red text-base font-medium text-white hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red sm:mt-0 sm:w-auto sm:text-sm"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
          <div className="h-1 bg-lightBlue" style={{ width: `${width}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export { DisplayModal };
