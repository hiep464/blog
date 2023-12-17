import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/global.scss';

import './styles.scss';
import axios from 'axios';
import { baseApi, baseImage } from '../../constant';

// LIFE_COACH = 'LIFE_COACH';
// HAND_POINTING = 'HAND_POINTING';
// EDUCATION = 'EDUCATION';
// TRANSLATE = 'TRANSLATE';
// COURSE = 'COURSE';

function Home() {
    const [lastest, setLasttest] = useState([]);
    const [lc, setLc] = useState([]);
    const [hp, setHp] = useState([]);
    const [e, setE] = useState([]);
    const [t, setT] = useState([]);
    const [linkViews, setLinkViews] = useState([]);
    const [linkVideo, setLinkVideo] = useState([]);
    const [feature, setFeature] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseApi}/home/INFO/3`).then((res) => {
            setLasttest(res.data);
        });
        axios.get(`${baseApi}/home/LIFE_COACH/1`).then((res) => {
            const newState = res.data;
            const dateObject = new Date(res.data[0].created_at);
            const newYear = dateObject.getFullYear();
            newState[0].created_at = newYear;
            console.log(res.data);
            setLc(newState);
        });
        axios.get(`${baseApi}/home/EDUCATION/6`).then((res) => {
            setHp(res.data);
        });
        axios.get(`${baseApi}/home/EDUCATION/3`).then((res) => {
            setE(res.data);
        });
        axios.get(`${baseApi}/home/TRANSLATE/3`).then((res) => {
            setT(res.data);
        });
        axios.get(`${baseApi}/link/VIEWS/6`).then((res) => {
            setLinkViews(res.data);
        });
        axios.get(`${baseApi}/link/VIDEO/6`).then((res) => {
            setLinkVideo(res.data);
        });
        axios.get(`${baseApi}/blog/feature`).then((res) => {
            setFeature(res.data);
        });
    }, []);

    const handleNavigate = (id) => {
        navigate(`/detail/${id}`);
    };

    const handleNewTab = (url) => {
        window.open(url, '_blank');
    };
    return (
        // <main className='bg-black'>
        <main>
            <div className="flex flex-col justify-center items-center">
                <div className="item1 pt-[2%] pb-[2.5%] bg-[white] w-full flex justify-center items-center">
                    {/* <div className="flex flex-col md:flex-row justify-start items-start w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[30px] mb-[40px]"> */}
                    {/* <div className="max-w-[1200px] px-[20px] md:px-[30px]"> */}
                    <div className="w-[1200px] px-[20px] md:px-[30px]">
                        <div className="text-[24px] text-[#0966FF] font-[700] mb-[15px]">GIỚI THIỆU</div>
                        <div class="row !grid sm:grid-cols-1 md:grid-cols-3  mb-[15px]">
                            {lastest.map((item, idx) => {
                                return (
                                    // <div key={idx} class="w-full">
                                    //     <Link to="/detail/1" class="card border-0 border-none bg-white no-underline ">
                                    //         <div className="md:h-[215px] overflow-hidden">
                                    //             <img
                                    //                 className="hover:scale-110 transition-all duration-[300ms] w-full h-full object-cover"
                                    //                 src={`${baseImage}${item.image}`}
                                    //                 alt="..."
                                    //             />
                                    //         </div>
                                    //         <div class="card-body py-[10px] px-[10px] home-text">
                                    //             <p class="card-text text-[17px] font-[500]">{item?.title}</p>
                                    //         </div>
                                    //     </Link>
                                    // </div>
                                    <div key={idx} class="w-full">
                                        <div class="card border-0 !bg-[white]">
                                            <div className="md:h-[200px]  overflow-hidden flex flex justify-center items-center">
                                                <img
                                                    onClick={() => {
                                                        handleNavigate(item.id);
                                                    }}
                                                    src={`${baseImage}${item.image}`}
                                                    className="hover:scale-110 transition-all duration-[300ms] w-[200px] h-[200px] object-cover"
                                                    alt="..."
                                                />
                                            </div>
                                            <div class="px-[10px] py-[10px]">
                                                <p
                                                    onClick={() => {
                                                        handleNavigate(item.id);
                                                    }}
                                                    class=" text-[16px] xl:text-[20px] font-[500] text-center leading-[100%] home-text"
                                                >
                                                    {item.title} <br />
                                                    <span class="text-[black] text-[14px]">
                                                        {item.short_description}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* <div dangerouslySetInnerHTML={{ __html: lastest[0]?.content }} /> */}
                    </div>
                </div>
                <div
                    style={{ backgroundColor: '#FFBD59' }}
                    className="item1 pt-[2%] pb-[2.5%] w-full flex justify-center items-center"
                >
                    {/* <div className="max-w-[1200px] px-[20px] md:px-[30px]  float-left"> */}
                    <div className="w-[1200px] px-[20px] md:px-[30px]  float-left">
                        <div className="text-[24px] text-[#0966FF] font-[700] mb-[15px]"> BÀI VIẾT NỔI BẬT</div>
                        <div class="row align-items-start !grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {feature?.map((item, idx) => {
                                return (
                                    <div key={idx} class="w-full">
                                        <div class="card border-0 !bg-[#FFBD59]">
                                            <div className="md:h-[186px]  overflow-hidden">
                                                <img
                                                    onClick={() => {
                                                        handleNavigate(item.id);
                                                    }}
                                                    src={`${baseImage}${item.image}`}
                                                    className="hover:scale-110 transition-all duration-[300ms] w-full h-[186px] object-cover"
                                                    alt="..."
                                                />
                                            </div>
                                            <div class="px-[10px] py-[10px]">
                                                <p
                                                    onClick={() => {
                                                        handleNavigate(item.id);
                                                    }}
                                                    class=" text-[16px] xl:text-[20px] font-[500] text-center leading-[100%] home-text"
                                                >
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[30px] md:mb-[40px]">
                    <div className="w-full md:w-[60%] md:mr-[25px] flex justify-center items-center flex-col">
                        <div style={{marginRight: 'auto'}} className="md:pb-[40px float-left">
                            <div
                                className="text-[#0966FF] text-[24px] font-[700] pb-[20px] w-full"
                            >
                                CÁCH XEM CHỈ TAY
                            </div>
                            <div className="flex flex-col md:flex-row w-full">
                                {/* <div className="w-full flex flex-col justify-center items-center mb-[40px] md:mb-0 md:mr-[3%]">
                                    <div className="overflow-hidden ">
                                        <img
                                            src={`${baseImage}${hp[0]?.image}`}
                                            className="hover:scale-110 transition-all duration-[300ms] w-full object-cover"
                                            alt="..."
                                        />
                                    </div>
                                    <div className=" ml-[10px] mt-[5px]">
                                        <div className="text-[17px] font-[500] py-[10px] text-center  home-text">
                                            {hp[0]?.title}
                                        </div>
                                        <div className="text-[14px] text-[#c6c6c6] font-[400] text-5-line ">
                                            {hp[0]?.short_description}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center mb-[40px] md:mb-0 md:mr-[3%]">
                                    <img className="" src={`${baseImage}${hp[1]?.image}`} alt=""></img>
                                    <div className=" ml-[10px] mt-[5px]">
                                        <div className="text-[17px] font-[500] py-[10px] text-center  home-text">
                                            {hp[1]?.title}
                                        </div>
                                        <div className="text-[14px] text-[#c6c6c6] font-[400] text-5-line ">
                                            {hp[1]?.short_description}
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="!grid grid-cols-1 md:grid-cols-2 row w-full">
                            <div className="flex flex-row justify-center items-center pb-[20px]">
                                <div className="overflow-hidden w-[50%]">
                                    <img
                                        src={`${baseImage}${hp[2]?.image}`}
                                        className="hover:scale-110 transition-all duration-[300ms] w-full object-cover"
                                        alt="..."
                                    />
                                </div>
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500]  leading-[150%] text-left px-[10] py-[10px]">
                                    {hp[2]?.title}
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center pb-[20px]">
                                <img className="w-[50%]" src={`${baseImage}${hp[3]?.image}`} alt="..." />
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500]  leading-[150%] text-left px-[10] py-[10px]">
                                    {hp[3]?.title}
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center pb-[20px]">
                                <img className="w-[50%]" src={`${baseImage}${hp[4]?.image}`} alt="..." />
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500]  leading-[150%] text-left px-[10] py-[10px]">
                                    {hp[4]?.title}
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center pb-[20px]">
                                <img className="w-[50%]" src={`${baseImage}${hp[5]?.image}`} alt="..." />
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500]  leading-[150%] text-left px-[10] py-[10px]">
                                    {hp[5]?.title}
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-full md:w-[40%] md:px-0">
                        <div className="text-[#0966FF] text-[24px] font-[600]">XEM NHIỀU</div>
                        <div class="w-full h-[2px] bg-[#0966FF] my-[20px]"></div>
                        <div>
                            {linkViews?.map((item, idx) => {
                                return (
                                    <div key={idx} className="flex flex-row justify-center items-start mb-[15px]">
                                        <div className="overflow-hidden w-[50%]">
                                            <iframe
                                                title={item.title}
                                                width="640"
                                                height="360"
                                                src={`https://www.youtube.com/embed/${
                                                    item.link.match(/[?&]v=([^&]+)/)[1]
                                                }?feature=oembed`}
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen=""
                                                className="h-[70px] md:h-[150px] w-full"
                                            ></iframe>
                                        </div>
                                        <div className="pl-[10px] w-[50%]">
                                            <div
                                                onClick={() => {
                                                    handleNewTab(item.link);
                                                }}
                                                class="text-[#0966FF] hover:text-[#0927EB] cursor-pointer hover:text-[#0927EB] cursor-pointer card-text text-[14px] font-[500] leading-[120%] text-left"
                                            >
                                                {item.title}
                                            </div>
                                            <div className="mt-[5px] text-[#8E99A2]  card-text text-[14px] font-[400] leading-[140%] text-left">
                                                {item?.short_description}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div
                    style={{ backgroundColor: '#FFBD59' }}
                    className="item1 pt-[30px] pb-[20px] md:pb-[40px] bg-[#121020] w-full flex justify-center items-center"
                >
                    <div className="max-w-[1200px] px-[20px] md:px-[30px] w-full">
                        <div className="text-[24px] text-[#0966FF] font-[700] mb-[15px]">VIDEO</div>
                        <div class="row align-items-start !grid grid-cols-1 md:grid-cols-3">
                            {/* {link.map((item, idx) => {
                                return (
                                    <div key={idx} class="w-full pb-[10px] md:pb-0">
                                        <iframe
                                            title="Những bức ảnh về tình yêu đẹp (Images about love nice)"
                                            width="640"
                                            height="360"
                                            src={item.link}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen=""
                                            className="h-[225px] md:h-[150px] w-full"
                                        ></iframe>
                                    </div>
                                );
                            })} */}
                            {linkVideo?.map((item, idx) => {
                                return (
                                    <div key={idx} class="w-full pb-[10px] md:pb-0">
                                        <iframe
                                            title={item.title}
                                            width="640"
                                            height="360"
                                            src={`https://www.youtube.com/embed/${item.link.match(/[?&]v=([^&]+)/)[1]}?feature=oembed`}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen=""
                                            className="h-[230px] md:h-[204px] w-full"
                                        ></iframe>
                                    </div>
                                );
                            })}
                            {/* <div class="w-full pb-[10px] md:pb-0">
                                <iframe
                                    title="Những bức ảnh về tình yêu đẹp (Images about love nice)"
                                    width="640"
                                    height="360"
                                    src={'https://www.youtube.com/embed/-fiUk80y7Ic?feature=oembed'}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen=""
                                    className="h-[230px] md:h-[204px] w-full"
                                ></iframe>
                            </div>
                            <div class="w-full pb-[10px] md:pb-0">
                                <iframe
                                    title="Những bức ảnh về tình yêu đẹp (Images about love nice)"
                                    width="640"
                                    height="360"
                                    src={'https://www.youtube.com/embed/1doNQnuRSTk?feature=oembed'}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen=""
                                    className="h-[225px] md:h-[204px] w-full"
                                ></iframe>
                            </div>
                            <div class="w-full pb-[10px] md:pb-0">
                                <iframe
                                    title="Những bức ảnh về tình yêu đẹp (Images about love nice)"
                                    width="640"
                                    height="360"
                                    src={'https://www.youtube.com/embed/M67LeI2Qol0?feature=oembed'}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen=""
                                    className="h-[225px] md:h-[204px] w-full"
                                ></iframe>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* <div class="w-full h-[0.5px] bg-white"></div> */}

                {/* <div class="w-full h-[0.5px] bg-white"></div> */}
                <div className="flex flex-col md:flex-row justify-start items-start w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[30px] mb-[40px]">
                    <div className="w-full md:w-[80%] md:mr-[25px]">
                        <div className="md:pb-[25px]">
                            <div className="text-[#0966FF] text-[24px] font-[700] pb-[30px]">LIFE COACH</div>
                            <div className="!grid grid-cols-1 md:grid-cols-1 row">
                                {/* <div className="w-full flex-row items-start hidden md:flex"> */}
                                <div className="w-full h-fit md:h-auto md:flex">
                                    <div
                                        className="overflow-hidden w-[80%]"
                                        onClick={() => {
                                            handleNavigate(lc[0]?.id);
                                        }}
                                    >
                                        <img
                                            src={`${baseImage}${lc[0]?.image}`}
                                            className="hover:scale-110 transition-all duration-[300ms] w-[96%] object-cover"
                                            alt="..."
                                        />
                                    </div>
                                    <div
                                        className="text-black ml-[10px] mt-[10px]"
                                        onClick={() => {
                                            handleNavigate(lc[0]?.id);
                                        }}
                                    >
                                        <div className="text-[14px] font-[400] italic">Năm {lc[0]?.created_at}</div>
                                        <div className="text-[28px] text-[#0966FF] font-[700] py-[10px] home-text">
                                            {lc[0]?.title}
                                        </div>
                                        <div className="text-[16px] font-[400] text-5-line ">
                                            {lc[0]?.short_description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1200px]" style={{ borderBottom: '4px solid #FFBD59' }}></div>
                <div className="w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[20px] md:mt-[50px] mb-[10px] md:mb-[50px]">
                    <div className="text-[24px] text-[#0966FF] font-[700] mb-[20px] md:mb-[6px]">
                        GIÁO DỤC TIẾNG NHẬT
                    </div>
                    <div class="row !grid sm:grid-cols-1 md:grid-cols-3  mb-[15px]">
                        <div className="flex flex-col md:flex-row">
                            {e.map((item, idx) => {
                                return (
                                    // <div className="w-full flex flex-col justify-center items-center pb-[30px] md:pb-0 md:mr-[3%]">
                                    //     <div className="overflow-hidden ">
                                    //         <img
                                    //             src={`${baseImage}${item.image}`}
                                    //             className="hover:scale-110 transition-all duration-[300ms] w-full object-cover"
                                    //             alt="..."
                                    //         />
                                    //     </div>
                                    //     <div className=" ml-[10px] mt-[5px]">
                                    //         <div className="text-[17px] font-[500] py-[10px] text-center">
                                    //             {item?.title}
                                    //         </div>
                                    //         <div className="text-[14px] text-[#c6c6c6] font-[400] text-5-line">
                                    //             {item?.short_description}
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <div key={idx} class="w-full">
                                        <div class="card border-0 !bg-[white]">
                                            <div className="md:h-[200px]  overflow-hidden flex flex justify-center items-center">
                                                <img
                                                    onClick={() => {
                                                        handleNavigate(item.id);
                                                    }}
                                                    src={`${baseImage}${item.image}`}
                                                    className="hover:scale-110 transition-all duration-[300ms] w-[200px] h-[200px] object-cover"
                                                    alt="..."
                                                />
                                            </div>
                                            <div class="px-[10px] py-[10px]">
                                                <p
                                                    onClick={() => {
                                                        handleNavigate(item.id);
                                                    }}
                                                    class=" text-[16px] xl:text-[20px] font-[500] text-center leading-[100%] home-text"
                                                >
                                                    {item.title} <br />
                                                    <span class="text-[black] text-[14px]">
                                                        {item.short_description}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1200px]" style={{ borderBottom: '4px solid #FFBD59' }}></div>
                <div className="w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[20px] md:mt-[50px] mb-[10px] md:mb-[50px]">
                    <div className="text-[24px] text-[#0966FF] font-[700] mb-[20px] md:mb-[6px]">
                        PHIÊN DỊCH, DỊCH THUẬT NHẬT-VIỆT
                    </div>
                    <div className="flex flex-col md:flex-row">
                        {t.map((item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="w-full flex flex-col justify-center items-center pb-[30px] md:pb-0 md:mr-[3%]"
                                >
                                    <div className="overflow-hidden ">
                                        <img
                                            src={item.image}
                                            className="hover:scale-110 transition-all duration-[300ms] w-full object-cover"
                                            alt="..."
                                        />
                                    </div>
                                    <div className=" ml-[10px] mt-[5px]">
                                        <div className="text-[17px] font-[500] py-[10px] text-center">
                                            {item?.title}
                                        </div>
                                        <div className="text-[14px] text-[#c6c6c6] font-[400] text-5-line">
                                            {item?.short_description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
