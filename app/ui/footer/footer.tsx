import { BeakerIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <p className='text-xs flex w-full justify-center'>
      <span className='italic text-white flex'>
        Created using React and Tailwind{" "}
        <BeakerIcon className='ml-2 w-4 h-4 rotate-[15deg]' />
      </span>
    </p>
  );
}
