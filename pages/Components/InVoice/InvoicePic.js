import React from 'react';
import invoicedstyle from '../../../public/css/Invoice.module.css';
import sideImg from '../../../public/assets/invoice/user.jpg';
import {FaFileInvoice,FaWallet,FaRegUser} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { BiPowerOff } from "react-icons/bi";
import Image from 'next/image';
const InvoicePic = ({active,setActive}) => {
    return (
        <div className={invoicedstyle.sideVar}>
            
                <div className={invoicedstyle.user}>
                <div className={invoicedstyle.partImg}>
                    <Image src={sideImg}></Image>
                </div>
                <div className="partText">
                    <h3>Robert Smith</h3>
                </div>
                </div>
    <div className={invoicedstyle.nav}>
        <button onClick={()=>setActive('firstElement')}> <span className={`${active==='firstElement' && invoicedstyle.activColor}`}><span className={invoicedstyle.icon}></span><MdDashboard></MdDashboard> <span className={invoicedstyle.txt}>Dashbutton</span></span></button>
        <button  onClick={()=>setActive('secondElement')}><span className={`${active==='secondElement' && invoicedstyle.activColor}`}><span className={invoicedstyle.icon}><FaFileInvoice></FaFileInvoice></span> <span className={invoicedstyle.txt}>purshase history</span></span></button>
        <button onClick={()=>setActive('thirdElement')}><span className={`${active==='thirdElement' && invoicedstyle.activColor}`}><span className={invoicedstyle.icon}></span><TiMessages></TiMessages> <span className={invoicedstyle.txt}>conversation</span></span></button>
        <button onClick={()=>setActive('fourthElement')}><span className={`${active==='fourthElement' && invoicedstyle.activColor}`}><span className={invoicedstyle.icon}><FaWallet></FaWallet></span> <span className={invoicedstyle.txt}>my wallet</span></span></button>
        <button onClick={()=>setActive('fiveElement')}> <span className={`${active==='fiveElement' && invoicedstyle.activColor}`}><span className={invoicedstyle.icon}><FaRegUser></FaRegUser></span> <span className={invoicedstyle.txt}>manage profile</span></span></button>
        <button><span className={invoicedstyle.icon}><BiPowerOff></BiPowerOff></span> <span className={invoicedstyle.txt}>log Out</span></button>
    </div>

        </div>
    );
};

export default InvoicePic;