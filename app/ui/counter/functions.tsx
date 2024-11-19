import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/app/ui/buttons/button";
import { arithmetic_functions } from "@/app/ui/counter/dict";

export default function Functions({ setCount }) {
  return (
    <div className='grid grid-cols-4 gap-3'>
      {arithmetic_functions.map((func, index) => (
        <div key={index}>
          <Button
            onClick={() =>
              setCount((prevCount: number) => prevCount + func.value)
            }
          >
            <func.icon className='mr-2 h-6 w-6' />
            {func.text}
          </Button>
        </div>
      ))}
    </div>
  );
}
