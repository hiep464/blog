import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer style={{ backgroundColor: 'black', borderTop: '3px solid #84cf3f' }}>
            <div class="container text-left" style={{ maxHeight: '1200px', paddingBottom: '30px' }}>
                <div class="row text-white" style={{ padding: '24px 0 10px', borderBottom: '1px dashed white' }}>
                    <div class="col">
                        <div class="card-body float-right">
                            <h5 class="card-title" style={{ paddingBottom: '10px' }}>
                                Thông tin liên hệ
                            </h5>
                            <hr />
                            <p class="card-text">
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Tư vấn tâm lý online</strong>
                                </div>
                                <div style={{ marginBottom: '10px' }}>Email: tuvanchuyenngoaitinh@gmail.com</div>
                                <div>
                                    Luôn lắng nghe, đồng hành cùng bạn trong hành trình chữa lành những khổ đau, tìm lại
                                    niềm an vui trong cuộc sống.
                                </div>
                                <br />
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title" style={{ paddingBottom: '10px' }}>
                                KẾT NỐI VỚI CHÚNG TÔI
                            </h5>
                            <hr />
                            <p class="card-text">
                                <div style={{ marginBottom: '11px' }}>
                                    <span>Facebook</span>
                                </div>
                                <div style={{ marginBottom: '11px' }}>
                                    <span>Tik tok</span>
                                </div>
                                <div style={{ marginBottom: '11px' }}>
                                    <span>Instagram</span>
                                </div>
                                <div style={{ marginBottom: '11px' }}>
                                    <span>Youtube</span>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title" style={{ paddingBottom: '10px' }}>
                                ĐĂNG KÝ TƯ VẤN
                            </h5>
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
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Câu chuyện của bạn"
                                    style={{ marginBottom: '10px' }}
                                />
                                <button class="btn btn-outline-success" type="submit">
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
