// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.scss';
import tiktok from '../../acess/tiktok.webp';
import facebook from '../../acess/fb.png';
import youtube from '../../acess/ytb.png';
import zalo from '../../acess/zalo.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { baseApi } from '../../constant';
import axios from 'axios';

function Footer() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('phone', phone);
        formDataToSend.append('email', email);
        axios.post(`${baseApi}/register`, formDataToSend).then(() => {
            setShow(true);
            setName('');
            setPhone('');
            setEmail('');
        });
    };
    return (
        <footer
            // style={{ backgroundColor: '#0966FF', borderTop: '3px solid #84cf3f' }}
            style={{ backgroundColor: '#1877F2' }}
            className="flex justify-center items-center"
        >
            <div
                class="container text-left"
                style={{ maxHeight: '1200px', paddingBottom: '30px' }}
                className="w-full max-w-[1200px]"
            >
                <div
                    class="row text-white"
                    style={{ padding: '24px 0 10px', borderBottom: '1px dashed white' }}
                    className="flex-col md:flex-row text-white !grid  grid-cols-1 md:grid-cols-3"
                >
                    <div className="px-[15px]">
                        <div class="card-body float-right">
                            <div className="text-[16px] font-[700]" style={{ textTransform: 'uppercase' }}>
                                Thông tin liên hệ
                            </div>
                            <hr />
                            <div className="" style={{ fontSize: '14px', fontWeight: '400' }}>
                                <div
                                    style={{
                                        marginBottom: '20px',
                                        marginTop: '20px',
                                        fontSize: '14px',
                                        fontWeight: '700',
                                    }}
                                >
                                    <strong>Tư vấn</strong>
                                </div>
                                <div style={{ marginBottom: '20px' }}>Email: srsgogakukyositsu@gmail.com</div>
                                <div style={{ lineHeight: '150%' }}>
                                    Luôn đồng hành cùng bạn trong hành trình thấu hiểu bản thân định vị cuộc đời
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="px-[15px]">
                        <div class="card-body">
                            <div className="text-[16px] font-[700]" style={{ textTransform: 'uppercase' }}>
                                KẾT NỐI VỚI CHÚNG TÔI
                            </div>
                            <hr />
                            <div class="card-text flex w-full">
                                <div class="w-[36%]">
                                    <div
                                        style={{
                                            marginBottom: '20px',
                                            marginTop: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            style={{ width: '24px', height: '24px', marginRight: '4px' }}
                                            src={facebook}
                                            alt=""
                                        />
                                        <a
                                            style={{ textDecoration: 'none', color: 'white' }}
                                            href="https://www.facebook.com/dao.vanthu.58"
                                        >
                                            Facebook
                                        </a>
                                    </div>
                                    <div style={{ marginBottom: '20px', display: 'flex' }}>
                                        <img
                                            style={{ width: '24px', height: '24px', marginRight: '4px' }}
                                            src={tiktok}
                                            alt=""
                                        />
                                        <a
                                            style={{ textDecoration: 'none', color: 'white' }}
                                            href="https://www.tiktok.com/@kakojp?_t=8hi8KUNcgGA&_r=1"
                                        >
                                            Tik tok
                                        </a>
                                    </div>
                                    <div style={{ marginBottom: '20px', display: 'flex' }}>
                                        <img
                                            style={{ width: '24px', height: '24px', marginRight: '4px' }}
                                            src={youtube}
                                            alt=""
                                        />
                                        <a
                                            style={{ textDecoration: 'none', color: 'white' }}
                                            href="https://www.tiktok.com/@kakojp?_t=8hi8KUNcgGA&_r=1"
                                        >
                                            Youtube
                                        </a>
                                    </div>
                                </div>
                                <div class="w-[64%] flex items-center justify-center">
                                    <img src={zalo} alt="" style={{ width: '120px', height: '120px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-[15px]">
                        <div class="card-body">
                            <div className="text-[16px] font-[700]" style={{ textTransform: 'uppercase' }}>
                                ĐĂNG KÝ TƯ VẤN
                            </div>
                            <hr />
                            <p class="card-text">
                                <form onSubmit={handleShow}>
                                {/* <form> */}
                                    <input
                                        required
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        type="text"
                                        class="form-control"
                                        placeholder="Họ và tên"
                                        style={{ marginBottom: '10px' }}
                                    />
                                    <input
                                        required
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        type="text"
                                        class="form-control"
                                        placeholder="Số điện thoại"
                                        style={{ marginBottom: '10px' }}
                                    />
                                    <input
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="text"
                                        class="form-control"
                                        placeholder="Email"
                                        style={{ marginBottom: '10px' }}
                                    />
                                    <button
                                        // onClick={handleShow}
                                        class="btn"
                                        type="submit"
                                        className="text-white bg-[#BF211A] uppercase px-[10px] py-[10px] my-[10px]"
                                    >
                                        Đăng ký
                                    </button>
                                </form>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">送信完了</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{ textAlign: 'center' }}>Đăng ký thành công</h4>
                    <p style={{ textAlign: 'center' }}>Cảm ơn bạn đã đăng ký, KAKOJP sẽ sớm phản hồi!</p>
                    <p style={{ textAlign: 'center' }}>
                        この度はお問い合わせいただきまして誠にありがとうございます。
                        内容を確認次第、担当者より折返しご連絡させていただきます。今しばらくお待ちくださいませ。
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Đóng</Button>
                </Modal.Footer>
            </Modal>
        </footer>
    );
}

export default Footer;
