import Image from 'next/image';
import React from 'react';
import avater from '../../../public/assets/invoice/avatar.png';

import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsBookmark,BsTrash } from "react-icons/bs";
import user from '../../../public/assets/invoice/user.jpg';
import conStyle from '../../../public/css/Conversation.module.css';
const Conversation = () => {
    return (
        <div>
        <div className="convertitle">
            <h2>Conversations</h2>
            </div>  
            <div className={conStyle.converStyle}>
                <div className="row">
                    <div className="col-md-8">
                        <div className={conStyle.chatArea}>
                            <div className={conStyle.singleMsg}>
                                <div className={conStyle.partImg}>
                                    <div>
                                        <Image  className={conStyle.img} src={avater}></Image>
                                    </div>
                                    <span>13:57</span>
                                </div>
                                <div className={conStyle.partTxt}>
                                    <span>Flag messages where the</span>
                                </div>
                            </div>
                            <div className={`${conStyle.singleMsg} ${conStyle.msgOut}`}>
                            <div className={conStyle.partTxt}>
                                    <span>Flag messages where the</span>
                                </div>
                            <div className={conStyle.partImg}>
                                    <div>
                                        <Image  className={conStyle.img} src={user}></Image>
                                    </div>
                                    <span>13:57</span>
                                </div>
                               
                            </div>
                            <div className={conStyle.singleMsg}>
                                <div className={conStyle.partImg}>
                                    <div>
                                        <Image  className={conStyle.img} src={avater}></Image>
                                    </div>
                                    <span>13:57</span>
                                </div>
                                <div className={conStyle.partTxt}>
                                    <span>Flag messages where the</span>
                                </div>
                            </div>
                            <div className={`${conStyle.singleMsg} ${conStyle.msgOut}`}>
                            <div className={conStyle.partTxt}>
                                    <span>Flag messages where the</span>
                                </div>
                            <div className={conStyle.partImg}>
                                    <div>
                                        <Image  className={conStyle.img} src={user}></Image>
                                    </div>
                                    <span>13:57</span>
                                </div>
                               
                            </div>
                            <div className={conStyle.singleMsg}>
                                <div className={conStyle.partImg}>
                                    <div>
                                        <Image  className={conStyle.img} src={avater}></Image>
                                    </div>
                                    <span>13:57</span>
                                </div>
                                <div className={conStyle.partTxt}>
                                    <span>Flag messages where the</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={conStyle.chatBetween}>
                            <div className={conStyle.partImg}>
                            <Image  className={conStyle.img}  src={user}></Image>
                            </div>
                             <div className={conStyle.partInfo}>
                                    <span>conversation</span>
                                </div>
                        </div>
                        <div className={conStyle.action}>
                            <h4 className={conStyle.title}>actions</h4>
                            <ul>
                                <li><button>mark as reviewd <span><AiOutlineCheckCircle></AiOutlineCheckCircle></span></button></li>
                                <li><button>seve for later <span><BsBookmark></BsBookmark></span></button></li>
                                <li><button>delete <span><BsTrash></BsTrash></span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>  
        </div>
    );
};

export default Conversation;