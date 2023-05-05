import React, { useState } from "react";

const TopProduct = () => {
  const [titleColor, setTtitleColor] = useState("black");
  const changeColor = (e) => {
    setTtitleColor("red");
  };
  const changeColor2 = (e) => {
    setTtitleColor("black");
  };
  return (
    <div className="flex items-center justify-center">
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Recent News
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://imgs.search.brave.com/ozWgdjKDBbEiKHt3GjsYrwJIkih-QYanzB_rAAVIr9Q/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/R1NoXzROemdYa1Vu/Uk55SGVHdG9BSGFF/OCZwaWQ9QXBp"
                    alt="imagge"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    Dec 22, 2022
                  </span>
                  <h3>
                    <a
                      onMouseEnter={changeColor}
                      onMouseLeave={changeColor2}
                      href="ja"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      <small style={{ color: titleColor }}>
                        Annual team meeting
                      </small>
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Our annual team meeting held.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://imgs.search.brave.com/HM2w9WHOHLUkjzFNTF_RzCEwMP5WAX6uVIyjA9IB4uA/rs:fit:509:339:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L3dlLWFyZS1oaXJp/bmctdGV4dC1idXNp/bmVzcy1jb25jZXB0/LXBpY3R1cmUtaWQx/MTMxMjQ1MDc2P2s9/NiZtPTExMzEyNDUw/NzYmcz0xNzA2Njdh/Jnc9MCZoPUJCSElG/VnlCbW12X2lXUG0x/VGJxY0xJdGJGX2xR/YW5pQ181WlF6cnpv/MDQ9"
                    alt="imagge"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    Mar 15, 2022
                  </span>
                  <h3>
                    <a
                      href="i"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      Job vacancy open
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    There is a job vacancy open for frontend developer. Contact
                    us with your resume.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/AqSKPWPMx55TAh8vYMcVt5-1200-80.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    July 05, 2022
                  </span>
                  <h3>
                    <a
                      href="j"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      Collaboration with Adidas
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    We collaborated with one of the biggest company!!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopProduct;
