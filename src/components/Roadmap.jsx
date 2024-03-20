import React from "react";
import { FiveStars, RoadmapIcon } from "./Icons";
import India from "../assets/images/svg/India.svg"
import England from "../assets/images/svg/England.svg"
import America from "../assets/images/svg/America.svg"
const MyRoadmap = () => {
    return (
        <div>
            <div id="roadmap" className=" overflow-x-clip position-relative mt-5 mb-5 pb-5">
                <div className="roadmap-b-layer"></div>
                <p className="fs-xxl1 roadmap text-gray fw-bold">ROADMAP</p>
                <div className="container pt-2 mt-5 pb-5">
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="team_btn ">ROAD MAP</button>
                    </div>
                    <h2 className=" fw-bold text-white text-center mx-auto pb-5 mb-5 mt-3" >Milestones and markers</h2>
                    <div className="timeline position-relative pt-5">
                        <span className="position-absolute time_logo"><RoadmapIcon /> </span>
                        <div className="container right">
                            <div className="content position-relative overflow-hidden ">
                                <h2 className="fs-lg1 fw-normal text-gradient text-center">Oct 2014</h2>
                                <p className="fs-lg1 fw-normal text-gray text-center">Hired our first employee</p>
                                <span className="timeline-ellipse"></span>
                            </div>
                        </div>
                        <div className="container left  ">
                            <div className="content position-relative overflow-hidden">
                                <h2 className="fs-lg1 fw-normal text-gradient  text-center">Nov 2014</h2>
                                <p className="fs-lg1  fw-normal text-gray text-center">Launched Bitcoin wallet</p>
                                <span className="timeline-ellipse"></span>
                            </div>
                        </div>
                        <div className="container right ">
                            <div className="content position-relative overflow-hidden">
                                <h2 className="fs-lg1 fw-normal text-gradient text-center"> Oct 2015</h2>
                                <p className="fs-lg1  fw-normal text-gray text-center">1st prize by Bit angels at Coin Agenda, Las Vegas</p>
                                <span className="timeline-ellipse"></span>
                            </div>
                        </div>
                        <div className="container left ">
                            <div className="content position-relative overflow-hidden">
                                <h2 className="fs-lg1 fw-normal text-gradient text-center">Jan 2020</h2>
                                <p className="fs-lg1 fw-normal text-gray text-center d-flex align-items-center justify-content-center">launch On <img className="px-3" src={India} alt="India" /> <img className="pe-3" src={England} alt='England' /> <img className="pe-3" src={America} alt='America' /></p>
                                <span className="timeline-ellipse"></span>
                            </div>
                        </div>
                        <div className="container right ">
                            <div className="content position-relative overflow-hidden">
                                <h2 className="fs-lg1 fw-normal text-gradient text-center">Jan 2022</h2>
                                <p className="fs-lg1 fw-normal text-gray text-center">
                                    Trusted by 10 Millions+ Users
                                </p>
                                <span className="timeline-ellipse"></span>
                                <div className="text-center">
                                    <FiveStars />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRoadmap;