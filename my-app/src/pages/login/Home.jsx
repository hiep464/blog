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
    const [ff, setFf] = useState([]);
    const [e, setE] = useState([]);
    const [t, setT] = useState([]);
    const [linkViews, setLinkViews] = useState([]);
    const [linkVideo, setLinkVideo] = useState([]);
    const [feature, setFeature] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseApi}/home/INFO/8`).then((res) => {
            setLasttest(res.data);
        });
        axios.get(`${baseApi}/home/LIFE_COACH/6`).then((res) => {
            const newState = res.data;
            res.data.map((item, idx) => {
                const dateObject = new Date(item.created_at);
                const newYear = dateObject.getFullYear();
                newState[idx].created_at = newYear;
            })
            // console.log(res.data);
            setLc(newState);
        });
        axios.get(`${baseApi}/home/FUNCTIONAL_FOODS/6`).then((res) => {
            setFf(res.data);
        });
        axios.get(`${baseApi}/home/EDUCATION/6`).then((res) => {
            setE(res.data);
        });
        axios.get(`${baseApi}/home/TRANSLATE/6`).then((res) => {
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
        <main>
            <div className="flex flex-col justify-center items-center">
                <div className="item1 pt-[2%] pb-[2.5%] bg-[white] w-full flex justify-center items-center">
                    <div className="w-[1200px] px-[20px] md:px-[30px]">
                        <div className="text-[24px] text-[#0077B6] font-[700] mb-[15px]">GIỚI THIỆU</div>
                        <div class="row !grid sm:grid-cols-1 md:grid-cols-4  mb-[15px]">
                            {lastest.map((item, idx) => {
                                return (
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
                <div
                    style={{ backgroundColor: '#EBF1FF' }}
                    className="item1 pt-[2%] pb-[2.5%] w-full flex justify-center items-center"
                >
                    <div className="w-[1200px] px-[20px] md:px-[30px]  float-left">
                        <div className="text-[24px] text-[#0077B6] font-[700] mb-[15px]"> BÀI VIẾT NỔI BẬT</div>
                        <div class="row align-items-start !grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                            {feature?.map((item, idx) => {
                                return (
                                    <div key={idx} class="w-full">
                                        <div class="card border-0 !bg-[#EBF1FF]">
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
                        <div style={{ marginRight: 'auto' }} className="md:pb-[40px float-left">
                            <div className="text-[#0077B6] text-[24px] font-[700] pb-[20px] w-full">
                                THỰC PHẨM CHỨC NĂNG
                            </div>
                            <div className="flex flex-col !grid w-full md:grid-cols-3">
                                {ff.map((item, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col justify-center items-center mb-[40px] md:mb-0 md:mr-[3%]"
                                        >
                                            <div className="overflow-hidden ">
                                                <img
                                                    src={`${baseImage}${item?.image}`}
                                                    className="hover:scale-110 transition-all duration-[300ms] w-full object-cover"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className=" ml-[10px] mt-[5px]">
                                                <div className="text-[17px] font-[500] py-[10px] text-center  home-text">
                                                    {item?.title}
                                                </div>
                                                <div className="text-[14px] text-[#c6c6c6] font-[400] text-5-line ">
                                                    {item?.short_description}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] md:px-0">
                        <div className="text-[#0077B6] text-[24px] font-[600]">XEM NHIỀU</div>
                        <div class="w-full h-[2px] bg-[#0077B6] my-[20px]"></div>
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
                                                class="text-[#0077B6] hover:text-[#0927EB] cursor-pointer hover:text-[#0927EB] cursor-pointer card-text text-[14px] font-[500] leading-[120%] text-left"
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
                    style={{ backgroundColor: '#EBF1FF' }}
                    className="item1 pt-[30px] pb-[20px] md:pb-[40px] bg-[#121020] w-full flex justify-center items-center"
                >
                    <div className="max-w-[1200px] px-[20px] md:px-[30px] w-full">
                        <div className="text-[24px] text-[#0077B6] font-[700] mb-[15px]">VIDEO</div>
                        <div class="row align-items-start !grid grid-cols-1 md:grid-cols-3">
                            {linkVideo?.map((item, idx) => {
                                return (
                                    <div style={{ margin: '10px 0' }} key={idx} class="w-full pb-[10px] md:pb-0">
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
                                            className="h-[230px] md:h-[204px] w-full"
                                        ></iframe>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-start items-start w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[30px] mb-[40px]">
                    <div className="w-full md:w-full md:mr-[25px]">
                        <div className="md:pb-[25px]">
                            <div className="text-[#0077B6] text-[24px] font-[700] pb-[30px]">LIFE COACH</div>
                            <div className="!grid grid-cols-1 md:grid-cols-2 row">
                                {lc?.map((item, idx) => {
                                    return (
                                        // <div key={idx} className="w-full h-fit md:h-auto md:flex">
                                        <div key={idx} className="flex flex-col md:flex-row mb-[36px]">
                                            <div
                                                className="overflow-hidden w-full"
                                                onClick={() => {
                                                    handleNavigate(item?.id);
                                                }}
                                            >
                                                <img
                                                    src={`${baseImage}${item?.image}`}
                                                    className="hover:scale-110 transition-all duration-[300ms] w-[94%] object-cover"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="w-full text-black ml-[6px] mt-[10px]">
                                                <div className="text-[14px] font-[400] italic">
                                                    Năm {item?.created_at}
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        handleNavigate(item?.id);
                                                    }}
                                                    className="text-[22px] text-[#0077B6] font-[700] py-[10px] home-text"
                                                >
                                                    {item?.title}
                                                </div>
                                                <div className="text-[14px] font-[400] text-5-line ">
                                                    {item?.short_description}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1200px]" style={{ borderBottom: '4px solid #0077B6' }}></div>
                <div className="w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[20px] md:mt-[50px] mb-[10px] md:mb-[50px]">
                    <div className="text-[24px] text-[#0077B6] font-[700] mb-[20px] md:mb-[6px]">
                        GIÁO DỤC TIẾNG NHẬT
                    </div>
                    <div class="row !grid sm:grid-cols-1 md:grid-cols-3  mb-[15px]">
                        {e.map((item, idx) => {
                            return (
                                <div className="flex flex-col md:flex-row">
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
                                    </div>{' '}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full max-w-[1200px]" style={{ borderBottom: '4px solid #0077B6' }}></div>
                <div className="w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[20px] md:mt-[50px] mb-[10px] md:mb-[50px]">
                    <div className="text-[24px] text-[#0077B6] font-[700] mb-[20px] md:mb-[6px]">
                        PHIÊN DỊCH, DỊCH THUẬT NHẬT-VIỆT
                    </div>
                    <div className="row !grid sm:grid-cols-1 md:grid-cols-3  mb-[15px]">
                        {t.map((item, idx) => {
                            return (
                                <div className="flex flex-col md:flex-row">
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
                                    </div>{' '}
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
