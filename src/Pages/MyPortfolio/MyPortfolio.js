import React from "react";
import as from "../../Images/as.png";
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const MyPortfolio = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="min-h-screen rounded-lg  bg-white p-10">
                <img
                    src={as}
                    alt=""
                    className="rounded-full p-4 h-40 mx-auto"
                />

                <header className=" text-2xl text-primary font-extrabold py-4 px-4 text-center">
                    Gpu Tech Ltd
                </header>
                <div className="text-black text-center">
                    <h1>Gpu Tech Ltd is a tools manufacturer company. We are providing servuce since 2000. Order all the available products from ourb website.</h1>
                </div>

                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className=" font-bold text-3xl text-gray-800  text-center  pb-3">Our Team</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-primary font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Meet the talented people behind our success...</h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100  px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white ">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img alt="" src="https://imgs.search.brave.com/rqehTwS8Wz_Q82lhJFUHfevH9fLKiAm_zKwh64_qob0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/dU1KYW5lUkxfVkQ4/VXcwbzRjREt3SGFG/aiZwaWQ9QXBp" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold  text-3xl text-center mb-1">Pirlo Jackson</h1>

                                        <div className="w-full flex justify-center text-primary pt-5 pb-5">
                                            <a href="a" className="mx-5">
                                                <BsFacebook></BsFacebook>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsLinkedin></BsLinkedin>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsTwitter></BsTwitter>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white ">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://imgs.search.brave.com/PxsnrmYcNSL6qovUqnMqfPxx3ueLVTjIcwxvHAk3WyQ/rs:fit:371:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/WEE1d1NIMWFJVF9l/M0Jsd3RqMUVnSGFK/YyZwaWQ9QXBp" alt="Displayo" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold  text-3xl text-center mb-1">Mark Owen</h1>

                                        <div className="w-full flex justify-center text-primary pt-5 pb-5">
                                            <a href="a" className="mx-5">
                                                <BsFacebook></BsFacebook>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsLinkedin></BsLinkedin>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsTwitter></BsTwitter>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white ">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://imgs.search.brave.com/K09g-lnTBkmw1vW1uEEsOsg0gtSHVmvbd_-3JFfxo9U/rs:fit:448:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/cno1QUxrR2pZT1h5/eTgwNXBNN1dBSGFI/MSZwaWQ9QXBp" alt="Displa" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold  text-3xl text-center mb-1">Mitchell Johnson</h1>

                                        <div className="w-full flex justify-center text-primary pt-5 pb-5">
                                            <a href="a" className="mx-5">
                                                <BsFacebook></BsFacebook>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsLinkedin></BsLinkedin>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsTwitter></BsTwitter>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white ">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://imgs.search.brave.com/-uzmlq7Zkt7DEUFyslXIyUxqwkaEZwFw7HWYRd_RJD8/rs:fit:416:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/aF9FSWRmR1RpZ0dY/b0JiOWxCLWFnQUFB/QSZwaWQ9QXBp" alt="Displa" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold  text-3xl text-center mb-1">Liam stone</h1>

                                        <div className="w-full flex justify-center text-primary pt-5 pb-5">
                                            <a href="a" className="mx-5">
                                                <BsFacebook></BsFacebook>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsLinkedin></BsLinkedin>
                                            </a>
                                            <a href="a" className="mx-5">
                                                <BsTwitter></BsTwitter>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyPortfolio;
