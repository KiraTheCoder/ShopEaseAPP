import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import rohit from "@/assets/images/footerImages/rrrrrrr.jpg";
import manshi from "@/assets/images/footerImages/manshi.jpg"
import khushi from "@/assets/images/footerImages/kk.jpg";
import kiran from "@/assets/images/footerImages/kiran.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[50%] border border-gray-600 p-4 rounded-lg right-[-2rem] transform translate-x-[50%] translate-y-[-50%] z-20 cursor-pointer group hover:bg-[#db4444] transition-colors duration-300"
            onClick={onClick}
        >
            <FaArrowRight className="text-xl text-[#db4444] group-hover:text-white " />
        </div>
    );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[50%] border border-gray-600 p-4 rounded-lg left-[-2rem] transform translate-x-[-50%] translate-y-[-50%] z-20 cursor-pointer group hover:bg-[#db4444] transition-colors duration-300"
            onClick={onClick}
        >
            <FaArrowLeft className="text-xl text-[#db4444] group-hover:text-white" />
        </div>
    );
};
const teamMembers = [
    { name: "KHUSHI TAMOR", role: "Product Designer", imgSrc: `${khushi}` },
    { name: "ROHIT KUMAR", role: "Product Designer", imgSrc: `${rohit}` },
    { name: "PAWAN SIR", role: "Founder & Chairman", imgSrc: "https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTqcCKmb6S-VpW31BrzcwYZEtJMMXFPcgN2TzJvAuAvVC7MdRwylAwRUMoWuZqqjYMle-WXx~o9dTmQnNEf3YWf0FZSO3nMR9dXT4brAc3WaCD1A7s7bqPTC7QyEd3Iy1k2AojmeqvFapXIxmIzTgUOLUhWBky7tEfk~1XL8BRbHgJE3spxxBp6Cd~X2pIRa1sx0xNXXBFKxLGnMJ4oA8ZhhXe7UmMEwoazMbhM0idFPt~uOlJ6D5PJh0ogdWxXzSGL1ssEUcwfOMg3Amufmmuv-CWmpIiEnfcdFGhbNhqw9dFFLEDQroT80m41yeB3Tes7-IRRn~1bDSSfpraCKog__" },
    { name: "MANSHI", role: "Product Ideas", imgSrc: `${manshi}` },
    { name: "KIRAN BOHRA", role: "Managing Director ", imgSrc: `${kiran}` },
];





const TeamCard = ({ name, role, imgSrc, icon }) => {
    return (
        <div className="flex justify-center items-center pt-6 pb-8 " >

            <div className="w-[16.2rem] h-88  rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fafafa] flex flex-col items-center text-center group  hover:shadow-custom outline-none hover:font-bold">
                <div className="w-full h-[16rem] outline-none flex justify-center items-start rounded-t-lg overflow-hidden  ">
                    <img src={imgSrc} alt={name} className="w-[100%] h-auto bg-slate-100 object-cover" />
                </div>
                <div className="p-2">
                    <h5 className="text-lg font-semibold text-[#db4444] group-hover:text-black">{name}</h5>
                    <p className=" text-sm text-gray-600 ">{role}</p>
                </div>
                <div className='w-[50%] h-12 flex justify-around items-center '>
                    <div><FaInstagram className='text-[1.2rem] text-[#db4444] group-hover:text-black' /></div>
                    <div><FaTwitter className='text-[1.2rem] text-[#db4444] group-hover:text-black' /></div>
                    <div><FaLinkedinIn className='text-[1.2rem] text-[#db4444] group-hover:text-black' /></div>
                    <div><FaWhatsapp className='text-[1.2rem] text-[#db4444] group-hover:text-black' /></div>
                </div>
            </div>
        </div>
    );
};

const TeamSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 5,
        centerMode: true,
        centerPadding: "0",
        nextArrow: <NextArrow />, // Use custom next arrow
        prevArrow: <PrevArrow />, // Use custom prev arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "0",
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "0",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                }
            }
        ]
    };
   
    return (
        <div className="w-[90vw]  sm:w-[90vw] md:w-[95vw]  xl:w-[82vw] m-auto gap-6 h-auto  my-8">
            <Slider {...settings} >
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        imgSrc={member.imgSrc}
                        icon={member.icon}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default TeamSection;
