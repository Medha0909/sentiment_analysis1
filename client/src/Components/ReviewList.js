import file from "./ReviewsData.json";
import { FaStar } from "react-icons/fa";
import { LuUserPlus } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import "./ReviewList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Display()
{
 
    return(
        <>
        {file.map((file1,index)=>(
        <>
        <div key={index}>
        <table>
        <tr>
        <td>
            <img className="design-avatar" src={file1.source.icon}></img>
        </td>
        <td>
        <p><span className="design-title">{file1.reviewer_name}</span><span className="design1-title"> wrote a review at</span> <span className="design-title"> {file1.source.name}</span></p>
        </td>
        <td>
        <span className="design-icon col-2"><LuUserPlus /> <FaRegBookmark /> <IoEllipsisHorizontalSharp /></span>
        </td>
        </tr>
        </table>
        <table>
        <tr>
        <td>
        <div className="star1">
        {[...Array(file1.rating_review_score)].map(star=>{
            return(
                <span className="star"><FaStar color={"#e4d718"}/></span>
            )
        })}
        </div>
        </td>
        <td>
        <div className="date"><p  className="design-date" >{file1.date}</p></div>
        </td>
        </tr>
        </table>
        <div className="design-text">{file1.content}</div>
        </div>

        </>
        ))}
        </>
    )
}

export default Display;