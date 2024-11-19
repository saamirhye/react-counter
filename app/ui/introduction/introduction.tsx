export default function Introduction() {
  return (
    <div className='text-sm'>
      <p className='w-full'>
        Welcome to{" "}
        <span className='animate-pulse duration-300 ease-in-out font-semibold text-green-900 hover:text-green-500 cursor-default'>
          React Counter
        </span>
      </p>
      <br />
      <p>A simple web app that allows incrementing and decrementing.</p>
      <br />
      <p className='italic'>
        Note: at the moment there is no validation to ensure the value doesn't
        exceed certain limits such as{" "}
        <span className='bg-gray-300 rounded-md text-gray-800'>
          x &lt; 0 || x &gt; 1000
        </span>
      </p>
    </div>
  );
}
