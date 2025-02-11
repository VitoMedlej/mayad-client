import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'vfx works: Elevating Interior Design in Lebanon',
    description: `Discover the artistry and innovation of vfx works, your premier interior design firm in Lebanon. We transform spaces into masterpieces`,
    icons: {
        icon: `https://wavescode8cdn.sirv.com/vfxlogo.jpg`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative bg2'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    {/* <ScrollToTop/> */}
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
