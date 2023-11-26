import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {

    let location = useLocation();

    useEffect(() => {
        console.log("location", location);
        const parts = location.pathname.split('/');
        if (parts[2] && parts[2] !== "husband" && parts[2] !== "wife" && parts[2] !== "love") {
        }
    }, [location])


    return (
        <main className='bg-white'>
            <div className="flex flex-col justify-centera items-center">
                <div className='max-w-[1200px] w-full px-[20px] md:px-0'>
                    <div className='w-full'>
                        <div className='text-[24px] font-[700] mt-[30px]'>CHỒNG ĐƯA NGƯỜI TÌNH VỀ NHÀ, VỢ BẮT ĐƯỢC TẠI TRẬN VÀ CÁI KẾT SAU 10 NĂM</div>
                        <i class="fa fa-gg-circle" aria-hidden="true"></i>
                        <div>Ô ban con yena</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Detail;