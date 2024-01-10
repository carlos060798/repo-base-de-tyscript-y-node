import CartCounter from "@/app/shopping card/counter/page";

export const metadata={
  title: "counter page",
  description: "un simplest counter page",
}



export  default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
        <CartCounter value={20} />
    </div>
  );
}