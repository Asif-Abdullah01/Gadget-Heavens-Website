
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';


const MainLayout = () => {
   
    const { pathname } = useLocation();
    const [title, setTitle] = useState('');
  
    useEffect(() => {
      const titleTemp = pathname.split('/');
      const pageTitle = titleTemp[1] || ''; 
      setTitle(pageTitle);
    }, [pathname]); 

    return (
        <div>
            <Helmet>
                <title>Gadget heavens | {title}</title>
            </Helmet>

            <Toaster>
                {(t) => (
                    <ToastBar toast={t}>
                        {({ icon, message }) => (
                            <>
                                {icon}
                                {message}
                                {t.type !== 'loading' && (
                                    <button onClick={() => toast.dismiss(t.id)}>x</button>
                                )}
                            </>
                        )}
                    </ToastBar>
                )}
            </Toaster>

            <NavBar></NavBar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;