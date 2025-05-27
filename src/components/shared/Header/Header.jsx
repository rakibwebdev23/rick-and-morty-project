import Container from '../Cotainer/Container';
import logo from "../../../assets/logo/Logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="absolute top-0 left-0 w-full z-50">
            <Container>
                <div className="flex justify-center items-center py-3 mt-8">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Header;