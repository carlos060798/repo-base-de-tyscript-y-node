export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
   
        <body>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            
            <h3 className="text-center bg-gray-600  ">soy about laayut</h3>
            {children}
          </main>
        </body>
         
          
       
      </html>
    )
  }