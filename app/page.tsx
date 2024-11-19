import Introduction from "@/app/ui/introduction/introduction";
import Footer from "@/app/ui/footer/footer";
import Card from "@/app/ui/counter/card";

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col p-4 gap-4 bg-gray-600'>
      <div className='flex flex-col border border-slate-400 p-6 rounded-lg shadow-md bg-gray-100 gap-4'>
        <div className='flex grow flex-col gap-4'>
          <Introduction />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
