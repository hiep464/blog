// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.scss';


function Footer() {
    return (
        <footer style={{ backgroundColor: '#002664', borderTop: '3px solid #84cf3f' }} className='flex justify-center items-center'>
            <div class="container text-left" style={{ maxHeight: '1200px', paddingBottom: '30px' }} className='w-full max-w-[1200px]'>
                <div class="row text-white" style={{ padding: '24px 0 10px', borderBottom: '1px dashed white' }} className='flex-col md:flex-row text-white !grid  grid-cols-1 md:grid-cols-3'>
                    <div className="px-[15px]">
                        <div class="card-body float-right">
                            <div className='text-[16px] font-[700]' style={{ textTransform: "uppercase" }}>
                                Thông tin liên hệ
                            </div>
                            <hr />
                            <div className='' style={{ fontSize: '14px', fontWeight: '400' }}>
                                <div style={{ marginBottom: '20px', marginTop: "20px", fontSize: '14px', fontWeight: '700' }}>
                                    <strong>Tư vấn tâm lý online</strong>
                                </div>
                                <div style={{ marginBottom: '20px' }}>Email: tuvanchuyenngoaitinh@gmail.com</div>
                                <div style={{ lineHeight: '150%' }}>
                                    Luôn lắng nghe, đồng hành cùng bạn trong hành trình chữa lành những khổ đau, tìm lại
                                    niềm an vui trong cuộc sống.
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="px-[15px]">
                        <div class="card-body">
                            <div className='text-[16px] font-[700]' style={{ textTransform: "uppercase" }}>
                                KẾT NỐI VỚI CHÚNG TÔI
                            </div>
                            <hr />
                            <p class="card-text">
                                <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                                    <a href='https://www.facebook.com/dao.vanthu.58'>Facebook</a>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <a href='https://www.tiktok.com/@kakojp?_t=8hi8KUNcgGA&_r=1'>Tik tok</a>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <a href={`mailto:srsgogakukyositsu@gmail.com`}>Email</a>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <a href='https://www.tiktok.com/@kakojp?_t=8hi8KUNcgGA&_r=1'>Youtube</a>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="px-[15px]">
                        <div class="card-body">
                            <div className='text-[16px] font-[700]' style={{ textTransform: "uppercase" }}>
                                ĐĂNG KÝ TƯ VẤN
                            </div>
                            <hr />
                            <p class="card-text">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Họ và tên"
                                    style={{ marginBottom: '10px' }}
                                />
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Số điện thoại"
                                    style={{ marginBottom: '10px' }}
                                />
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Email"
                                    style={{ marginBottom: '10px' }}
                                />
                                {/* <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Câu chuyện của bạn"
                                    style={{ marginBottom: '10px' }}
                                /> */}
                                <button class="btn" type="submit" className='text-white bg-[#686d74] uppercase px-[10px] py-[10px] my-[10px]'>
                                    Đăng ký
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
