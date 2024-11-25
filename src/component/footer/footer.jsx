import React from "react";

const Footer = () => {
  return (
    <main className="bg-yellow-300 py-8 mt-1 ">
      <div className="container mx-auto px-4">
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Contact Info */}
          <div className="w-full lg:w-1/4">
            <h2 className="title-style mb-3">Contact Info</h2>
            <p className="footer-style">
              <b>Phone:</b> +91 7903435992
            </p>
            <p className="footer-style mt-2">
              <b>Email:</b> ichinmay2461@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-1/4">
  <h2 className="title-style mb-3">Do Follow on</h2>
  <div className="space-y-2">
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
      <div
        key={name}
        className="flex items-center space-x-2 footer-style hover:underline text-black"
      >
        <img src={imgSrc} alt={name} className="icon-style w-6 h-6" />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium  hover:text-yellow-300"
        >
          {name}
        </a>
      </div>
    ))}
  </div>
</div>


          {/* YouTube Channels */}
          <div className="w-full lg:w-1/4">
            <h2 className="title-style mb-3">YouTube Channels</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/cavlogs.png"
                  alt="CA Vlogs"
                  className="icon-style w-6 h-6"
                />
                <a
                  href="https://www.youtube.com/@CAVlogsLovesYouAlways"
                  className="text-[15px] font-medium  hover:text-yellow-300 footer-style"
                >
                  CA Vlogs
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  src="./images/sas.png"
                  alt="SAS Videos"
                  className="icon-style w-6 h-6"
                />
                <a
                  href="https://www.youtube.com/@SASVideos"
                  className="text-black hover:underline footer-style"
                >
                  SAS Videos
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="w-full lg:w-1/4">
            <h2 className="title-style mb-3">Copyright</h2>
            <p className="text-black text-sm footer-style">
              &copy; {new Date().getFullYear()} All rights reserved.
              <br />
              <a
                href="https://portfolio-with-react-brown.vercel.app/"
                className="hover:underline"
              >
                Visit My Portfolio
              </a>
            </p>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="flex justify-center mt-8">
          <h1 className="font-bold border border-black rounded-2xl py-3 px-6 bg-black text-yellow-300 shadow-lg">
            Thank You For Visiting
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Footer;
