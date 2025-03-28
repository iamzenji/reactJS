import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive-dt";

const Dashboard = () => {
    useEffect(() => {
        $("#inventoryTable").DataTable({
            responsive: true,
            paging: true,
            searching: true,
            ordering: true,
            info: true,
            destroy: true,
        });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Inventory Dashboard</h2>

            <div className="card">
                <div className="card-header">Product List</div>
                <div className="card-body">
                    <table id="inventoryTable" className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Laptop</td>
                                <td>Electronics</td>
                                <td>25</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger ms-2">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
