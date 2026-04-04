const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative mx-4 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        {children}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          aria-label="Close modal"
        >
          <span className="text-2xl font-light leading-none">×</span>
        </button>
      </div>
    </div>
  );
};
export default Modal;
