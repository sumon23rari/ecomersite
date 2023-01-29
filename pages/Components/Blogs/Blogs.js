import Image from 'next/image';
import React, { useState } from 'react';
import main from '../../../public/assets/blog/img1.jpg';
import { FaSearch } from "react-icons/fa";
import blogsd from '../../../public/css/Blog.module.css';
import blogsd2 from '../../../public/assets/blog/team1.jpg';
import comment1 from '../../../public/assets/blog/comment1.jpg';
import comment2 from '../../../public/assets/blog/comment2.jpg';
import bpic1 from '../../../public/assets/blog/blog2.png';
import bpic2 from '../../../public/assets/blog/blog3.png';
import slider1 from '../../../public/assets/blog/blog20.jpg';
import slider2 from '../../../public/assets/blog/blog21.png';
import slider3 from '../../../public/assets/blog/blog22.png';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';
const Blogs = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='py-5'>
           <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xl-8">
                    <div className={blogsd.mainImg}>
                        <Image src={main}></Image>
                    </div>
                    <div className={blogsd.partTxt}>
                        <ul className={blogsd.blogInfo}>
                            <li>by admin</li>
                            <li>2 comments</li>
                            <li>25 january 2023</li>
                        </ul>
                        <h3 className={blogsd.blogTitle}>Impact Of Social Media Marketing On Your</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffer alteation in some form, by injected humour, or randomised words which dont look even slightly believablIf you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                        <p>Rhidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model</p>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className={blogsd.secondary}>
                                <Image src={blogsd2}></Image>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className={blogsd.sideTxt}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum Lorem ipsum dolor sit amet, consectetur adipising Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum</p>
                                <p>
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum Lorem ipsum dolor sit amet, consectetur adipising Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum

Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum Lorem ipsum dolor sit amet, consectetur adipising Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum</p>
                            </div>
                        </div>
                        <div className={blogsd.partTxt}>
                            <h3 className={blogsd.blogTitle}>Special Occasions to our Restaurant</h3>
                            <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accums lacus vel facilisis. rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                        </div>
                        <div className={blogsd.adminWord}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div className={blogsd.admin}>
                                <h6>Jessica Brown</h6>
                                <span>Co - Vision</span>
                            </div>
                        </div>
                        <div className="comments">
                            <h3 className={blogsd.comTitle}>3 comments</h3>
                            <div className={blogsd.simgleComment}>
                        <div className={blogsd.partImg}>
                            <Image src={comment1}></Image>
                        </div>
                        <div className={blogsd.textBox}>
                            <h4>
                                A WordPress Commenter says:</h4>
                            <span>March 30th 2021, 10:21 am</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                            </div>
                            <div className={`${blogsd.simgleComment} ${blogsd.replyd}`}>
                        <div className={blogsd.partImg}>
                            <Image src={comment2}></Image>
                        </div>
                        <div className={blogsd.textBox}>
                            <h4>
                                A WordPress Commenter says:</h4>
                            <span>March 30th 2021, 10:21 am</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                            </div>
                            <div className={blogsd.simgleComment}>
                        <div className={blogsd.partImg}>
                            <Image src={comment1}></Image>
                        </div>
                        <div className={blogsd.textBox}>
                            <h4>
                                A WordPress Commenter says:</h4>
                            <span>March 30th 2021, 10:21 am</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                            </div>
                        </div>
                        <div className={blogsd.blogForm}>
                            <h2>leave a message</h2>
                            <form className='row g-lg-4 g-3'>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" placeholder='Name'/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <div className="col-12">
                                    <textarea placeholder='your message'></textarea>
                                </div>
                                <div className="col-12">
                                    <button>submit comment</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4">
                    <div className="blogsider">
       <form className={blogsd.searchbox}>
        <input type="search" placeholder='search here'/>
        <button><FaSearch></FaSearch></button>
       </form>
       <div  className={blogsd.recentPost}>
        <h2 className={blogsd.postTitle}>Recent Posts</h2>
        <ul>
            <li> 
                <Link href={'#'}>
                    <div className={blogsd.postImg}>
                        <Image src={bpic1}></Image>
                    </div>
                    <div className={blogsd.txBox}>
                        <span className={blogsd.title}>how to prepare for your first his</span>
                        <span className={blogsd.date}>August 22.2022</span>
                    </div>
                </Link>
            </li>
            <li> 
                <Link href={'#'}>
                    <div className={blogsd.postImg}>
                        <Image src={bpic2}></Image>
                    </div>
                    <div className={blogsd.txBox}>
                        <span className={blogsd.title}>how to prepare for your first his</span>
                        <span className={blogsd.date}>August 22.2022</span>
                    </div>
                </Link>
            </li>
            <li> 
                <Link href={'#'}>
                    <div className={blogsd.postImg}>
                        <Image src={bpic1}></Image>
                    </div>
                    <div className={blogsd.txBox}>
                        <span className={blogsd.title}>how to prepare for your first his</span>
                        <span className={blogsd.date}>August 22.2022</span>
                    </div>
                </Link>
            </li>
        </ul>
       </div>
       <div className={blogsd.catagories}>
       <h2 className={blogsd.postTitle}>Categories</h2>
       <ul>
        <li><Link href={'#'}><span><AiOutlineDoubleLeft></AiOutlineDoubleLeft> Organic Vegetables
</span><span>(07)</span></Link></li>
        <li><Link href={'#'}><span><AiOutlineDoubleLeft></AiOutlineDoubleLeft> Fresh Fruits
</span><span>(05)</span></Link></li>
        <li><Link href={'#'}><span><AiOutlineDoubleLeft></AiOutlineDoubleLeft>Fresh Vegetables
</span><span>(10)</span></Link></li>
        <li><Link href={'#'}><span><AiOutlineDoubleLeft></AiOutlineDoubleLeft> Our Restaurant
</span><span>(13)</span></Link></li>
        <li><Link href={'#'}><span><AiOutlineDoubleLeft></AiOutlineDoubleLeft>Special Food
</span><span>(15)</span></Link></li>
        <li><Link href={'#'}><span><AiOutlineDoubleLeft></AiOutlineDoubleLeft>Organic Product
</span><span>(17)</span></Link></li>
       </ul>
       </div>
       <div className={blogsd.imageSlider}>
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
 
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  
       </div>
       <div className="tags">
       <h2 className={blogsd.postTitle}>tags</h2>
       <div className={blogsd.btnBox}>
       <Link href={'#'}>Brunce</Link>
       <Link href={'#'}>cook</Link>
       <Link href={'#'}>cuisine</Link>
       <Link href={'#'}>delicius</Link>
       <Link href={'#'}>vegatran</Link>
       <Link href={'#'}>fish</Link>
       <Link href={'#'}>food</Link>
       <Link href={'#'}>lunch</Link>
       <Link href={'#'}>Tasty</Link>
       </div>
       </div>
                    </div>
                </div>
                </div>
                </div> 
        </div>
    );
};

export default Blogs;