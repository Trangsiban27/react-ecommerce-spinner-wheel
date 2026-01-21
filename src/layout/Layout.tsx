import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import SaleBlock from '../components/sale-block/SaleBlock'
import SnackbarMessage from '../components/snackbar/SnackbarMessage'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div className='w-full'>
            <SaleBlock />
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

            <SnackbarMessage />
        </div>
    )
}

export default Layout