import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from "../acess/svg/home.svg";
import { Link } from 'react-router-dom';

function Contact() {

    let location = useLocation();

    return (
        <main className='bg-white'>
            <div className="flex flex-col justify-centera items-center">
                <div className='max-w-[1200px] w-full px-[20px] md:px-[20px]'>
                    <div className='w-full'>
                        <div className='w-full mt-[10px] border-[1px] border-solid border-[#eaeaea] flex flex-row justify-start items-center'>
                            <Link className='p-[10px]' to="/">
                                <img src={Home} alt='' className='w-[15px] h-[15px]'></img>
                            </Link>
                            <div></div>
                            <Link to={location.pathname} className='text-black no-underline'>
                                <div className='text-[12px] font-[400] cursor-pointer uppercase'>LIÊN HỆ</div>
                            </Link>
                        </div>
                        <div className='flex flex-col md:flex-row w-full'>
                            <div className="w-full">
                                <div className='py-[20px] text-[20px] md:text-[24px] font-[700] uppercase'>LIÊN HỆ</div>
                                <div className='w-full flex flex-col md:flex-row'>
                                    <div className='w-full mr-[20px]'>
                                        <p class="card-text">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Họ và tên"
                                                style={{ marginBottom: '10px' }}
                                            />
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Số điện thoại"
                                                style={{ marginBottom: '10px' }}
                                            />
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Email"
                                                style={{ marginBottom: '10px' }}
                                            />
                                            {/* <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Câu chuyện của bạn"
                                                style={{ marginBottom: '10px' }}
                                            /> */}
                                            <button class="btn" type="submit" className='text-white bg-[#BF211A] uppercase px-[10px] py-[10px] my-[10px]'>
                                                Đăng ký
                                            </button>
                                        </p>
                                    </div>
                                    <div className='w-full py-[30px] md:py-0'>
                                        <div className='text-[16px] font-[700] mb-[10px]'>Tư vấn tâm lý</div>
                                        <div className='text-[14px]  mb-[10px]'>Email: srsgogakukyositsu@gmail.com</div>
                                        <div className='text-[14px] mb-[10px]'>
                                            Chủ đề: life coach , chia sẻ cách xem chỉ tay , phong thuỷ theo trường phái Nhật Bản, Giáo dục tiếng Nhật , phiên dịch dịch thuật tiếng Nhật , Viêt
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;