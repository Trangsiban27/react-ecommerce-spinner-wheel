import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import SaleBlock from '../components/sale-block/SaleBlock'

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
        </div>
    )
}

export default Layout