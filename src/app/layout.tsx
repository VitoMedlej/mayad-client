import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import Footer from '@/Components/Footer/Footer'
import Contexts from '@/context/Contexts'
import Sidebar from '@/Components/Sidebar/Sidebar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>

      <body>
        <Navbar/>
        <Sidebar cates={undefined}/>
        <Contexts>
          {children}
        </Contexts>
        {/* {children} */}
        <Footer/>
        </body>
    </html>
  )
}
