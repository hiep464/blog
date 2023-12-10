import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseApi } from '../constant';

function Detail() {
    const [content, setContent] = useState(null);
    let location = useLocation();

    useEffect(() => {
        axios
            .get(`${baseApi}/blog/1`)
            .then((res) => {
                // Tìm và thay thế mọi thuộc tính src trong các thẻ img
                const modifiedContent = res.data.content.replace(
                    /(<img[^>]+src\s*=\s*['"])([^'"]+)(['"][^>]*>)/g,
                    (match, prefix, src, suffix) => {
                        // Thêm baseapi vào src
                        const newSrc = `${prefix}https://kakojp.jp${src}${suffix}`;
                        return newSrc;
                    },
                );
                console.log(modifiedContent)
                setContent(modifiedContent);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const parts = location.pathname.split('/');
        if (
            parts[2] &&
            parts[2] !== 'life_coach' &&
            parts[2] !== 'pointing_hand' &&
            parts[2] !== 'education' &&
            parts[2] !== 'translate'
        ) {
        }
    }, [location]);

    return (
        <main className="bg-white">
            <div className="flex flex-col justify-centera items-center">
                <div className="max-w-[1200px] w-full px-[20px] md:px-0">
                    <div className="w-full">
                        <div className="text-[24px] font-[700] mt-[30px]">
                            CHỒNG ĐƯA NGƯỜI TÌNH VỀ NHÀ, VỢ BẮT ĐƯỢC TẠI TRẬN VÀ CÁI KẾT SAU 10 NĂM
                        </div>
                        <i class="fa fa-gg-circle" aria-hidden="true"></i>
                        {/* <div>{content}</div> */}
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Detail;
