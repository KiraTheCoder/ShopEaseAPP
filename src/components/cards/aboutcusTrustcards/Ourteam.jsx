import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import rohit from "@/assets/images/footerImages/rohit1.jpg";

import manshi from "@/assets/images/footerImages/manshi.jpg"
import khushi from "@/assets/images/footerImages/kk.jpg";
import kiran from "@/assets/images/footerImages/kiran.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const teamMembers = [
    { name: "PAWAN SIR", role: "Founder & Chairman", imgSrc: "https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTqcCKmb6S-VpW31BrzcwYZEtJMMXFPcgN2TzJvAuAvVC7MdRwylAwRUMoWuZqqjYMle-WXx~o9dTmQnNEf3YWf0FZSO3nMR9dXT4brAc3WaCD1A7s7bqPTC7QyEd3Iy1k2AojmeqvFapXIxmIzTgUOLUhWBky7tEfk~1XL8BRbHgJE3spxxBp6Cd~X2pIRa1sx0xNXXBFKxLGnMJ4oA8ZhhXe7UmMEwoazMbhM0idFPt~uOlJ6D5PJh0ogdWxXzSGL1ssEUcwfOMg3Amufmmuv-CWmpIiEnfcdFGhbNhqw9dFFLEDQroT80m41yeB3Tes7-IRRn~1bDSSfpraCKog__" },
    { name: "KIRAN BOHRA", role: "Managing Director ", imgSrc: `${kiran}` },
    { name: "KHUSHI TAMOR", role: "Product Designer", imgSrc: `${khushi}`},
    { name: "ROHIT KUMAR", role: "Product Designer", imgSrc: `${rohit}` },
    { name: "MANSHI", role: "Product Ideas", imgSrc: `${manshi}`},
];

const TeamCard = ({ name, role, imgSrc, icon }) => {
    return (
        <div className="flex justify-center items-center pt-6 pb-8 " >

            <div className="w-[16.2rem] h-88  shadow-md rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 group hover:bg-[#db4444] hover:shadow-lg flex flex-col items-center text-center group">
                <div className="w-full h-[16rem] outline-none flex justify-center items-start rounded-t-lg overflow-hidden  ">
                    <img src={imgSrc} alt={name} className="w-[100%] h-auto bg-slate-100 object-cover" />
                </div>
                <div className="p-2">
                    <h5 className="text-lg font-semibold text-[#db4444] group-hover:text-white">{name}</h5>
                    <p className=" text-sm text-gray-500 group-hover:text-[#54E346]">{role}</p>
                </div>
                <div className='w-[50%] h-12 flex justify-around items-center '>
                    <div><FaInstagram className='text-[1.2rem] text-[#db4444] group-hover:text-white' /></div>
                    <div><FaTwitter className='text-[1.2rem] text-[#db4444] group-hover:text-white' /></div>
                    <div><FaLinkedinIn className='text-[1.2rem] text-[#db4444] group-hover:text-white' /></div>
                    <div><FaWhatsapp className='text-[1.2rem] text-[#db4444] group-hover:text-white' /></div>
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
        <div className="w-[90vw]  sm:w-[90vw] md:w-[82vw] m-auto gap-6 h-auto  my-8">
            {/* <div className="w-[90vw] sm:w-[90vw] md:w-[80vw] m-auto gap-6 h-auto flex flex-wrap justify-around items-center my-8"> */}
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
