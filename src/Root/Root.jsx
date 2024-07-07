
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Root = () => {
    return (
        <div className='bg-[#121314] '>
            <div className=''>
                <div className='lg:max-w-full'>
                    <Header></Header>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;