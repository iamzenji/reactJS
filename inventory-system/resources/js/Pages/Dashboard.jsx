import React from "react";

const Dashboard = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Inventory Dashboard</h2>

            <div className="row">
                <div className="col-md-3">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Total Products</div>
                        <div className="card-body">
                            <h5 className="card-title">120</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">In Stock</div>
                        <div className="card-body">
                            <h5 className="card-title">85</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header">Low Stock</div>
                        <div className="card-body">
                            <h5 className="card-title">15</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">Out of Stock</div>
                        <div className="card-body">
                            <h5 className="card-title">5</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-header">Total Sales</div>
                        <div className="card-body">
                            <h5 className="card-title">250</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header">Pending Orders</div>
                        <div className="card-body">
                            <h5 className="card-title">10</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Suppliers Count</div>
                        <div className="card-body">
                            <h5 className="card-title">6</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-warning bg-light text-dark mb-3">
                        <div className="card-header">Returned Items</div>
                        <div className="card-body">
                            <h5 className="card-title">8</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
