import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { ToastContainer, toast } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
        </div>
    );
};

export default Root;