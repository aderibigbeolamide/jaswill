import { useState, useEffect } from 'react';
import one from '../../../public/one.webp'
import two from '../../../public/two.webp'
import three from '../../../public/three.webp'
import officeone from '../../../public/officeone.webp'
import officetwo from '../../../public/officetwo.webp'
import officethree from '../../../public/officethree.webp'
import four from '../../../public/four.webp'
import { AiOutlineDoubleRight, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import axios from 'axios';
import { getRequest } from '@/library/request'



const General = ({apartment,index}) => {
  const [property, setProperty] = useState([]);
  
  const details = [
    {
      id: 1,
      picture: one,
    //   categories: "Mini Work Space",
      label: 'Apartment',
      description: "See city spectacles on a memorable helicopter ride",
      // review: <Review />
    },
    {
      id: 2,
      picture: three,
    //   categories: "Small Office",
      label: 'Vila',
      description: "Visit the spot for mountain scenery and kayaking",
      // review: <Review />
    },
    {
      id: 3,
      picture: four,
    //   categories: "Big Workspace",
      label: 'Studio',
      description: "See city spectacles on a memorable helicopter ride",
      // review: <Review />
    },
    {
        id: 4,
        picture: officetwo,
      //   categories: 'Conference Room',
        label: 'Office',
        description: "A range of ready-to-use, fully-equipped offices with everything you need to get started.",
        // review: <Review />
      },
     
  ];
  

//   }
  return (
    <section className='pb-10 pt-5 md:pt-10 '>
      <div className='w-full shadow-2xl'>
      
          <div key={index} className='p-5'>
            <div className=''>
              <div className='h-[30vh]'>
                <Image src={apartment.imageUrl} width={100} height={100} alt='pic' style={{ width: '50rem',height: '30vh', objectFit: 'fit' }} className='' />
              </div>
              
            </div>
            <div className=' py-1 px-2 flex flex-col justify-between items-start'>
             
              <div className='h-18 text-xl mt-2 cursor-pointer font-bold md:text-xl'>
                <p>{apartment.title}</p>
              </div>
              <div className=' w-full h-16 md:h-20 lg:h-24 xl:h-20 text-gray-700 cursor-pointer'>
                <p className='text-xs md:text-base lg:text-sm mt-3'>{apartment.content}</p>
              </div>
              <div className=' mt-1 h-8 md:h-10 lg:h-12 xl:h-14  w-full'>
                <p className='text-maroon text-xs md:text-base lg:text-xs xl:text-sm font-bold '>{apartment.price} per month</p>
              </div>
             <Link href={'/Property/property'}>
              <div className=' text-red-700 cursor-pointer flex justify-between items-center gap-2'>
                <p className='text-xs md:text-base lg:text-xs xl:text-sm  '>See More Details</p>
                <AiOutlineDoubleRight className='w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3' />
              </div>
              </Link>
            </div>
          </div>
      
      </div>
      
    </section>
  );
}

export default General;
