import NibhViverra from '@/assets/images/nibhViverra.svg';
import NibhViverraBackground from '@/assets/images/nibhViverraBackground.svg';
import CursusAmet from '@/assets/images/cursusAmet.svg';
import CursusAmetBackground from '@/assets/images/cursusAmetBackground.svg';
import IpsumFermentum from '@/assets/images/ipsumFermentum.svg';
import IpsumFermentumBackground from '@/assets/images/ipsumFermentumBackground.svg';

const SecondSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <img
                            src={NibhViverra}
                            alt="nibhViverra"
                        />
                        <img
                            src={NibhViverraBackground}
                            alt="nibhViverraBackground"
                        />
                        <h3 className="text-[16px] leading-[17.6px] font-medium mb-2">Nibh viverra</h3>
                        <p className="text-[18px] leading-[28.8px]">
                            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                            Consequat turpis natoque leo, massa.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <img
                            src={CursusAmet}
                            alt="cursusAmet"
                        />
                        <img
                            src={CursusAmetBackground}
                            alt="cursusAmetBackground"
                        />
                        <h3 className="text-[16px] leading-[17.6px] font-medium mb-2">Cursus amet</h3>
                        <p className="text-[18px] leading-[28.8px]">
                            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                            Consequat turpis natoque leo, massa.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <img
                            src={IpsumFermentum}
                            alt="ipsumFermentum"
                        />
                        <img
                            src={IpsumFermentumBackground}
                            alt="ipsumFermentumBackground"
                        />
                        <h3 className="text-[16px] leading-[17.6px] font-medium mb-2">Ipsum fermentum</h3>
                        <p className="text-[18px] leading-[28.8px]">
                            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                            Consequat turpis natoque leo, massa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;