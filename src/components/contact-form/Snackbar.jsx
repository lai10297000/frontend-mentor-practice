import React from 'react';

const Snackbar = ({ title, description, show, close, duration = 3000 }) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => close(), duration);
      return () => clearTimeout(timer);
    }
  }, [show, close, duration]);

  return (
    <div
      className={`fixed top-2 m-4 rounded-lg bg-[--color-green-900] p-5 text-[--color-white] sm:m-0 transition-all ${show ? 'visible animate-fadein' : 'invisible'}`}
    >
      <div className="flex items-center gap-x-2">
        <img src="/frontend-mentor-practice/contact-form/icon-success-check.svg" alt="success-check" className="w-4" />
        <span>{title}</span>
      </div>
      <span className="mt-2 block text-sm opacity-70">{description}</span>
    </div>
  );
};

export default Snackbar;