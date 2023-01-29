import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '../../../public/assets/invoice/user.jpg';
import maProfile from '../../../public/css/Manage.module.css';
const ManageProfile = () => {
    return (
        <div className='col-12'>
            <h2>Manage profile</h2>
            <div className={maProfile.profilePanel}>
                <div className={maProfile.profileTop}>
                    <div className="user">
                        <div  className={maProfile.partImg}>
                            <Image src={user}></Image>
                        </div>
                        <div className={maProfile.partTxt}>
                                    <span>Steven smith</span>
                                </div>
                    </div>
                    <div className={maProfile.btnBox}>
                    <Link href={'#'} className={`${maProfile.btnFirst} ${maProfile.btnActive}`}>Upload</Link>
                        <Link href={'#'}className={maProfile.btnFirst}>remove</Link>
                    </div>
                </div>
                <form>
                <div className="row">
                    <div className="col-lg-6 mt-3">
                        <input type="text" placeholder='first name:' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="text" placeholder='last name:' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="email" placeholder='email address:' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="text" placeholder='phone:' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="text" placeholder='country*' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="number" placeholder='post code*' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="password" placeholder='current password*' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <input type="password" placeholder='new password*' />
                    </div>
                    <div className="col-lg-12 mt-3">
                    <input type="password" placeholder='confirm pasword*' />
                    </div>
                    <div className="col-lg-12 mt-4">
                        <div className={maProfile.btnBox}>
                        <button className={`${maProfile.btnFirst} ${maProfile.btnSave}`}>save change</button>
                        </div>
                        
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ManageProfile;