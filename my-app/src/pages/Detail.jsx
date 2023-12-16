import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseApi } from '../constant';

function Detail() {
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);
    let location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${baseApi}/blog/${id}`)
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
                setTitle(res.data.title)
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
                        <div className="text-[32px] text-[#0966FF] font-[700] mt-[30px]">
                            {title}
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
