import React from "react";

import img1 from "../Assets/cryptix.png";
import img2 from "../Assets/zyteon.png";
import img3 from "../Assets/ink.png";
import img4 from "../Assets/elise.png";
import img5 from "../Assets/cryptixmarket.png";
import img7 from "../Assets/letusrecon.png";

import img9 from '../Assets/magnolia.png'
import img10 from '../Assets/annex.png'
import img11 from '../Assets/nurse.png'
import img12 from "../Assets/amzon.png";
import img13 from "../Assets/ngo.png";






import {BsBoxArrowUpRight} from 'react-icons/bs'


const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "CrypTix NFT Tickets dapp ",
    link: "https://www.cryptixnft.io/",
    img: img1,
  },
  {
    id: 2,
    title: "CrypTix NFT Marketplace",
    link: "https://marketplace.cryptix.app/",
    img: img5,
  },
  {
    id: 3,
    title: "LetUsRecon",
    link: "https://www.letusrecon.com/",
    img: img7,
  },
  {
    id: 10,
    title: "Mutivendor store",
    link: "https://frontend-nextjs-14jz.vercel.app/",
    img: img12,
  },
  {
    id: 11,
    title: "NGO",
    link: "https://hopeorukotanfoundation.org/",
    img: img13,
  },
  { id: 4, title: "Annex vape store", link: "https://annexvape.com", img: img10 },
  {
    id: 5,
    title: "Nursingwithlight",
    link: "https://nursingwithlight.com/",
    img: img11,
  },
  {
    id: 6,
    title: "Mognolia Party",
    link: "https://magnoliaparty.com/",
    img: img9,
  },

  { id: 7, title: "Zyteon", link: "https://zyteon.com", img: img2 },
  { id: 8, title: "Inksea", link: "https://inksea.io", img: img3 },
  { id: 9, title: "Ellise", link: "https://elise.netlify.app", img: img4 },
];




const Portfolio = () => {
  return (
    <div className=" py-6 md:py-14 container font-main">
      <div className="mb-10">
        <h2 className="text-slate-50 text-xl md:text-3xl ">PORTFOLIO</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_DATA.map((item) => (
          <div key={item.id} className="mb-14">
            <div className="">
              <img
                className=" w-full sm:w-full md:w-[300px] lg:w-[300px] bg-[#cccccc09] border p-4 bg-transparent border-[#cccccc20]  rounded-sm shadow-lg mb-4"
                src={item.img}
                alt=""
              />
            </div>
            <h4 className="text-slate-100 text-sm mb-5">{item.title}</h4>
            <a target="_blank" rel="noreferrer" href={item.link}>
              <button className="border-0 flex items-center  rounded-md text-sm  text-[#64ffda]  ">
                View project
                <BsBoxArrowUpRight className=" ml-2" />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
