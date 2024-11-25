import { FaShippingFast } from 'react-icons/fa';
import shopImg from '../assets/shop.jpg'
import { BiSupport } from 'react-icons/bi';
import { GiBoxUnpacking } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';
import alamin from '../assets/asif.jpg'
import masum from '../assets/tanvir.jpg'
import rizwan from '../assets/rizwan.jpg'
import shihab from '../assets/shihab.jpg'

const About = () => {
    return (
        <div>

            <div className="bg-[#9538E2] text-white text-center py-8 space-y-6">
                <h2 className="text-4xl">Smart Solutions for Everyone</h2>
                <p className="text-xl w-[60%] mx-auto">Your one-stop destination for the latest gadgets, providing innovative tech solutions that enhance your lifestyle and everyday convenience.</p>
            </div>

            <div className='w-10/12 mx-auto py-8'>

                <div className="flex gap-4">
                    <div>
                        <img className='rounded-xl h-[100%]' src={shopImg} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold'>About <span className='text-[#9538E2]'>GadgetHeavens</span></h2>
                        <p className='text-xl font-medium text-slate-600 italic'>Your Gadget is near to your hand, Just a click Away</p>
                        <p className='text-lg text-slate-600'>At GadgetHeavens, we bring you the best in cutting-edge technology with a wide range of top-quality gadgets. Whether you’re looking for the latest smartphone, wearable tech, or home automation solutions, we have something to suit every need. Our mission is to provide innovation that simplifies and elevates your daily life.</p>
                        <p className='text-lg text-slate-600'>We are passionate about offering exceptional customer service and the most advanced products on the market. At GadgetHeavens, we carefully curate our collection, ensuring you have access to the latest trends and must-have devices. Explore our store today and discover how technology can transform your world.</p>

                        <div className='flex justify-between'>
                            <div className='bg-[#F8F8FB] px-16 py-6 rounded-2xl'>
                                <h2 className='text-3xl font-bold'>10</h2>
                                <p className='text-xl'>Outlets</p>
                            </div>
                            <div className='bg-[#F8F8FB] px-16 py-6 rounded-2xl'>
                                <h2 className='text-3xl font-bold'>100k +</h2>
                                <p className='text-xl'>Sales</p>
                            </div>
                            <div className='bg-[#F8F8FB] px-16 py-6 rounded-2xl'>
                                <h2 className='text-3xl font-bold'>200k +</h2>
                                <p className='text-xl'>Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-10/12 mx-auto'>
                <div className='text-center py-8 space-y-2'>
                <h2 className="text-3xl font-bold text-[#9538E2]">Our Services</h2>
                <p className='text-lg text-slate-500 font-medium w-[40%] mx-auto'>Customer service should not be a department. It should be the entire company.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col justify-center items-center border-2 rounded-xl py-5 space-y-2'>
                    <FaShippingFast className='text-yellow-500' size={48} />
                    <h2 className='font-bold text-xl'>Free Shipping</h2>
                    <p className='w-3/4 text-center text-slate-500'>Free shipping on all Us order or above $200</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 rounded-xl py-5 space-y-2'>
                    <BiSupport className='text-green-500' size={48} />
                    <h2 className='font-bold text-xl'>24x7 Support</h2>
                    <p className='w-3/4 text-center text-slate-500'>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 rounded-xl py-5 space-y-2'>
                    <GiBoxUnpacking className='text-yellow-500' size={40} />
                    <h2 className='font-bold text-xl'>30 Days Return</h2>
                    <p className='w-3/4 text-center text-slate-500'>Simply return it within 30 days for an exchange</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 rounded-xl py-5 space-y-2'>
                    <RiSecurePaymentFill className='text-green-500' size={40} />
                    <h2 className='font-bold text-xl'>Payment Secure</h2>
                    <p className='w-3/4 text-center text-slate-500'>We Will provide security 100% of your payment</p>
                    </div>
                </div>
            </div>

            <div className='w-10/12 mx-auto'>
            <div className='text-center py-8 space-y-2'>
                <h2 className="text-3xl font-bold text-[#9538E2]">Our Team</h2>
                <p className='text-lg text-slate-500 font-medium w-[40%] mx-auto'>Meet Our expert Team Members</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div>
                    <img className='rounded-2xl' src={masum} alt="" />
                    <div className='text-center'>
                    <h2>Masum Billah</h2>
                    <p>CEO</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-2xl' src={alamin} alt="" />
                    <div className='text-center'>
                    <h2>Alamin Islam</h2>
                    <p>Manager</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-2xl' src={rizwan} alt="" />
                    <div className='text-center'>
                    <h2>Mirza Rizwan</h2>
                    <p>Co-founder</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-2xl' src={shihab} alt="" />
                    <div className='text-center'>
                    <h2>Maruful Islam Shihab</h2>
                    <p>Team Leader</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default About;