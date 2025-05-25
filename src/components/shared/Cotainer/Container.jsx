const Container = ({children}) => {
    return (
        <div className='w-full lg:max-w-[1470px] md:max-w-screen-xl mx-auto px-4 lg:px-6'>
            {children}
        </div>
    );
};

export default Container;