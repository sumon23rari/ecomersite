import React from 'react';
import img1 from '../../public/assets/multivendor/img1.jpg';
import img2 from '../../public/assets/multivendor/img2.jpg';
import img3 from '../../public/assets/multivendor/img3.jpg';
import img4 from '../../public/assets/multivendor/img4.jpg';
import img5 from '../../public/assets/multivendor/img5.jpg';
import img6 from '../../public/assets/multivendor/img6.jpg';
import icon1 from '../../public/assets/seller/icon1.png';
import icon2 from '../../public/assets/seller/icon2.png';
import icon3 from '../../public/assets/seller/icon3.png';
import icon4 from '../../public/assets/seller/icon4.png';
import icon5 from '../../public/assets/seller/icon5.png';
import icon6 from '../../public/assets/seller/icon6.png';
import Multivendor from '../Components/Multivendor/Multivendor';
const Multivendors = () => {
    const multivendors=[
        {id:1,
        img:img1,
        road:'streat 1 great area',
        country:'Bangladesh 1203',
        icon:icon1
    },
    {id:2,
        img:img2,
        road:'streat 1 great area',
        country:'japan 1203',
        icon:icon2
    },
    {id:3,
        img:img3,
        road:'streat 2 great area',
        country:'afganistan 1203',
        icon:icon3
    },
    {id:4,
        img:img4,
        road:'streat 1 great area',
        country:'pakistan 1203',
        icon:icon4
    },
    {id:5,
        img:img5,
        road:'streat 1 great area',
        country:'Bhutan 1203',
        icon:icon5
    },
    {id:6,
        img:img6,
        road:'streat 1 great area',
        country:'nepal 1203',
        icon:icon6
    }
    
    ]
    return (
        <div>
            <div className="container">
            <div className="row">
                {
                    multivendors.map(multivendor=><Multivendor key={multivendor.id} multivendor={multivendor}></Multivendor>)
                }
            </div>
        </div>
        </div>
    );
};

export default Multivendors;