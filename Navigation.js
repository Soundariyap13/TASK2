class Navigation {
    constructor(container) {
        this.container = container;
        container.classList.add("tabs-navigation");
    }

    render() {
        this.container.innerHTML = `
            <button class="tab-button" data-tab="vehicle-details">Vehicle Details</button>
            <button class="tab-button" data-tab="live-tracking">Live Tracking</button>
            <button class="tab-button" data-tab="trip-history">Trip History</button>
            <button class="tab-button active" data-tab="vehicle-inspection">Vehicle Inspection</button>
            <button class="tab-button" data-tab="service-history">Service History</button>
            <button class="tab-button" data-tab="maintenance-logs">Maintenance Logs</button>
            <button class="tab-button" data-tab="fuel-management">Fuel Management</button>
            <button class="tab-button" data-tab="payment-reports">Payment Reports</button>
            <button class="tab-button" data-tab="advance-pay">Advance Pay</button>
            <button class="tab-button" data-tab="driver-used">Driver's Used</button>
        `;
    }
}

export default Navigation;
