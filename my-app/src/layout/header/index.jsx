import logo from '../../acess/avartar.png';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
        <header
            style={{
                backgroundColor: '#001219',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <div style={{ width: '1200px', display: 'flex', alignItems: 'center', height: '100px' }}>
                <div
                    style={{
                        width: '170px',
                        margin: '0 15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img style={{ height: '100px', width: '100px' }} src={logo} alt="#" />
                </div>
                <nav style={{ padding: '0 15px' }}>
                    <button className="header-btn header-btn-active">HOME</button>
                    <button className="header-btn">Về chúng tôi</button>
                    <button className="header-btn">Chuyện chồng ngoại tình</button>
                    <button className="header-btn">Chuyện vợ ngoại tình</button>
                    <button className="header-btn">Tản mạn tình yêu</button>
                    <button className="header-btn">Liên hệ</button>
                </nav>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '109px',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    alignItems: 'center',
                    paddingBottom: '20px',
                }}
            >
                {/* <input
                    style={{ padding: '0 10px', width: '438px', height: '32px', border: 'none', outline: 'none' }}
                    type="text"
                    placeholder="search here"
                />
                <button
                    style={{
                        height: '32px',
                        padding: '6px 12px',
                        border: 'none',
                        backgroundColor: 'rgb(90, 136, 202)',
                    }}
                >
                    search
                </button> */}
                <div class="input-group mb-3" style={{width: '460px'}}>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="search here"
                        aria-label="search here"
                        aria-describedby="button-addon2"
                    />
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" style={{backgroundColor: 'rgb(90, 136, 202)'}}>
                        <span>search</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
