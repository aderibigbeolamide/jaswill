// import React, { Fragment, useState, useEffect } from 'react';

// import { AiOutlineSearch } from 'react-icons/ai'
// import { BiCart } from 'react-icons/bi'
// import { MdKeyboardArrowDown,MdLocationPin,MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight ,MdLooksOne} from 'react-icons/md'
// import {PiNumberOne,PiNumberTwo,PiNumberThree,PiNumberFour,PiDotsThreeBold} from 'react-icons/pi'
// import {BiSolidCloudUpload} from 'react-icons/bi'
// import {HiLocationMarker} from 'react-icons/hi'
// import styles from './property.module.css'
// import Inside from '../../../public/Inside.png'
// import Fade from '../../../public/fade.png'
// import show from '../../../public/Grouptwo.png'
// import Location from '../../../public/Location.png'
// import upload from '../../../public/upload.png'
// import bed from '../../../public/bed.png'
// import toilet from '../../../public/toilet.png'
// import bath from '../../../public/bath.png'
// import Image from 'next/image'
// import Link from 'next/link'
// import { RxSlash } from 'react-icons/rx'
// import CustomFilter from '../custom/filter/customFilter'
// import {useRouter} from "next/router";
// import Numb from '../Numb/page'
// import axios from 'axios';
// import { getRequest } from '@/library/request'
// import { PiBedBold } from "react-icons/pi";
// import { FaBath } from "react-icons/fa6";
// import { BiBath } from "react-icons/bi";




// const Property = () => {
//   const [property, setProperty] = useState([]);
//   const router = useRouter();

//   const ITEMS_PER_PAGE = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     getRequest('RealEstate/GetAllRealEstatesAsync')
//       .then((data) => setProperty(data.data.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = property.slice(indexOfFirstItem, indexOfLastItem);

//   const MAX_PAGES = 10;

//   const paginate = (pageNumber) => {
//     setCurrentPage(Math.min(Math.max(pageNumber, 1), MAX_PAGES));
//   };



//   return (
//     <Fragment>
//       <CustomFilter />
//       <div className={styles.main}>
//       <div className={styles.subone}>
//                 <Link href={`/`} className={styles.link}>
//                     <p>Home</p>
//                 </Link>
//                 <RxSlash />
//                 {/* <Link href={`/Property/property`} className={styles.link}>
//                     <p>Property for sale in {property.city}</p>
//                 </Link> */}
               
//             </div>
//        {currentItems.map((datum) => (
//   <div key={datum.id} style={{ cursor: 'pointer' }} className={styles.propertyItem}>
//     <Link href={`/Property/${datum.id}`}>
//     <div className={styles.maincontfour}>
//       <div className={styles.contimg}>
//         <div className={styles.imgcont}>
//           <Image src={datum.imageUrl} width={100} height={100} alt='fade-img' style={{ width: '100%', height: '100%' }} className={styles.img} />
//         </div>
//         <div className={styles.textcont}>
//           <p className={styles.label}>{datum.title}</p>
//           <p className={styles.labeltext}>{datum.description}</p>
//           <div className={styles.location}>
//             <div className={styles.locatecont}>
//               <div className={styles.locont}>
//                 <Image src={Location} alt='location-img' className={styles.locationimg} />
//               </div>
//             </div>
//             <div className={styles.citycont}>
//               <p className=''>{datum.propertylocation}</p>
//                <p>,</p>
//               <p>{datum.city}</p>
//             </div>
//           </div>
//           <p>{datum.textwo}</p>
//           <div className={styles.avacont}>
//             <p className={styles.textava}>Availabe</p>
//             <p className={styles.price}>{datum.price}</p>
//           </div>
//           <div className={styles.upload}>
//             <p>{datum.icon}</p>
//             <p>{datum.textfive}</p>
//           </div>
//           <div className={styles.roomdiv}>
//             <div className={styles.bedcontainer}>
//             <PiBedBold className={styles.icom} />
//             <p>{datum.numberOfBedrooms} Bedroom(s)</p>
//             </div>

//             <div className={styles.bedcontainer}>
//             <BiBath className={styles.icom} />
//             <p>{datum.numberOfBathrooms} Bathroom(s)</p>
//             </div>
            
