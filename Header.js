import groupIcon from '../../ASSETS/IMAGES/group-28389@2x.png';
import path39207Icon from '../../ASSETS/IMAGES/path-39207@2x.png';
import path38334Icon from '../../ASSETS/IMAGES/path-38334@2x.png';
import penIcon from '../../ASSETS/IMAGES/path-38491@2x.png';
import deleteIcon from '../../ASSETS/IMAGES/path-38492@2x.png';
import carImage from '../../ASSETS/IMAGES/Car-image.png';

class Header {
    constructor(container) {
        this.container = container;
        container.classList.add("profile-header");
    }

    render() {
        this.container.innerHTML = `
            <div class="status-container">
                <div class="left">
                    <img src="${groupIcon}" alt="" width="30px" height="30px">
                </div>
                <div class="right">
                    <div class="status-button">
                        <span class="active-1">
                            <img style="width: 20px;padding-right: 6px;" src="${path39207Icon}" alt="">
                            All Documents are up to date
                        </span>
                    </div>
                    <div class="status-button">
                        <button class="inspect"> INSPECTED 
                            <img style="padding-left: 4px;" src="${path38334Icon}" alt="" width="10px">
                        </button>
                    </div>
                    <div class="status-button">
                        <button class="active"> ACTIVE 
                            <img style="padding-left: 4px;" src="${path38334Icon}" alt="" width="10px">
                        </button>
                    </div>
                    <div class="icon-button">
                        <button class="pen">
                            <img src="${penIcon}" width="20px">
                        </button>
                    </div>
                    <div class="icon-button">
                        <button class="del">
                            <img src="${deleteIcon}" width="20px">
                        </button>
                    </div>
                </div>
            </div>

            <div class="user-info">
                <div class="img">
                    <img src="${carImage}" alt="User Profile Picture" class="logo">
                </div>
                <div class="name-txt">
                    <h3>TN 01 AB 1234
                        <span class="sub-text1">Maruti Suzuki Swift LXI</span>
                        <span class="sub-text">Last Update: 01 Jan 23, 10:00 am</span>
                    </h3>
                    <span class="NOTDR001">NOTDR001</span>
                </div>
            </div>

            <div class="row">
                <div class="lgo-2">
                    <button class="Driver">LEASE</button>
                    <button class="Fleet">NEW PANDIAN TRAVELS</button>
                    <button class="Office">NPT-HCL</button>
                </div>
            </div>

            <div class="status-section">
                <div class="status-card">
                    <h3>3000 km</h3>
                    <p>Total Distance</p>
                </div>
                <div class="status-card">
                    <h3>102 h 32m</h3>
                    <p>Total Driving Time</p>
                </div>
                <div class="status-card">
                    <h3>64</h3>
                    <p>Total Office Trips</p>
                </div>
                <div class="status-card">
                    <h3>24</h3>
                    <p>Total Regular Trips</p>
                </div>
                <div class="status-card">
                    <div class="col">
                        <div class="col-v">
                            <h3>₹2,00,000</h3>
                            <p>Total Revenue</p>
                        </div>
                        <div class="col-v">
                            <h3>₹1,50,000</h3>
                            <p>Company Store</p>
                        </div>
                        <div class="col-v">
                            <h3>₹50,000</h3>
                            <p>Owner Score</p>
                        </div>
                    </div>
                </div>
                <div class="status-card">
                    <h3>5</h3>
                    <p>Total Drivers</p>
                </div>
                <div class="status-card">
                    <h3>01 Feb 2023</h3>
                    <p>Joined Date</p>
                </div>
            </div>
        `;
    }
}

export default Header;
