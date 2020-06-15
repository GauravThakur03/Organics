import React from 'react';
const OrderColumns = () => {
    return ( 
        <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Order Id</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Amount</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Address</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Status</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Additional Info</p>
            </div>
        </div>
    </div>
     );
}
 
export default OrderColumns;