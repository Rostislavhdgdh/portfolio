import React from "react";
import Logo from '../img/logo.jpg'
import './History.css';
import TextMobileStepper from "../stepper/Stepper";
import Soc from "../soc/Soc";




const History = () => {
    return(
        <div className="history">
            <div className="logo">
                <img src={Logo}></img>
            </div>
            <div className="info ">
            <div className="name">
                <div className="FirstName">
                    <span>Name: </span>
                    <span>Rostyslav Shevchuk</span>
                </div>
            </div>
            <div className="Old">
                <div className="year">
                    <span>Old: </span>
                    <span>21</span>
                </div>
            </div>
            <div className="poloska">

            </div>
            <div className="Sharaga">
                <span>Training: </span>
                <span>Odessa ONAPT Game development, cyber security (is still in training)</span>
            </div>
             <div className="poloska">

            </div>
            <div className="stepper">
            <Soc></Soc>
            <TextMobileStepper ></TextMobileStepper>
            </div>
        </div>
       
        </div>
    );
}

export default History;