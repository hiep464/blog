import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../acess/svg/home.svg';
import { Link } from 'react-router-dom';
import zalo from '../acess/zalo.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { baseApi } from '../constant';
import axios from 'axios';

function Contact() {
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
        });
    };

    let location = useLocation();

    return (
        <main className="bg-white">
            <div className="flex flex-col justify-centera items-center">
                <div className="max-w-[1200px] w-full px-[20px] md:px-[20px]">
                    <div className="w-full">
                        <div className="w-full mt-[10px] border-[1px] border-solid border-[#eaeaea] flex flex-row justify-start items-center">
                            <Link className="p-[10px]" to="/">
                                <img src={Home} alt="" className="w-[15px] h-[15px]"></img>
                            </Link>
                            <div></div>
                            <Link to={location.pathname} className="text-black no-underline">
                                <div className="text-[12px] font-[400] cursor-pointer uppercase">LIÊN HỆ</div>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row w-full">
                            <div className="w-full">
                                <div className="py-[20px] text-[20px] md:text-[24px] font-[700] uppercase">LIÊN HỆ</div>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="w-full mr-[20px]">
                                        <p class="card-text">
                                            <form onSubmit={handleShow}>
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
                                                    class="btn"
                                                    type="submit"
                                                    className="text-white bg-[#BF211A] uppercase px-[10px] py-[10px] my-[10px]"
                                                >
                                                    Đăng ký
                                                </button>
                                            </form>
                                        </p>
                                    </div>
                                    <div className="w-full py-[30px] md:py-0 mb-[20px]">
                                        <div className="text-[16px] font-[700] mb-[10px]">Tư vấn</div>
                                        <div className="text-[14px]  mb-[10px]">Email: srsgogakukyositsu@gmail.com</div>
                                        <div className="text-[14px] mb-[10px]">
                                            Chủ đề: life coach , chia sẻ cách xem chỉ tay , phong thuỷ theo trường phái
                                            Nhật Bản, Giáo dục tiếng Nhật, phiên dịch dịch thuật tiếng Nhật , Việt
                                        </div>
                                        <img style={{ width: '200px', height: '200px' }} src={zalo} alt="qr" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Đăng ký thành công</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}
                    <h4>Cảm ơn bạn đã đăng ký, KAKOJP sẽ sớm phản hồi</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Đóng</Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
}

export default Contact;
