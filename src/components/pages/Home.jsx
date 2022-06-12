import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="py-5 home" >
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 my-3">
                        <div className="card rounded-2">
                            <div className="card-body">
                                <div className="feature">
                                    <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_240x360_crop_center.progressive.jpg?v=1631200474" alt="" />
                                        <Link to="/ticket" className="btn-danger btn-sm">Get tickets</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Home;