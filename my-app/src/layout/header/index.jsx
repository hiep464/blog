import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../acess/avartar.png';
import threebar from '../../acess/svg/threebars.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
function Header() {
    const HomeRoutesConfig = [
        {
            label: 'Home',
            route: '/home',
            default: true,
        },
        // {
        //     label: 'Về chúng tôi',
        //     route: '/contact',
        // },
        {
            label: 'life coach',
            route: '/category/life_coach',
        },
        {
            label: 'cách xem chỉ tay',
            route: '/category/pointing_hand',
        },
        {
            label: 'giáo dục tiếng nhật',
            route: '/category/education',
        },
        {
            label: 'phiên dịch, dịch thuật nhật- việt',
            route: '/category/translate',
        },
        {
            label: 'khoá học',
            route: '/category/course',
        },
        {
            label: 'liên hệ',
            route: '/contact',
        },
    ];

    const [search, setSearch] = useState('');
    const [showMenu, setShowMenu] = useState(false); //show menu mobile
    const [show, setShow] = useState(1); //show header when scroll

    let data = useLocation();
    const navigate = useNavigate();

    const handleChangeSearch = () => {
        if (!search) {
            navigate(`/home`);
        } else {
            navigate(`/search/${search}`);
        }
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 200 && window.scrollY < 500 && show !== 2) {
    //             setShow(2);
    //         } else if (window.scrollY >= 500 && show !== 3) {
    //             setShow(3);
    //         } else {
    //             setShow(1);
    //             if (show !== 1) {
    //                 setShow(1);
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <div
                style={{
                    margin: '10px 0 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                // className="w-[100px] xl:w-[170px]"
            >
                <img style={{ height: '88px', width: '88px' }} src={logo} alt="#" />
                <span style={{ color: '#082C70' }}>
                    <strong>KAKOJP</strong> 合同会社
                </span>
            </div>
            <div class="btn-group !absolute right-[30px] top-[30px] !flex md:!hidden">
                <button
                    type="button"
                    className="border-[1px] border-solid border-white p-[12px]"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <img src={threebar} className="!w-[14px] !h-[14px] bg-[red]" alt=""></img>
                </button>
            </div>
            <div className="absolute top-[90px] w-full px-[20px] right-0 z-10 !flex md:!hidden">
                <div
                    class="dropdown-menu pull-right"
                    role="menu"
                    className={`w-full flex flex-col bg-white text-black ${showMenu ? 'flex' : 'hidden'}`}
                >
                    {HomeRoutesConfig.map((item) => (
                        <Link
                            scroll={true}
                            key={item.route}
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-black no-underline  w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]"
                            to={`${item.route}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            <header
                style={{
                    backgroundColor: '#001219',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#0966FF',
                }}
                className={`home-header ${
                    show === 1 ? 'home-header' : show === 3 ? 'home-header--show' : 'home-header--hidden'
                } z-50`}
            >
                <div
                    style={{ display: 'flex', alignItems: 'center' }}
                    className="xl:w-[1200px] relative w-full md:h-[100px] justify-center"
                >
                    <div className="flex flex-col justify-center items-center !w-full md:!w-auto px-[20px]  md:pr-0">
                        <div class="input-group" className="flex md:hidden w-full mb-[30px] home-search">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="search here"
                                aria-label="search here"
                                aria-describedby="button-addon2"
                                onChange={(e) => setSearch(e.target.value)}
                                className="h-[34px] p-[12px] w-full"
                            />
                            <button
                                class="btn btn-outline-secondary text-white"
                                type="button"
                                id="button-addon2"
                                style={{ backgroundColor: 'rgb(90, 136, 202)' }}
                                onClick={handleChangeSearch}
                                className="h-[34px] px-[12px]"
                            >
                                <span>search</span>
                            </button>
                        </div>
                    </div>

                    <nav
                        style={{ padding: '0 15px' }}
                        className="flex-row justify-between items-center w-full hidden md:flex"
                    >
                        {HomeRoutesConfig.map((item) => (
                            <Link
                                scroll={true}
                                key={item.route}
                                className={`uppercase header-btn no-underline text-xl md:!text-[8px] lg:!text-[12px]  xl:!text-[14px] font-[700] !px-[15px] lg:!px-[18px] ${
                                    data.pathname.includes(item.route) ||
                                    (data.pathname.includes('/home') && item.default)
                                        ? 'header-btn-active'
                                        : ''
                                } ${item.route === '/contact' ? 'btn-contact' : ''}`}
                                to={`${item.route}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    {/* <div class="btn-group !absolute right-[30px] top-[30px] !flex md:!hidden">
                        <button
                            type="button"
                            className="border-[1px] border-solid border-white p-[12px]"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <img src={threebar} className="!w-[14px] !h-[14px] bg-[red]" alt=""></img>
                        </button>
                    </div>
                    <div className="absolute top-[90px] w-full px-[20px] right-0 z-10 !flex md:!hidden">
                        <div
                            class="dropdown-menu pull-right"
                            role="menu"
                            className={`w-full flex flex-col bg-white text-black ${showMenu ? 'flex' : 'hidden'}`}
                        >
                            {HomeRoutesConfig.map((item) => (
                                <Link
                                    scroll={true}
                                    key={item.route}
                                    onClick={() => setShowMenu(!showMenu)}
                                    className="text-black no-underline  w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]"
                                    to={`${item.route}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div> */}
                </div>
                <div
                    style={{
                        width: '100%',
                        // height: '109px',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        alignItems: 'center',
                    }}
                    className="!hidden md:!flex h-fit"
                >
                    <div
                        class="input-group mb-3 home-search"
                        style={{ width: '460px' }}
                        className={`${show === 3 ? '!hidden' : '!flex !py-[20px]'}`}
                    >
                        <input
                            type="text"
                            class="form-control"
                            placeholder="search here"
                            aria-label="search here"
                            aria-describedby="button-addon2"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            class="btn btn-outline-secondary text-white"
                            type="button"
                            id="button-addon2"
                            style={{ backgroundColor: 'rgb(90, 136, 202)' }}
                            onClick={handleChangeSearch}
                        >
                            <span>search</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
