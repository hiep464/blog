import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../acess/svg/home.svg';

import item1 from '../acess/item1.jpg';
import { Link } from 'react-router-dom';

import './styles.scss';
import axios from 'axios';

import { baseApi, baseImage } from '../constant';

function Category() {
    let location = useLocation();
    const [title, setTitle] = useState('');

    const [numPage, setNumPage] = useState(1);
    // const maxLenth = useRef(4)
    const [maxLenth, setMaxLenth] = useState(1);
    const [pages, setPages] = useState([]);
    const [data, setData] = useState([]);

    const handleChangePage = (num) => {
        if (num && num !== '-' && num !== '+') {
            setNumPage(num);
        } else {
            if (num === '-') {
                setNumPage(numPage !== 1 ? parseInt(numPage) - 1 : numPage);
            } else {
                setNumPage(numPage < maxLenth.current ? parseInt(numPage) + 1 : numPage);
            }
        }
    };
    useEffect(() => {
        let category = '';
        if (location.pathname.includes('life_coach')) {
            setTitle('LIFE COACH');
            category = 'LIFE_COACH';
        } else if (location.pathname.includes('pointing_hand')) {
            setTitle('CÁCH XEM CHỈ TAY');
            category = 'HAND_POINTING';
        } else if (location.pathname.includes('education')) {
            setTitle('GIÁO DỤC TIẾNG NHẬT');
            category = 'EDUCATION';
        } else if (location.pathname.includes('translate')) {
            setTitle('PHIÊN DỊCH, DỊCH THUẬT NHẬT-VIỆT');
            category = 'TRANSLATE';
        } else if (location.pathname.includes('course_lc')) {
            setTitle('KHÓA HỌC LIFE COACH');
            category = 'COURSE_LC';
        } else if (location.pathname.includes('course_hp')) {
            setTitle('KHÓA HỌC CÁCH XEM CHỈ TAY');
            category = 'COURSE_HP';
        }
        axios.get(`${baseApi}/blog/${category}/page`).then((res) => {
            setMaxLenth(res.data.num_pages);
            const numberArray = Array.from({ length: res.data.num_pages }, (_, index) => index + 1);
            setPages(numberArray);
        });
        axios.get(`${baseApi}/blog/${category}/${numPage}`).then((res) => {
            setData(res.data);
        });
    }, [location]);

    return (
        <main className="bg-white">
            <div className="flex flex-col justify-centera items-center">
                <div className="max-w-[1200px] w-full px-[20px] md:px-0">
                    <div className="w-full">
                        <div className="w-full mt-[10px] border-[1px] border-solid border-[#eaeaea] flex flex-row justify-start items-center">
                            <Link className="p-[10px]" to="/">
                                <img src={Home} alt="" className="w-[16px] h-[16px]"></img>
                            </Link>
                            <div></div>
                            <Link to={location.pathname} className="text-black no-underline">
                                <div className="text-[14px] font-[500] cursor-pointer uppercase">{title}</div>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row w-full mt-[30px]">
                            <div className={'w-full'}>
                                <div className="w-full">
                                    {data.map((item, idx) => {
                                        return (
                                            <div key={idx} className="w-full flex row-auto mb-[4%]">
                                                <div className="overflow-hidden w-[30%] md:w-[20%] ">
                                                    <img
                                                        src={`${baseImage}${item.image}`}
                                                        alt=""
                                                        className="hover:scale-110 transition-all duration-[300ms] w-full object-contain h-max  border-[4px] border-solid border-[#eaeaea]"
                                                    ></img>
                                                </div>
                                                <div className="w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]">
                                                    <div className="mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-[12px] md:text-[14px] font-[400] text-2-line">
                                                        {item.short_description}
                                                    </div>
                                                    <Link to={`/detail/${item.id}`}>
                                                        <button className="text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-[#082C70] text-white">
                                                            View more
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div class="w-full ui-sortable-handle cursor-move flex justify-end items-end">
                                    <div class="box-tools pull-right">
                                        <ul class="pagination pagination-sm inline text-[12px]">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-[#082C70] hover:text-white"
                                                    onClick={() => handleChangePage('-')}
                                                >
                                                    «
                                                </Link>
                                            </li>
                                            {pages.map((item, idx) => {
                                                return (
                                                    <li>
                                                        <Link
                                                            to="#"
                                                            className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-[#082C70] hover:text-white ${
                                                                numPage === 1 ? 'btn-active-page' : ''
                                                            }`}
                                                            onClick={() => handleChangePage(item)}
                                                        >
                                                            {item}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                            {/* <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-[#082C70] hover:text-white ${numPage === 2 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(2)}
                                            >2</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-[#082C70] hover:text-white ${numPage === 3 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(3)}
                                            >3</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-[#082C70] hover:text-white ${numPage === 4 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(4)}
                                            >4</Link></li> */}
                                            <li>
                                                <Link
                                                    to="#"
                                                    className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-[#082C70] hover:text-white`}
                                                    onClick={() => handleChangePage('+')}
                                                >
                                                    »
                                                </Link>
                                            </li>
                                        </ul>
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

export default Category;
