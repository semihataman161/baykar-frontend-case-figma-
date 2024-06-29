import Sneakers2 from '@/assets/images/sneakers2.svg';
import Sneakers3 from '@/assets/images/sneakers3.svg';
import Sneakers4 from '@/assets/images/sneakers4.svg';
import ShoppingCart from '@/assets/images/shoppingCart.svg';

const ThirdSection = () => {
    return (
        <div className="bg-[#0F172A] text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-[56px] leading-[61.6px] font-[800]">The best of the best</h1>
                    <button className="border-[2px] border-solid border-white rounded-[8px] px-[30px] py-[20px] text-[24px] leading-[24px] tracking-[.5px] font-bold">
                        Sign up now
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 rounded-lg shadow-lg border-[1px] border-solid border-[#0F172A] shadow-light-xxl-1 shadow-light-xxl-2">
                        <img src={Sneakers2} alt="Sneakers3" className="w-full h-auto rounded-lg mb-4" />
                        <div className='p-6'>
                            <h2 className="text-[24px] leading-[26.4px] font-bold mb-2">Title</h2>
                            <p className="text-[18px] leading-[28.8px] mb-4">
                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                            </p>
                            <button className="flex items-center justify-center gap-5 w-full border-[2px] border-solid border-white rounded-[8px] p-[16px] text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                <img
                                    src={ShoppingCart}
                                    alt="ShoppingCart"
                                />
                                Buy now
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg shadow-lg border-[1px] border-solid border-[#0F172A] shadow-light-xxl-1 shadow-light-xxl-2">
                        <img src={Sneakers3} alt="Sneakers3" className="w-full h-auto rounded-lg mb-4" />
                        <div className='p-6'>
                            <h2 className="text-[24px] leading-[26.4px] font-bold mb-2">Title</h2>
                            <p className="text-[18px] leading-[28.8px] mb-4">
                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                            </p>
                            <button className="flex items-center justify-center gap-5 w-full border-[2px] border-solid border-white rounded-[8px] p-[16px] text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                <img
                                    src={ShoppingCart}
                                    alt="ShoppingCart"
                                />
                                Buy now
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg shadow-lg border-[1px] border-solid border-[#0F172A] shadow-light-xxl-1 shadow-light-xxl-2">
                        <img src={Sneakers4} alt="Sneakers4" className="w-full h-auto rounded-lg mb-4" />
                        <div className='p-6'>
                            <h2 className="text-[24px] leading-[26.4px] font-bold mb-2">Title</h2>
                            <p className="text-[18px] leading-[28.8px] mb-4">
                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                            </p>
                            <button className="flex items-center justify-center gap-5 w-full border-[2px] border-solid border-white rounded-[8px] p-[16px] text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                <img
                                    src={ShoppingCart}
                                    alt="ShoppingCart"
                                />
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
