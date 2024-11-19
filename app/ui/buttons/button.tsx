export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex w-full items-center justify-center bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded-lg shadow'
    >
      {children}
    </button>
  );
}
