import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {

    let location = useLocation();

    useEffect(() => {
        const parts = location.pathname.split('/');
        if (parts[2] && parts[2] !== "life_coach" && parts[2] !== "pointing_hand" && parts[2] !== "education" && parts[2] !== "translate") {
        }
    }, [location])


    return (
        <main className='bg-white'>
            <div className="flex flex-col justify-centera items-center">
                <div className='max-w-[1200px] w-full px-[20px] md:px-0'>
                    <div className='w-full'>
                        <div className='text-[24px] font-[700] mt-[30px]'>CHỒNG ĐƯA NGƯỜI TÌNH VỀ NHÀ, VỢ BẮT ĐƯỢC TẠI TRẬN VÀ CÁI KẾT SAU 10 NĂM</div>
                        <i class="fa fa-gg-circle" aria-hidden="true"></i>
                        <div>chi tiết</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Detail;