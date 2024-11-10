import correctIcon from '../../ASSETS/IMAGES/correct-icon.png';
import alertIcon from '../../ASSETS/IMAGES/alert-icon.png';

class Container {
    constructor(container) {
        this.container = container;
        container.classList.add("inspection-details-card");
    }

    render() {
        this.container.innerHTML = `
            <h5 class="inspection-heading">Inspection Details <span class="text-primary">✏️</span></h5>
            <div class="grid-container">
                <div class="i">
                    <div style="padding:20px 10px;margin:10px 0px; max-height:50%;" class="inspection-detail-grid-item">
                        <div class="detail-header">
                            <img src="${correctIcon}" alt="Inspector Icon" class="detail-icon"> <!-- Image for Vehicle Inspector Details -->
                            <h4>Vehicle Inspector Details</h4>
                        </div>
                        <div>
                            <div class="worn">
                                <p>Inspector Name</p>
                                <p>Arno Dorian</p>
                            </div>
                            <div class="worn">
                                <p>Email</p>
                                <p>arnodorian@gmail.com</p>
                            </div>
                            <div class="worn">
                                <p>Inspection Date</p>
                                <p>01-Oct-2023</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="padding:20px 10px;margin:10px 0px;max-height:50%;" class="inspection-detail-grid-item">
                        <div class="detail-header">
                            <img src="${correctIcon}" alt="Owner Icon" class="detail-icon"> <!-- Image for Vehicle Owner Details -->
                            <h4>Vehicle Owner Details</h4>
                        </div>
                        <div>
                            <div class="worn">
                                <p>Owner Name</p>
                                <p>Ezio Auditore</p>
                            </div>
                            <div class="worn">
                                <p>Email</p>
                                <p>EzioAuditore@gmail.com</p>
                            </div>
                            <div class="worn">
                                <p>Phone Number</p>
                                <p>9876543210</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="inspection-detail-grid-item">
                    <div class="detail-header">
                        <img src="${alertIcon}" alt="Vehicle Icon" class="detail-icon"> <!-- Image for Vehicle Details -->
                        <h4>Vehicle Details</h4>
                    </div>
                    <div>
                        <div class="worn">
                            <p>Vehicle Registration Number</p>
                            <p>TN 01 AA 1234</p>
                        </div>
                        <div class="worn">
                            <p>Vehicle Type</p>
                            <p> Hatchback</p>
                        </div>
                        <div class="worn">
                            <p>Vehicle Brand</p>
                            <p> Maruti Suzuki</p>
                        </div>
                        <div class="worn">
                            <p>Vehicle Model</p>
                            <p>Swift VXI</p>
                        </div>
                        <div class="worn">
                            <p>Manufacturing Year</p>
                            <p>2019</p>
                        </div>
                        <div class="worn">
                            <p>Vehicle Color</p>
                            <p>White</p>
                        </div>
                        <div class="worn">
                            <p>Seats Capacity</p>
                            <p>5</p>
                        </div>
                        <div class="worn">
                            <p>Fuel Type:</p>
                            <p>Diesel</p>
                        </div>
                        <div class="worn">
                            <p>Mileage Range</p>
                            <p>16-18 kmpl</p>
                        </div>
                    </div>
                </div>
                
                <div class="inspection-detail-grid-item">
                    <div class="detail-header">
                        <img src="${alertIcon}" alt="Body Icon" class="detail-icon"> <!-- Image for Body -->
                        <h4>Body</h4>
                    </div>
                    <div>
                        <div class="worn">
                            <p>Is Spare Tire present? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Condition of the tire <span class="text-green"></span></p>
                            <p>100%</p>
                        </div>
                        <div class="worn">
                            <p>Are Tire(s) aligned properly <span class="text-green"></span></p> 
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Is there any dent in Right Front Door?<span class="text-red"></span></p>
                            <p>No</p>
                        </div>
                        <div class="worn">
                            <p>Is there any dent in Left Front Door? <span class="text-red"></span></p>
                            <p>No</p>
                        </div>
                        <div class="worn">
                            <p>Is there any dent in Right Rear Door? <span class="text-red"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Is there any dent in Left Rear Door? <span class="text-red"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Is there any dent in Bonnet? <span class="text-red"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Is there any dent in Boot <span class="text-red"></span></p>
                            <p>No</p>
                        </div>
                    </div>                
                </div>
                
                <div class="inspection-detail-grid-item">
                    <div class="detail-header">
                        <img src="${correctIcon}" alt="Brakes Icon" class="detail-icon"> 
                        <h4>Brakes</h4>
                    </div>
                    <div>
                        <div class="worn">
                            <p>Are the brakes in good condition? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>
                <div class="inspection-detail-grid-item">
                    <div class="detail-header">
                        <img src="${correctIcon}" alt="Bumpers Icon" class="detail-icon"> 
                        <h4>Bumpers</h4>
                    </div>
                    <div>
                        <div class="worn">
                            <p>Is the front bumper in good condition? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Is the rear bumper in good condition? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>
                <div class="inspection-detail-grid-item">
                    <div class="detail-header">
                        <img src="${correctIcon}" alt="Interior Icon" class="detail-icon"> 
                        <h4>Interior</h4>
                    </div>
                    <div>
                        <div class="worn">
                            <p>Does the horn work properly? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Are all seat belts working and in good condition? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                        <div class="worn">
                            <p>Are the air conditioners working? <span class="text-green"></span></p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Container;
