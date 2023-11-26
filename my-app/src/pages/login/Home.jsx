import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import item1 from '../../acess/item1.jpg';
import item2 from '../../acess/item2.jpg';
import item3 from '../../acess/item3.jpg';

import section31 from '../../acess/section31.jpg';
import section32 from '../../acess/section32.jpg';
import { Link } from 'react-router-dom';
import '../../styles/global.scss';

function Home() {

    return (
        <main className='bg-black'>
            <div className="flex flex-col justify-centera items-center">
                <div className='item1 mb-[10px] xl:mb-[20px] max-w-[1200px] px-[20px] md:px-[30px]  xl:px-0'>
                    <div className='text-[24px] text-[#99cc00] font-[700] mb-[15px] mt-[10px] md:mt-0'>CHUYỆN NGOẠI TÌNH MỚI</div>
                    <div class="row !grid sm:grid-cols-1 md:grid-cols-3  mb-[15px]">
                        <div class="w-full">
                            <Link to="/detail/1" class="card bg-black">
                                <div className='md:h-[215px] overflow-hidden'>
                                    <img className='hover:scale-110 transition-all duration-[300ms] w-full h-full object-cover' src={item1} alt="..." />
                                </div>
                                <div class="card-body py-[10px] px-[10px]">
                                    <p class="card-text text-[17px] font-[500] text-white">
                                        Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                        trời
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full">
                            <div class="card bg-black">
                                <div className='md:h-[215px] overflow-hidden'>
                                    <img className='hover:scale-110 transition-all duration-[300ms] w-full h-full object-cover' src={item2} alt="..." />
                                </div>
                                <div class="card-body py-[10px] px-[10px]">
                                    <p class="card-text text-[17px] font-[500] text-white">
                                        Chồng đưa người tình về nhà, vợ bắt được tại trận và cái kết sau 10 năm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="card bg-black">
                                <div className='md:h-[215px] overflow-hidden'>
                                    <img className='hover:scale-110 transition-all duration-[300ms] w-full h-full object-cover' src={item3} alt="..." />
                                </div>
                                <div class="card-body py-[10px] px-[10px]">
                                    <p class="card-text text-[17px] font-[500] text-white">
                                        10 năm tay trắng cùng khởi nghiệp, chồng dắt nhân tình về sau 4 tháng cưới
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="w-full h-[0.5px] bg-white"></div> */}
                <div className='item1 pt-[2%] pb-[2.5%] bg-[#121020] w-full flex justify-center items-center'>
                    <div className='max-w-[1200px] px-[20px] md:px-[30px]'>
                        <div className='text-[24px] text-[#99cc00] font-[700] mb-[15px]'> CHUYỆN NGOẠI TÌNH NỔI BẬT</div>
                        <div class="row align-items-start !grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <div class="w-full">
                                <div class="card !bg-[#121020] !text-[white]">
                                    <div className='md:h-[186px]  overflow-hidden'>
                                        <img src={item1} className="hover:scale-110 transition-all duration-[300ms] w-full h-[186px] object-cover" alt="..." />
                                    </div>
                                    <div class="px-[10px] py-[10px]">
                                        <p class="card-text text-[13px] xl:text-[15px] font-[500] text-center leading-[100%]">
                                            Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="card !bg-[#121020] !text-[white]">
                                    <div className='md:h-[186px]  overflow-hidden'>
                                        <img src={item2} className="hover:scale-110 transition-all duration-[300ms] w-full h-[186px] object-cover" alt="..." />
                                    </div>
                                    <div class="px-[10px] py-[10px]">
                                        <p class="card-text text-[13px] xl:text-[15px] font-[500] text-center leading-[100%]">
                                            Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="card !bg-[#121020] !text-[white]">
                                    <img src={item3} class="h-[186px] object-cover" alt="..." />
                                    <div class="px-[10px] py-[10px]">
                                        <p class="card-text text-[13px] xl:text-[15px] font-[500] text-center leading-[100%]">
                                            Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="card !bg-[#121020] !text-[white]">
                                    <img src={item3} class="h-[186px] object-cover" alt="..." />
                                    <div class="px-[10px] py-[10px]">
                                        <p class="card-text text-[13px] xl:text-[15px] font-[500] text-center leading-[100%]">
                                            Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="card !bg-[#121020] !text-[white]">
                                    <img src={item3} class="h-[186px] object-cover" alt="..." />
                                    <div class="px-[10px] py-[10px]">
                                        <p class="card-text text-[13px] xl:text-[15px] font-[500] text-center leading-[100%]">
                                            Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="card !bg-[#121020] !text-[white]">
                                    <img src={item3} class="h-[186px] object-cover" alt="..." />
                                    <div class="px-[10px] py-[10px]">
                                        <p class="card-text text-[13px] xl:text-[15px] font-[500] text-center leading-[100%]">
                                            Biết mình là “người thứ 3”, người phụ nữ vẫn lần lữa kéo dài cuộc tình tới 5 năm, lý do khiến ai nấy thương cảm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div class="w-full h-[0.5px] bg-white"></div> */}
                <div className='flex flex-col md:flex-row justify-center items-start w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[30px] mb-[40px]'>
                    <div className='w-full md:w-[66%] md:mr-[25px]'>
                        <div className='md:pb-[25px]'>
                            <div className='text-[white] text-[24px] font-[400] pb-[30px]'>CHUYỆN VỢ NGOẠI TÌNH</div>
                            <div className='w-full flex-row justify-between items-start hidden md:flex'>
                                <div className='overflow-hidden w-[50%]'>
                                    <img src={section31} className="hover:scale-110 transition-all duration-[300ms] w-full object-cover" alt="..." />
                                </div>
                                <div className='w-[50%] text-white ml-[10px] mt-[10px]'>
                                    <div className='text-[14px] font-[400] italic'> 27 Tháng Tư, 2023</div>
                                    <div className='text-[17px] font-[500] py-[10px]'>Điều kì diệu của một cặp đôi suýt ly hôn vì “cơn say nắng” của vợ với đồng nghiệp</div>
                                    <div className='text-[14px] text-[#c6c6c6] font-[400] text-5-line '>“Làn gió lạ” chốn công sở Đó là vào khoảng năm 2003, khi tôi 28 tuổi và có mặt ở New York để tiếp xúc với đại diện các chi nhánh của công ty tôi. Lần đầu Andreas xuất hiện ở sảnh khách sạn để đón tôi tới văn phòng, tôi đã cảm thấy anh</div>
                                </div>
                            </div>
                        </div>
                        <div className='!grid grid-cols-1 md:grid-cols-3 row'>
                            <div className='w-full h-fit md:h-auto'>
                                <div className='overflow-hidden'>
                                    <img src={section31} className="hover:scale-110 transition-all duration-[300ms] w-full object-cover" alt="..." />
                                </div>
                                <div class="card-text text-[15px] font-[500] text-white leading-[100%] text-center px-[10] py-[20px] md:py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                            <div className='w-full  h-fit md:h-auto'>
                                <img className='w-full' src={section31} alt="..." />
                                <div class="card-text text-[15px] font-[500] text-white leading-[100%] text-center px-[10] py-[20px] md:py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                            <div className='w-full  h-fit md:h-auto'>
                                <img className='w-full' src={section31} alt="..." />
                                <div class="card-text text-[15px] font-[500] text-white leading-[100%] text-center px-[10] py-[20px] md:py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[33%] md:px-[30px]'>
                        <img className='w-full' src={section32} alt=''></img>
                    </div>
                </div>

                {/* <div class="w-full h-[0.5px] bg-white"></div> */}
                <div className='flex flex-col md:flex-row justify-center items-start w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[30px] md:mb-[40px]'>
                    <div className='w-full md:w-[66%] md:mr-[25px] flex justify-center items-center flex-col'>
                        <div className='md:pb-[40px]'>
                            <div className='text-[white] text-[24px] font-[400] pb-[20px]'>CHUYỆN CHỒNG NGOẠI TÌNH</div>
                            <div className='flex flex-col md:flex-row'>
                                <div className='w-full flex flex-col justify-center items-center mb-[40px] md:mb-0 md:mr-[3%]'>
                                    <div className='overflow-hidden '>
                                        <img src={section31} className="hover:scale-110 transition-all duration-[300ms] w-full object-cover" alt="..." />
                                    </div>
                                    <div className='text-white ml-[10px] mt-[5px]'>
                                        <div className='text-[17px] font-[500] py-[10px] text-center'>Điều kì diệu của một cặp đôi suýt ly hôn vì “cơn say nắng” của vợ với đồng nghiệp</div>
                                        <div className='text-[14px] text-[#c6c6c6] font-[400] text-5-line'>“Làn gió lạ” chốn công sở Đó là vào khoảng năm 2003, khi tôi 28 tuổi và có mặt ở New York để tiếp xúc với đại diện các chi nhánh của công ty tôi. Lần đầu Andreas xuất hiện ở sảnh khách sạn để đón tôi tới văn phòng, tôi đã cảm thấy anh</div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-center items-center mb-[40px] md:mb-0 md:mr-[3%]'>
                                    <img className='' src={section31} alt=''></img>
                                    <div className='text-white ml-[10px] mt-[5px]'>
                                        <div className='text-[17px] font-[500] py-[10px] text-center'>Điều kì diệu của một cặp đôi suýt ly hôn vì “cơn say nắng” của vợ với đồng nghiệp</div>
                                        <div className='text-[14px] text-[#c6c6c6] font-[400] text-5-line'>“Làn gió lạ” chốn công sở Đó là vào khoảng năm 2003, khi tôi 28 tuổi và có mặt ở New York để tiếp xúc với đại diện các chi nhánh của công ty tôi. Lần đầu Andreas xuất hiện ở sảnh khách sạn để đón tôi tới văn phòng, tôi đã cảm thấy anh</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='!grid grid-cols-1 md:grid-cols-2 row w-full'>
                            <div className='flex flex-row justify-center items-center pb-[20px]'>
                                <div className='overflow-hidden w-[50%]'>
                                    <img src={section31} className="hover:scale-110 transition-all duration-[300ms] w-full object-cover" alt="..." />
                                </div>
                                {/* <img className='w-[50%]' src={section31} alt="..." /> */}
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500] text-white leading-[150%] text-left px-[10] py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center pb-[20px]'>
                                <img className='w-[50%]' src={item1} alt="..." />
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500] text-white leading-[150%] text-left px-[10] py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center pb-[20px]'>
                                <img className='w-[50%]' src={item2} alt="..." />
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500] text-white leading-[150%] text-left px-[10] py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center pb-[20px]'>
                                <img className='w-[50%]' src={item3} alt="..." />
                                <div class="pl-[10px] w-[50%] card-text text-[15px] font-[500] text-white leading-[150%] text-left px-[10] py-[10px]">
                                    Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                    trời
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[33%] md:px-0'>
                        <div className='text-[white] text-[24px] font-[400]'>XEM NHIỀU</div>
                        <div class="w-full h-[2px] bg-[#AEFE9D] my-[20px]" ></div>
                        <div>
                            <div className='flex flex-row justify-center items-start mb-[15px]'>
                                <div className='overflow-hidden w-[33%]'>
                                    <img src={section31} className="hover:scale-110 transition-all duration-[300ms] w-full object-cover border-[3px] border-solid border-[white]" alt="..." />
                                </div>
                                <div className='pl-[10px] w-[66%]'>
                                    <div class="text-[#E5F113]  card-text text-[14px] font-[400] leading-[120%] text-left">
                                        6 điều em phải nhớ sau khi chia tay anh
                                    </div>
                                    <div className='mt-[5px] text-[#333333]  card-text text-[14px] font-[400] leading-[140%] text-left'>
                                        "Anh biết chuyện chia tay này vốn chẳng ai mong, vì em và anh đã yêu người kia bằng tất cả những"
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-row justify-center items-start mb-[15px]'>
                                <img className='w-[33%] border-[3px] border-solid border-[white]' src={item1} alt="..." />
                                <div className='pl-[10px] w-[66%]'>
                                    <div class="text-[#E5F113]  card-text text-[14px] font-[400] leading-[120%] text-left">
                                        Hôn nhân không như lúc yêu được đâu em à!
                                    </div>
                                    <div className='mt-[5px] text-[#333333]  card-text text-[14px] font-[400] leading-[140%] text-left'>
                                        "Em đừng kì vọng quá vào hôn nhân, anh xin nói với em một điều như vậy. Yêu không như lúc cưới"
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-row justify-center items-start mb-[15px]'>
                                <img className='w-[33%] border-[3px] border-solid border-[white]' src={item2} alt="..." />
                                <div className='pl-[10px] w-[66%]'>
                                    <div class="text-[#E5F113]  card-text text-[14px] font-[400] leading-[120%] text-left">
                                        6 điều em phải nhớ sau khi chia tay anh
                                    </div>
                                    <div className='mt-[5px] text-[#333333]  card-text text-[14px] font-[400] leading-[140%] text-left'>
                                        "Anh biết chuyện chia tay này vốn chẳng ai mong, vì em và anh đã yêu người kia bằng tất cả những"
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-row justify-center items-start mb-[15px]'>
                                <img className='w-[33%] border-[3px] border-solid border-[white]' src={item3} alt="..." />
                                <div className='pl-[10px] w-[66%]'>
                                    <div class="text-[#E5F113]  card-text text-[14px] font-[400] leading-[120%] text-left">
                                        6 điều em phải nhớ sau khi chia tay anh
                                    </div>
                                    <div className='mt-[5px] text-[#333333] card-text text-[14px] font-[400] leading-[140%] text-left'>
                                        "Anh biết chuyện chia tay này vốn chẳng ai mong, vì em và anh đã yêu người kia bằng tất cả những"
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-row justify-center items-start mb-[15px]'>
                                <img className='w-[33%] border-[3px] border-solid border-[white]' src={item2} alt="..." />
                                <div className='pl-[10px] w-[66%]'>
                                    <div class="text-[#E5F113]  card-text text-[14px] font-[400] leading-[120%] text-left">
                                        6 điều em phải nhớ sau khi chia tay anh
                                    </div>
                                    <div className='mt-[5px] text-[#333333]  card-text text-[14px] font-[400] leading-[140%] text-left'>
                                        "Anh biết chuyện chia tay này vốn chẳng ai mong, vì em và anh đã yêu người kia bằng tất cả những"
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-row justify-center items-start mb-[15px]'>
                                <img className='w-[33%] border-[3px] border-solid border-[white]' src={item3} alt="..." />
                                <div className='pl-[10px] w-[66%]'>
                                    <div class="text-[#E5F113]  card-text text-[14px] font-[400] leading-[120%] text-left">
                                        6 điều em phải nhớ sau khi chia tay anh
                                    </div>
                                    <div className='mt-[5px] text-[#333333] card-text text-[14px] font-[400] leading-[140%] text-left'>
                                        "Anh biết chuyện chia tay này vốn chẳng ai mong, vì em và anh đã yêu người kia bằng tất cả những"
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='item1 pt-[30px] pb-[20px] md:pb-[40px] bg-[#121020] w-full flex justify-center items-center'>
                    <div className='max-w-[1200px] px-[20px] md:px-[30px] w-full'>
                        <div className='text-[24px] text-[#99cc00] font-[700] mb-[15px]'>VIDEO</div>
                        <div class="row align-items-start !grid grid-cols-1 md:grid-cols-4">
                            <div class="w-full pb-[10px] md:pb-0">
                                <iframe title="Những bức ảnh về tình yêu đẹp (Images about love nice)" width="640" height="360" src="https://www.youtube.com/embed/zoIHNh5O_xQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className='h-[225px] md:h-[150px] w-full'></iframe>
                            </div>
                            <div class="w-full pb-[10px] md:pb-0">
                                <iframe title="Cách để một mối tình đẹp không còn dang dở | ĐCNNTK #4" width="640" height="360" src="https://www.youtube.com/embed/6ZrQxrH_2YQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className='h-[225px] md:h-[150px] w-full'></iframe>
                            </div>
                            <div class="w-full pb-[10px] md:pb-0">
                                <iframe title="Top 5 Câu Chuyện Hay Về Tình Yêu Hôn Nhân Nên Dành Vài Phút Để Nghe" width="640" height="360" src="https://www.youtube.com/embed/JgJiLrNRxl8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className='h-[225px] md:h-[150px] w-full'></iframe>
                            </div>
                            <div class="w-full pb-[10px] md:pb-0">
                                <iframe title="Những câu nói hay về tình yêu và cuộc sống đáng để chúng ta phải suy ngẫm" width="640" height="480" src="https://www.youtube.com/embed/8bWfxdzSlNU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className='h-[225px] md:h-[150px] w-full'></iframe>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div class="w-full h-[0.5px] bg-white hidden md:block"></div> */}
                <div className='w-full max-w-[1200px] px-[20px] md:px-[30px] mt-[20px] md:mt-[50px] mb-[10px] md:mb-[50px]'>
                    <div className='text-[24px] text-[#99cc00] font-[700] mb-[20px] md:mb-[6px]'>TẢN MẠN TÌNH YÊU</div>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-full flex flex-col justify-center items-center pb-[30px] md:pb-0 md:mr-[3%]'>
                            <div className='overflow-hidden '>
                                <img src={item2} className="hover:scale-110 transition-all duration-[300ms] w-full object-cover" alt="..." />
                            </div>
                            <div className='text-white ml-[10px] mt-[5px]'>
                                <div className='text-[17px] font-[500] py-[10px] text-center'>Điều kì diệu của một cặp đôi suýt ly hôn vì “cơn say nắng” của vợ với đồng nghiệp</div>
                                <div className='text-[14px] text-[#c6c6c6] font-[400] text-5-line'>“Làn gió lạ” chốn công sở Đó là vào khoảng năm 2003, khi tôi 28 tuổi và có mặt ở New York để tiếp xúc với đại diện các chi nhánh của công ty tôi. Lần đầu Andreas xuất hiện ở sảnh khách sạn để đón tôi tới văn phòng, tôi đã cảm thấy anh</div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center pb-[30px] md:pb-0 md:mr-[3%]'>
                            <img className='' src={item1} alt=''></img>
                            <div className='text-white ml-[10px] mt-[5px]'>
                                <div className='text-[17px] font-[500] py-[10px] text-center'>Điều kì diệu của một cặp đôi suýt ly hôn vì “cơn say nắng” của vợ với đồng nghiệp</div>
                                <div className='text-[14px] text-[#c6c6c6] font-[400] text-5-line'>“Làn gió lạ” chốn công sở Đó là vào khoảng năm 2003, khi tôi 28 tuổi và có mặt ở New York để tiếp xúc với đại diện các chi nhánh của công ty tôi. Lần đầu Andreas xuất hiện ở sảnh khách sạn để đón tôi tới văn phòng, tôi đã cảm thấy anh</div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center pb-[30px] md:pb-0 md:mr-[3%]'>
                            <img className='' src={item3} alt=''></img>
                            <div className='text-white ml-[10px] mt-[5px]'>
                                <div className='text-[17px] font-[500] py-[10px] text-center'>Điều kì diệu của một cặp đôi suýt ly hôn vì “cơn say nắng” của vợ với đồng nghiệp</div>
                                <div className='text-[14px] text-[#c6c6c6] font-[400] text-5-line'>“Làn gió lạ” chốn công sở Đó là vào khoảng năm 2003, khi tôi 28 tuổi và có mặt ở New York để tiếp xúc với đại diện các chi nhánh của công ty tôi. Lần đầu Andreas xuất hiện ở sảnh khách sạn để đón tôi tới văn phòng, tôi đã cảm thấy anh</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Home;