//           </div>
//           <div>
//             <div >
//             <p>Number of {datum.numberOfFloors} Floor(s)</p>
//             </div>

//           </div>
//         </div>
//       </div>
//       {/* <div className={styles.lastcont}>
//         <p>Sponsored</p>
//       </div> */}
//     </div>
//     </Link>
//   </div>
// ))}

      

// <div className={styles.subfive}>
//           <div className={styles.paginationButtons}>
//             <div className={styles.iconcont} onClick={() => paginate(currentPage - 1)}>
//               <MdOutlineKeyboardDoubleArrowLeft className={styles.icons} />
//             </div>
//             <p>Page {currentPage}</p>
//             <div className={styles.iconcont} onClick={() => paginate(currentPage + 1)}>
//               <MdOutlineKeyboardDoubleArrowRight className={styles.icons} />
//             </div>
//           </div>
//         </div>
//       </div>
     
//     </Fragment>
//   )
// }

// export default Property

import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { PiBedBold } from 'react-icons/pi';
import { BiBath } from 'react-icons/bi';
import { getRequest } from '@/library/request';
import CustomFilter from '../custom/filter/customFilter';
import styles from './property.module.css';
import Location from '../../../public/Location.png';

const Property = () => {
  const [property, setProperty] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;
  const MAX_PAGES = 10;

  useEffect(() => {
    getRequest('Category/GetAllCategory')
      .then((data) => setCategories(data.data.data))
      .catch((err) => console.log(err));

    getRequest('RealEstate/GetAllRealEstatesAsync')
      .then((data) => setProperty(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = property.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), MAX_PAGES));
  };

  return (
    <Fragment>
      <CustomFilter />
      <div className={styles.main}>
        <div className={styles.subone}>
          <Link href={`/`} className={styles.link}>
            <p>Home</p>
          </Link>
          <RxSlash />
        </div>
        {currentItems.map((datum) => (
          <div key={datum.id} style={{ cursor: 'pointer' }} className={styles.propertyItem}>
            <Link href={`/Property/${datum.id}`}>
              <div className={styles.maincontfour}>
                <div className={styles.contimg}>
                  <div className={styles.imgcont}>
                    <Image src={datum.imageUrl} width={100} height={100} alt='fade-img' className={styles.img} />
                  </div>
                  <div className={styles.textcont}>
                    <p className={styles.label}>{datum.title}</p>
                    <p className={styles.labeltext}>{datum.description}</p>
                    <div className={styles.location}>
                      <div className={styles.locatecont}>
                        <div className={styles.locont}>
                          <Image src={Location} alt='location-img' className={styles.locationimg} />
                        </div>
                      </div>
                      <div className={styles.citycont}>
                        <p className=''>{datum.propertylocation}</p>
                        <p>,</p>
                        <p>{datum.city}</p>
                      </div>
                    </div>
                    <p>{datum.textwo}</p>
                    <div className={styles.avacont}>
                      <p className={styles.textava}>Availabe</p>
                      <p className={styles.price}>{datum.price}</p>
                    </div>
                    <div className={styles.upload}>
                      <p>{datum.icon}</p>
                      <p>{datum.textfive}</p>
                    </div>
                    <div className={styles.roomdiv}>
                      <div className={styles.bedcontainer}>
                        <PiBedBold className={styles.icom} />
                        <p>{datum.numberOfBedrooms} Bedroom(s)</p>
                      </div>
                      <div className={styles.bedcontainer}>
                        <BiBath className={styles.icom} />
                        <p>{datum.numberOfBathrooms} Bathroom(s)</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Number of {datum.numberOfFloors} Floor(s)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className={styles.subfive}>
          <div className={styles.paginationButtons}>
            <div className={styles.iconcont} onClick={() => paginate(currentPage - 1)}>
              <MdOutlineKeyboardDoubleArrowLeft className={styles.icons} />
            </div>
            <p>Page {currentPage}</p>
            <div className={styles.iconcont} onClick={() => paginate(currentPage + 1)}>
              <MdOutlineKeyboardDoubleArrowRight className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Property;
