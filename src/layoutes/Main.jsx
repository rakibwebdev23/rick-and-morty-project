import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/shared/Header/Header';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isViewAll = location.pathname === '/viewAllCharacter';

    const handleNext = () => {
        if (!isViewAll) {
            navigate('/viewAllCharacter');
        }
    };

    const handlePrevious = () => {
        if (!isHome) {
            navigate(-1);
        }
    };

    const [showButtons, setShowButtons] = useState(true);

    useEffect(() => {
        let timeoutId;

        const handleMouseMove = () => {
            setShowButtons(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowButtons(false);
            }, 3000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div>
            <Header />
            <Outlet />
            <div className="lg:pt-8 pt-4 fixed-button-wrapper">
                {showButtons && (
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 rounded-full px-6 py-2 flex items-center gap-4 shadow-lg transition-opacity duration-500">
                        <button
                            onClick={handlePrevious}
                            disabled={isHome}
                            className={`${isHome ? 'text-gray-500 cursor-not-allowed' : 'text-white'}`}
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={isViewAll}
                            className={`${isViewAll ? 'text-gray-500 cursor-not-allowed' : 'text-white'}`}
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;