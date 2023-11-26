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
            default: true
        },
        {
            label: 'Chuyện chồng ngoại tình',
            route: '/category/husband',
        },
        {
            label: 'Chuyện vợ ngoại tình',
            route: '/category/wife',
        },
        {
            label: 'Tản mạn tình yêu',
            route: '/category/love',
        },
        {
            label: 'Liên hệ',
            route: '/contact',
        },
    ]

    const [search, setSearch] = useState("")
    const [showMenu, setShowMenu] = useState(false)  //show menu mobile
    const [show, setShow] = useState(1); //show header when scroll

    let data = useLocation();
    const navigate = useNavigate()

    const handleChangeSearch = () => {
        if (!search) {
            navigate(`/home`)
        } else {
            navigate(`/category/${search}`)
        }
    }



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && window.scrollY < 500 && show !== 2) {
                setShow(2);
            } else if (window.scrollY >= 500 && show !== 3) {
                setShow(3);
            }
            else {
                setShow(1);
                if (show !== 1) {
                    setShow(1);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <header
            style={{
                backgroundColor: '#001219',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            className={`home-header ${show === 1 ? "home-header" : (show === 3 ? "home-header--show" : "home-header--hidden")} z-50`}
        >
            <div style={{ display: 'flex', alignItems: 'center' }} className='xl:w-[1200px] relative w-full md:h-[100px] justify-center'>
                <div className='flex flex-col justify-center items-center !w-full md:!w-auto px-[20px]  md:pr-0'>
                    <div
                        style={{
                            margin: '0 15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        className='w-[100px] xl:w-[170px]'
                    >
                        <img style={{ height: '100px', width: '100px' }} src={logo} alt="#" />
                    </div>
                    <div class="input-group" className='flex md:hidden w-full mb-[30px]'>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="search here"
                            aria-label="search here"
                            aria-describedby="button-addon2"
                            onChange={(e) => setSearch(e.target.value)}
                            className='h-[34px] p-[12px] w-full'
                        />
                        <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" style={{ backgroundColor: 'rgb(90, 136, 202)' }}
                            onClick={handleChangeSearch} className='h-[34px] px-[12px]'
                        >
                            <span>search</span>
                        </button>
                    </div>
                </div>

                <nav style={{ padding: '0 15px' }} className='flex-row justify-between items-center w-full hidden md:flex'>
                    {HomeRoutesConfig.map(item => (
                        <Link scroll={true} key={item.route} className={`uppercase header-btn no-underline text-xl md:!text-[8px] lg:!text-[12px]  xl:!text-[14px] font-[700] !px-[15px] lg:!px-[18px] ${data.pathname.includes(item.route) || (data.pathname.includes("/home") && item.default) ? 'header-btn-active' : ''}`} to={`${item.route}`}>{item.label}
                        </Link>
                    ))}
                </nav>
                <div class="btn-group !absolute right-[30px] top-[30px] !flex md:!hidden">
                    <button type="button" className='border-[1px] border-solid border-white p-[12px]' onClick={() => setShowMenu(!showMenu)}>
                        <img src={threebar} className='!w-[14px] !h-[14px]' alt=''></img>
                    </button>

                </div>
                <div className='absolute top-[90px] w-full px-[20px] right-0 z-10 !flex md:!hidden'>
                    <div class="dropdown-menu pull-right" role="menu" className={`w-full flex flex-col bg-white text-black ${showMenu ? "flex" : 'hidden'}`}>
                        <Link onClick={() => setShowMenu(!showMenu)} to={'/home'} className='text-black no-underline w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]'>HOME</Link>
                        <Link onClick={() => setShowMenu(!showMenu)} to={'/category/husband'} className='text-black no-underline  w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]'>Chuyện chồng ngoại tình</Link>
                        <Link onClick={() => setShowMenu(!showMenu)} to={'/category/wife'} className='text-black no-underline  w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]'>Chuyện vợ ngoại tình</Link>
                        <Link onClick={() => setShowMenu(!showMenu)} to={'/category/love'} className='text-black no-underline  w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]'>Tản mạn tình yêu</Link>
                        <Link onClick={() => setShowMenu(!showMenu)} to={'/contact'} className='text-black no-underline  w-full px-[15px] py-[8px] border-b-[1px] border-solid border-[#e5e5e5] uppercase text-[14px]'>Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    // height: '109px',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    alignItems: 'center',
                }}
                className='!hidden md:!flex h-fit'
            >
                <div class="input-group mb-3" style={{ width: '460px' }} className={`${show === 3 ? "!hidden" : "!flex !py-[20px]"}`}>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="search here"
                        aria-label="search here"
                        aria-describedby="button-addon2"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" style={{ backgroundColor: 'rgb(90, 136, 202)' }}
                        onClick={handleChangeSearch}
                    >
                        <span>search</span>
                    </button>
                </div>
            </div>
        </header >
    );
}

export default Header;
