import Link from "next/link";

export default function ButtonLink(props) {
  return (
    <Link
      key={props.link}
      href={props.link}
      className='flex items-center justify-between bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
    >
      {props.children}
    </Link>
  );
}
