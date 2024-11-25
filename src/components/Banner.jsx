import bannerImage from '../assets/banner.jpg'

const Banner = () => {
    return (

            <div className='w-9/12 mx-auto absolute top-80 left-20 right-20 z-20'>
                <div className='border-2 p-4 rounded-2xl backdrop-blur-sm'>
                <img className='w-[1110px] h-[520px] rounded-2xl' src={bannerImage} alt="" />
                </div>
            </div>

    );
};

export default Banner;