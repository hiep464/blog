import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../acess/svg/home.svg';

import item1 from '../acess/item1.jpg';
import { Link } from 'react-router-dom';

import './styles.scss';
import axios from 'axios';

import { baseApi, baseImage } from '../constant';

function Search() {
    let location = useLocation();
    const [title, setTitle] = useState('');
    const [keySearch, setKeySearch] = useState('');

    const [numPage, setNumPage] = useState(1);
    // const maxLenth = useRef(4)
    const [maxLenth, setMaxLenth] = useState(1);
    const [pages, setPages] = useState([]);
    const [data, setData] = useState([]);
    const [latest, setLatest] = useState([]);

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
        const parts = decodeURI(location.pathname).split('/');
        setKeySearch(parts[2]);
        setTitle('Search Results');
        axios.get(`https://kakojp.jp/api/search?search=${parts[2]}`).then((res) => {
            setData(res.data.results)
            const pages_rs = res.data.count / 10 + 1
            const numberArray = Array.from({ length: pages_rs }, (_, index) => index + 1);
            setMaxLenth(pages_rs)
            setPages(numberArray)
        });
        axios.get(`https://kakojp.jp/api/blog/lastest`).then((res) => {
            setLatest(res.data)
        })
    }, [location]);

    return (
        <main className="bg-white">
            <div className="flex flex-col justify-centera items-center">
                <div className="max-w-[1200px] w-full px-[20px] md:px-0">
                    <div className="w-full">
                        <div className="w-full mt-[10px] border-[1px] border-solid border-[#eaeaea] flex flex-row justify-start items-center">
                            <Link className="p-[10px]" to="/">
                                <img src={Home} alt="" className="w-[15px] h-[15px]"></img>
                            </Link>
                            <div></div>
                            <Link to={location.pathname} className="text-black no-underline">
                                <div className="text-[12px] font-[400] cursor-pointer uppercase">{title}</div>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row w-full">
                            <div className={`'w-full md:w-[25%]' w-[25%] mt-[30px] mr-[30px] h-fit`}>
                                <div className=" border-[1px] border-solid border-[#eaeaea]">
                                    <div className="bg-[#FFCC29] text-[#2E3E86] px-[20px] py-[10px] text-[18px] font-[700] uppercase border-b-[1px] border-solid border-[#eaeaea]">
                                        Bài viết mới
                                    </div>
                                    <div className="p-[20px]">
                                        {
                                            latest.map((item, idx) => {
                                                return (
                                                    <Link className='text-[14px] font-[400] text-black no-underline' to={`/detail/${item.id}`}><div key={idx} className="py-[5px]">{item.title}</div></Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className=" border-[1px] border-solid border-[#eaeaea] mt-[20px] mb-[20px]">
                                    <div className="bg-[#FFCC29] text-[#2E3E86] px-[20px] py-[10px] text-[18px] font-[700] uppercase border-b-[1px] border-solid border-[#eaeaea]">
                                        Chuyên mục
                                    </div>
                                    <div className="p-[20px] flex flex-col">
                                        <Link
                                            className="py-[5px] text-[14px] font-[400] text-black no-underline"
                                            to="/category/life_coach"
                                        >
                                            LIFE COACH
                                        </Link>
                                        <Link
                                            className="py-[5px] text-[14px] font-[400] text-black no-underline"
                                            to="/category/pointing_hand"
                                        >
                                            CÁCH XEM CHỈ TAY
                                        </Link>
                                        <Link
                                            className="py-[5px] text-[14px] font-[400] text-black no-underline"
                                            to="/category/education"
                                        >
                                            GIÁO DỤC TIẾNG NHẬT
                                        </Link>
                                        <Link
                                            className="py-[5px] text-[14px] font-[400] text-black no-underline"
                                            to="/category/translate"
                                        >
                                            PHIÊN DỊCH, DỊCH THUẬT NHẬT VIỆT
                                        </Link>
                                        <Link
                                            className="py-[5px] text-[14px] font-[400] text-black no-underline"
                                            to="/category/course_lc"
                                        >
                                            KHÓA HỌC LIFE COACH
                                        </Link>
                                        <Link
                                            className="py-[5px] text-[14px] font-[400] text-black no-underline"
                                            to="/category/course_hp"
                                        >
                                            KHÓA HỌC CÁCH XEM CHỈ TAY
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`${keySearch ? 'ww-full md:w-[75%]' : 'w-full'}`}>
                                <div className="py-[30px] text-[20px] md:text-[24px] font-[700] uppercase">
                                    {keySearch ? `SEARCH RESULTS FOR: ${keySearch}` : `Chuyên mục: ${title}`}
                                </div>
                                <div className="w-full">
                                    {data.map((item, idx) => {
                                        return (
                                            <div key={idx} className="w-full flex row-auto mb-[4%]">
                                                <div className="overflow-hidden w-[30%] md:w-[20%] ">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="hover:scale-110 transition-all duration-[300ms] w-full object-contain h-max  border-[4px] border-solid border-[#eaeaea]"
                                                    ></img>
                                                </div>
                                                <div className="w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]">
                                                    <div className="mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line text-[#0966FF]">
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

export default Search;
