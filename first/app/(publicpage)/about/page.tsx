'use client'
 
import { useOptimistic } from 'react'
import { Metadata } from "next";


export const meta: Metadata = {
  title: "About Page",
  description: "About Page",
};




 
type Message = {
  message: string
}
 

export default function About() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'Enter' || e.key === 'NumpadEnter')
    ) {
      e.preventDefault()
      e.currentTarget.form?.requestSubmit()
    }
  }
 
  return (
    <div>
      <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} />
    </div>
  )
}