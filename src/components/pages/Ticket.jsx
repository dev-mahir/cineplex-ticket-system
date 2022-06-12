import React from 'react'
import { Link } from 'react-router-dom'

const Ticket = () => {
    return (



        <section className="py-5 ticket">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card">
                                    <div className="card-body">
                                        <form action="">
                                            <div className="w-75">
                                                <h5 className="mb-2">Select Location</h5>
                                                <select name="" id="" className="form-select">
                                                    <option value="">Location</option>
                                                </select>
                                            </div>
                                        </form>
                                        <p>Bashundhara Shopping Mall, Panthapath</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">

                                <input type="Date" className="form-control" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <h5 className="mb-2">Select Movie</h5>
                            <div className="row">
                                <div className="col-lg-2 movie-item">
                                    <div>
                                        <img src="./assets/images/thumnail.webp" alt="" />
                                        <p>Movie title</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 movie-item">
                                    <div>
                                        <img src="./assets/images/thumnail.webp" alt="" />
                                        <p>Movie title</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 movie-item">
                                    <div>
                                        <img src="./assets/images/thumnail.webp" alt="" />
                                        <p>Movie title</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-2">Select show time</h5>
                                        <div className="d-flex">
                                            <div>
                                                <input type="radio" name="show_time" id="morning" />
                                                <label htmlFor="morning">11:15 am</label>
                                            </div>
                                            <div className="ms-3">
                                                <input type="radio" name="show_time" id="afternoon" />
                                                <label htmlFor="afternoon">11:00 am</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-2">Select Seat Type</h5>
                                        <div className="d-flex ">
                                            <div className=" d-flex align-items-center">
                                                <input type="radio" name="show_time" id="regular" />
                                                <label for="regular" className="ms-2">
                                                    <div>
                                                        <p>regular</p>
                                                        <p>BDT 250 TK</p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className=" d-flex align-items-center mx-5">
                                                <input type="radio" name="show_time" id="premium" />
                                                <label for="premium" className="ms-2">
                                                    <div>
                                                        <p>Premium</p>
                                                        <p>BDT 300 TK</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <div className=" ms-5">
                                            <h5 className="mb-2" >Ticket Quantity    </h5>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-info fw-bold">-</button>
                                                <p className="mx-2">O Tickets</p>
                                                <button className="btn btn-info fw-bold">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between bg-light">
                                        <div>time here</div>
                                        <div className="d-flex justify-content-between">
                                            <p>Available</p>
                                            <p className="mx-3">Selected</p>
                                            <p>Not Available</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  N23 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N22 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N21 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N20 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="" >  N19 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N13 </Link>
                                            </li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  N10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   N1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  M23 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M22 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M21 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M20 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M19 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  M10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   M1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  L23 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L22 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L21 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L20 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L19 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  L10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   L1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  K23 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K22 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K21 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K20 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K19 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  K10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   K1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  J23 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J22 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J21 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J20 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J19 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  J10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   J1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  H17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  H16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  H15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  H13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  H12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  H11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  H10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   H1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  G18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  G10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   G1 </Link>
                                            </li>
                                        </ul>
                                        <ul className="d-flex">
                                            <li className="w-25">
                                                <Link className="default" to="">  F18 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F17 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F16 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F15 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F14 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F13 </Link>
                                            </li>

                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25"></li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F12 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F11 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">  F10 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F9 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F8 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F7 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F6 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F5 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F4 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F3 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F2 </Link>
                                            </li>
                                            <li className="w-25">
                                                <Link className="default" to="">   F1 </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    

                    <div className="col-lg-3">
                        <h5 className="mb-2">Tickets Summary</h5>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <img style={{ height: "150px" }} src="./assets/images/thumnail.webp" alt="" />
                                    <p className="ms-3">Bikkov</p>
                                </div>
                                <ul className="mt-4">
                                    <li className="d-flex my-2 justify-content-between">Show Date
                                        <span> 12 Jun </span>
                                    </li>
                                    <li className="d-flex my-2 justify-content-between"> Hall Name
                                        <span> hall 3 </span>
                                    </li>
                                    <li className="d-flex my-2 justify-content-between"> Seat type
                                        <span> Regular </span>
                                    </li>
                                    <li className="d-flex my-2 justify-content-between">
                                        <span> BSC</span>
                                    </li>
                                    <li className="d-flex my-2 justify-content-between"> Ticket quantity
                                        <span> 1 </span>
                                    </li>
                                    <li className="d-flex my-2 justify-content-between"> Selected Seat
                                        <span> H14 </span>
                                    </li>
                                    <li className="d-flex my-2 justify-content-between"> Total Amount
                                        <span> 250 BDT </span>
                                    </li>
                                </ul>
                                <p className=" mt-4">Ticket for</p>
                                <form action="">
                                    <div className="my-2">
                                        <input type="text" name="name" className="form-control" placeholder="Full name" id="" />
                                    </div>
                                    <div className="my-2">
                                        <input type="text" name="phone" className="form-control" placeholder="Mobile number" id="" />
                                    </div>
                                    <div className="my-2">
                                        <button className="btn btn-danger w-100">Purchase ticket</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >

    )
}

export default Ticket