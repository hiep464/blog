import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from "../acess/svg/home.svg";

import item1 from '../acess/item1.jpg';
import { Link } from 'react-router-dom';

function Category() {

    let location = useLocation();
    const [title, setTitle] = useState("CHUYỆN CHỒNG NGOẠI TÌNH")
    const [keySearch, setKeySearch] = useState("")

    const [numPage, setNumPage] = useState(1)
    const maxLenth = useRef(4)

    const handleChangePage = (num) => {
        if (num && num !== "-" && num !== "+") {
            setNumPage(num)
        } else {
            if (num === "-") {
                setNumPage(numPage !== 1 ? (parseInt(numPage) - 1) : numPage)
            } else {
                setNumPage(numPage < maxLenth.current ? (parseInt(numPage) + 1) : numPage)
            }

        }
    }
    useEffect(() => {
        if (location.pathname.includes("husband")) {
            setTitle("CHUYỆN CHỒNG NGOẠI TÌNH")
        } else if (location.pathname.includes("wife")) {
            setTitle("CHUYỆN VỢ NGOẠI TÌNH")
        }
        else if (location.pathname.includes("love")) {
            setTitle("TẢN MẠN TÌNH YÊU")
        }
        else if (location.pathname.includes("new")) {
            setTitle("CHUYỆN NGOẠI TÌNH MỚI")
        }
        else if (location.pathname.includes("outstanding")) {
            setTitle("CHUYỆN NGOẠI TÌNH NỔI BẬT")
        }

        const parts = decodeURI(location.pathname).split('/');
        setKeySearch("")
        if (parts[2] && parts[2] !== "husband" && parts[2] !== "wife" && parts[2] !== "love") {
            setKeySearch(parts[2])
            setTitle("Search Results")
        }
    }, [location])



    return (
        <main className='bg-white'>
            <div className="flex flex-col justify-centera items-center">
                <div className='max-w-[1200px] w-full px-[20px] md:px-0'>
                    <div className='w-full'>
                        <div className='w-full mt-[10px] border-[1px] border-solid border-[#eaeaea] flex flex-row justify-start items-center'>
                            <Link className='p-[10px]' to="/">
                                <img src={Home} alt='' className='w-[15px] h-[15px]'></img>
                            </Link>
                            <div></div>
                            <Link to={location.pathname} className='text-black no-underline'>
                                <div className='text-[12px] font-[400] cursor-pointer uppercase'>{title}</div>
                            </Link>
                        </div>
                        <div className='flex flex-col md:flex-row w-full'>
                            <div className={`${keySearch ? "w-full md:w-[25%]" : "hidden"} w-[25%] mt-[30px] mr-[30px] h-fit`}>
                                <div className=' border-[1px] border-solid border-[#eaeaea]'>
                                    <div className='bg-[#fbfbfb] px-[20px] py-[15px] text-[14px] font-[600] uppercase border-b-[1px] border-solid border-[#eaeaea]' >Bài viết mới</div>
                                    <div className='p-[20px]'>
                                        <div className='py-[5px]'>6 điều em phải nhớ sau khi chia tay anh</div>
                                        <div className='py-[5px]'>Hôn nhân không như lúc yêu được đâu em à!</div>
                                        <div className='py-[5px]'>Đừng vì cô đơn rồi nắm tay một người!!</div>
                                        <div className='py-[5px]'>Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm</div>
                                        <div className='py-[5px]'>Nghẹn đắng tờ kết quả ADN, cái thai là con tôi nhưng tôi vẫn muốn ly hôn</div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-solid border-[#eaeaea] mt-[20px]'>
                                    <div className='bg-[#fbfbfb] px-[20px] py-[15px] text-[14px] font-[600] uppercase border-b-[1px] border-solid border-[#eaeaea]' >Phản hồi gần đây</div>
                                    <div className='p-[20px]'>
                                        <div className='py-[5px]'>6 điều em phải nhớ sau khi chia tay anh</div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-solid border-[#eaeaea] mt-[20px]'>
                                    <div className='bg-[#fbfbfb] px-[20px] py-[15px] text-[14px] font-[600] uppercase border-b-[1px] border-solid border-[#eaeaea]' >Chuyên mục</div>
                                    <div className='p-[20px] flex flex-col'>
                                        <Link className='py-[5px] text-[14px] font-[400] text-black no-underline' to='/category/husband'>CHUYỆN CHỒNG NGOẠI TÌNH</Link>
                                        <Link className='py-[5px] text-[14px] font-[400] text-black no-underline' to='/category/new'>CHUYỆN NGOẠI TÌNH MỚI</Link>
                                        <Link className='py-[5px] text-[14px] font-[400] text-black no-underline' to='/category/outstanding'>CHUYỆN NGOẠI TÌNH NỔI BẬT</Link>
                                        <Link className='py-[5px] text-[14px] font-[400] text-black no-underline' to='/category/wife'>CHUYỆN VỢ NGOẠI TÌNH</Link>
                                        <Link className='py-[5px] text-[14px] font-[400] text-black no-underline' to='/category/love'>TẢN MẠN TÌNH YÊU</Link>
                                    </div>
                                </div>

                            </div>
                            <div className={`${keySearch ? "ww-full md:w-[75%]" : "w-full"}`}>
                                <div className='py-[30px] text-[20px] md:text-[24px] font-[700] uppercase'>{keySearch ? `SEARCH RESULTS FOR: ${keySearch}` : `Chuyên mục: ${title}`}</div>
                                <div className='w-full'>
                                    <div className='w-full flex row-auto mb-[4%]'>
                                        <div className='overflow-hidden w-[30%] md:w-[20%] '>
                                            <img src={item1} alt='' className='hover:scale-110 transition-all duration-[300ms] w-full object-contain h-max  border-[4px] border-solid border-[#eaeaea]'></img>
                                        </div>
                                        <div className='w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]'>
                                            <div className='mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line'>Chồng ngoại tình nhưng lại trách vợ không đủ hiền đức, phản ứng của người vợ khiến nhiều người ngán ngẩm ngán ngẩm</div>
                                            <div className='text-[12px] md:text-[14px] font-[400] text-2-line'>
                                                Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay. Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay.
                                            </div>
                                            <Link to={"/detail/2"}>
                                                <button className='text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-black text-white'>
                                                    View more
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                    <div className='w-full flex row-auto mb-[4%]'>
                                        <img src={item1} alt='' className='w-[30%] md:w-[20%] object-contain h-max  border-[4px] border-solid border-[#eaeaea]'></img>
                                        <div className='w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]'>
                                            <div className='mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line'>Chồng ngoại tình nhưng lại trách vợ không đủ hiền đức, phản ứng của người vợ khiến nhiều người ngán ngẩm ngán ngẩm</div>
                                            <div className='text-[12px] md:text-[14px] font-[400] text-2-line'>
                                                Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay. Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay.
                                            </div>
                                            <button className='text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-black text-white'>View more</button>
                                        </div>
                                    </div>
                                    <div className='w-full flex row-auto mb-[4%]'>
                                        <img src={item1} alt='' className='w-[30%] md:w-[20%] object-contain h-max  border-[4px] border-solid border-[#eaeaea]'></img>
                                        <div className='w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]'>
                                            <div className='mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line'>Chồng ngoại tình nhưng lại trách vợ không đủ hiền đức, phản ứng của người vợ khiến nhiều người ngán ngẩm ngán ngẩm</div>
                                            <div className='text-[12px] md:text-[14px] font-[400] text-2-line'>
                                                Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay. Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay.
                                            </div>
                                            <button className='text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-black text-white'>View more</button>
                                        </div>
                                    </div>
                                    <div className='w-full flex row-auto mb-[4%]'>
                                        <img src={item1} alt='' className='w-[30%] md:w-[20%] object-contain h-max  border-[4px] border-solid border-[#eaeaea]'></img>
                                        <div className='w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]'>
                                            <div className='mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line'>Chồng ngoại tình nhưng lại trách vợ không đủ hiền đức, phản ứng của người vợ khiến nhiều người ngán ngẩm ngán ngẩm</div>
                                            <div className='text-[12px] md:text-[14px] font-[400] text-2-line'>
                                                Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay. Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay.
                                            </div>
                                            <button className='text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-black text-white'>View more</button>
                                        </div>
                                    </div>
                                    <div className='w-full flex row-auto mb-[4%]'>
                                        <img src={item1} alt='' className='w-[30%] md:w-[20%] object-contain h-max  border-[4px] border-solid border-[#eaeaea]'></img>
                                        <div className='w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]'>
                                            <div className='mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line'>Chồng ngoại tình nhưng lại trách vợ không đủ hiền đức, phản ứng của người vợ khiến nhiều người ngán ngẩm ngán ngẩm</div>
                                            <div className='text-[12px] md:text-[14px] font-[400] text-2-line'>
                                                Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay. Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay.
                                            </div>
                                            <button className='text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-black text-white'>View more</button>
                                        </div>
                                    </div>
                                    <div className='w-full flex row-auto mb-[4%]'>
                                        <img src={item1} alt='' className='w-[30%] md:w-[20%] object-contain h-max  border-[4px] border-solid border-[#eaeaea]'></img>
                                        <div className='w-[70%] md:w-[80%] flex flex-col justify-start items-start ml-[20px]'>
                                            <div className='mb-[3px] text-[14px] md:text-[18px] font-[600] text-2-line'>Chồng ngoại tình nhưng lại trách vợ không đủ hiền đức, phản ứng của người vợ khiến nhiều người ngán ngẩm ngán ngẩm</div>
                                            <div className='text-[12px] md:text-[14px] font-[400] text-2-line'>
                                                Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay. Nhiều người nói, muốn biết đàn ông thật lòng đến đâu hãy đợi cho đến khi anh ta có mọi thứ trong tay, vì nhiều người đàn ông dễ thay lòng lúc giàu sang.  Tiểu Hứa và vợ là Tiểu Lưu (sống ở Trung Quốc) bên nhau khi cả hai không có gì trong tay.
                                            </div>
                                            <button className='text-[10px] md:text-[16px] mt-[10px] md:mt-[22px] px-[5px] md:px-[15px] py-[5px] md:py-[10px] bg-black text-white'>View more</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full ui-sortable-handle cursor-move flex justify-end items-end">
                                    <div class="box-tools pull-right">
                                        <ul class="pagination pagination-sm inline text-[12px]">
                                            <li><Link to="#" className='py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-black hover:text-white' onClick={() => handleChangePage('-')}>«</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-black hover:text-white ${numPage === 1 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(1)}
                                            >1</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-black hover:text-white ${numPage === 2 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(2)}
                                            >2</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-black hover:text-white ${numPage === 3 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(3)}
                                            >3</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-black hover:text-white ${numPage === 4 ? "btn-active-page" : ""}`}
                                                onClick={() => handleChangePage(4)}
                                            >4</Link></li>
                                            <li><Link to="#" className={`py-[5px] px-[10px] border-[1px] border-solid border-[#ddd] text-[black] no-underline flex justify-center items-center hover:bg-black hover:text-white`} onClick={() => handleChangePage('+')}>»</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Category;