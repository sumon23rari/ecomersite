import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import multivendord from '../../../public/css/Multivendor.module.css';
import { BiStar } from "react-icons/bi";
const Multivendor = ({multivendor}) => {
    const {img,road,country,icon}=multivendor;
    return (
        <div className='col-lg-4 col-md-6 mb-3'> 
        <div className={multivendord.textItem}>
           <Image src={img}></Image>
           <div className={multivendord.overlay}>
            <h5>{road}</h5>
            <p>{country}</p>
            <p><BiStar></BiStar><BiStar></BiStar><BiStar></BiStar><BiStar></BiStar><BiStar></BiStar></p>
           </div>
           </div>
           <div className={multivendord.button}>
            <Link href={'#'}>visit store</Link> 
            <Image src={icon}  className={multivendord.imaged}></Image>
           </div>
           
        </div>
    );
};

export default Multivendor;