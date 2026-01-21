import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import SaleBlock from '../components/sale-block/SaleBlock'
import SnackbarMessage from '../components/snackbar/SnackbarMessage'

const Layout = () => {
    return (
        <div className='w-full'>
            <SaleBlock />
            <Header />

            <main>
                <Outlet />
            </main>

            {/* <footer>
                <p>© 2023 My App</p>
            </footer> */}

            <SnackbarMessage />
        </div>
    )
}

export default Layout