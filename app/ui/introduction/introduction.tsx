export default function Introduction() {
  return (
    <div className='text-sm'>
      <p className='w-full'>
        Welcome to the{" "}
        <span className='font-semibold hover:text-green-500 cursor-default'>
          Counter App
        </span>
      </p>
      <br />
      <p>
        A simple web app that allows incrementing and decrementing of a numeric
        value starting from zero.
      </p>
      <br />
      <p className='italic'>
        Note: at the moment there is no validation to ensure the value doesn't
        exceed certain limits such as x &lt; 0 or x &gt; 1000
      </p>
    </div>
  );
}
