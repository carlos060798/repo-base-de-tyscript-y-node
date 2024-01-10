import { redirect } from "next/navigation" // para redirigir a otra pagina
export default function HomePage() {

   redirect("/dashboard/main") // redirige a la pagina counter
   
  
}
