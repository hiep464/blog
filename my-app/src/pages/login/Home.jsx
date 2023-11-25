import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import item1 from '../../acess/item1.jpg';
import item2 from '../../acess/item2.jpg';
import item3 from '../../acess/item3.jpg';

function Home() {
    return (
        <main>
            <div className="container">
                <div className='item1'>
                    <h4>CHUYỆN MỚI</h4>
                    <div class="row align-items-start">
                        <div class="col">
                            <div class="card">
                                <img src={item1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                        trời
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        Chồng đưa người tình về nhà, vợ bắt được tại trận và cái kết sau 10 năm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        10 năm tay trắng cùng khởi nghiệp, chồng dắt nhân tình về sau 4 tháng cưới
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item1'>
                    <h4>CHUYỆN NGOẠI TÌNH NỔI BẬT</h4>
                    <div class="row align-items-start">
                        <div class="col">
                            <div class="card">
                                <img src={item1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        Chồng mất sớm, tôi nhận con nuôi nhưng khi thằng bé lớn tôi phát hiện bí mật động
                                        trời
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        Chồng đưa người tình về nhà, vợ bắt được tại trận và cái kết sau 10 năm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        10 năm tay trắng cùng khởi nghiệp, chồng dắt nhân tình về sau 4 tháng cưới
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        10 năm tay trắng cùng khởi nghiệp, chồng dắt nhân tình về sau 4 tháng cưới
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        10 năm tay trắng cùng khởi nghiệp, chồng dắt nhân tình về sau 4 tháng cưới
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={item3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        10 năm tay trắng cùng khởi nghiệp, chồng dắt nhân tình về sau 4 tháng cưới
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
