export default function CounterDisplay({ count, flash }) {
  return (
    <div
      className={`text-4xl transition-opacity duration-300 ease-in-out ${
        flash ? "opacity-50 text-green-400" : "opacity-100"
      }`}
    >
      {count}
    </div>
  );
}
