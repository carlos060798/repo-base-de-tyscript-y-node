
import { Metadata } from "next"

export const meta :Metadata = {

    title: "Contact Page",
    description: "Contact Page",
    

} 
 
export  default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1 className="text-4xl font-bold text-center">Contact</h1>
    </main>
  )
}