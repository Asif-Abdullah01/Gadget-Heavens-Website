import error from '../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='py-12'>
            <h2 className="text-5xl text-center">404 NOT FOUND!</h2>
            <p className="text-2xl text-center">Please provide a valid link</p>

            <div className='flex justify-center'>
            <img src={error} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;