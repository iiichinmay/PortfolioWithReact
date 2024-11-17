import React from "react";

const Footer = () => {
  return (
    <main className="bg-yellow-300 h-52 ">
      <div className="flex items-center justify-center"></div>
      <left className='flex gap-5 justify-around'>
        <ul className="flex justify-around mt-7  w-[70%] ">
          <li>
            <div className="title-style">Contact & e-mail</div>
            <span>+91 7903435992</span>
            <br />
            <span>ichinmay2461@gmail.com</span>
          </li>

          <li>
            <div className="title-style">Social Media Handles</div>
            {[
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/patriciaburns97753224/",
                imgSrc: "./images/linkedin.png",
              },
              {
                name: "GitHub",
                url: "https://github.com/iiichinmay",
                imgSrc: "./images/git.jpg",
              },
              {
                name: "Twitter",
                url: "",
                imgSrc: "./images/twitter.png",
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/ii_chinmay/profilecard/?igsh=MWFpeW0xZWNwbWhnMw==",
                imgSrc: "./images/insta.jpg",
              },
            ].map(({ name, url, imgSrc }) => (
              <div key={name} className="flex items-center space-x-2">
                <img src={imgSrc} className="icon-style" />
                <a href={url} className="text-black hover:underline">
                  {name}
                </a>
              </div>
            ))}
          </li>
          <li>
            <h1 className="title-style ">YouTube Channels</h1>
            <div className="flex items-center space-x-2">
              <img
                src="./images/cavlogs.png"
                alt="CA Vlogs"
                className="icon-style"
              />
              <a
                href="https://www.youtube.com/@CAVlogsLovesYouAlways"
                className="text-black hover:underline"
              >
                CA Vlogs
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="./images/sas.png"
                alt="SAS Videos"
                className="icon-style"
              />
              <a
                href="https://www.youtube.com/@SASVideos"
                className="text-black hover:underline"
              >
                SAS Videos
              </a>
            </div>
          </li>
          <li>
            <h1 className="title-style">copyright</h1>
            <p class=" text-black text-sm">
              &copy; {new Date().getFullYear()} <br /> All rights reserved.
              <br /> <a href="https://portfolio-with-react-brown.vercel.app/">https://portfolio-with-react-brown.vercel.app/</a> 
            </p>
          </li>
        </ul>

        <ul>
          <li>
            <h1 className="font-bold mt-20 mr-10 border border-black rounded-2xl p-3 shadow-black shadow-2xl bg-black text-yellow-300">
              ThankYou For Visiting
            </h1>
          </li>
        </ul>
      </left>
    </main>
  );
};
export default Footer;
