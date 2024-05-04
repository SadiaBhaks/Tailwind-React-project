import React from "react";
import computer from "../assets/New folder/computer.jpg.jpeg";
export default function Experts(){
    return(
        <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2">
            <div className="border  col-span-1 md:w-[70%] text-center ">
                <img src={computer} alt="" className="inline"/>
            </div>
            <div className="border  h-[200px] col-span-1 flex flex-col justify-center">
                <h1 className="text-sky-400 font-bold my-2">Learn From Experts</h1>
                <p className="my-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi cupiditate perspiciatis aperiam. Dolorem unde aspernatur ipsam minima nihil deserunt qui! Neque velit vero asperiores saepe necessitatibus quibusdam totam sapiente?</p>
                <button className="bg-black inline w-[30%] text-white p-3 rounded">GET STARTED</button>
            </div>
            </div>
    )
}