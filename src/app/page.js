import Image from "next/image";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import Data from "../constant/Data.json";
import CustomSlider from "@/components/CustomSlider";
import SliderData from '../constant/Slider.json'
export default function Home() {
  return (
    <>
      <div>
        <p className="text-center mt-20 font-semibold text-[28px]">
          Select Your Speciality
        </p>
        <p className="text-center mb-20 text-[#555555] font-normal">
          Private consultations with verified doctors in all specialists
        </p>
        <div className=" mx-36">
          <div className="grid grid-cols-4 gap-x-20 gap-y-14">
            {Data.map((item, index) => {
              return (
                <div key={index} className=" w-[200px] ">
                  <Image src={item.url} width={200} height={100} />
                  <p className="text-center text-[#555555] font-normal">
                    {item.speciality}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full text-center my-10 ">
            <button className="bg-white text-[#4C84C3] border border-[#4C84C3] font-normal h-[30px] w-[100px] rounded-md">
              View All
            </button>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-center mt-20 font-semibold text-[28px]">
            Why Swasthu?
          </p>
          <p className="text-center mb-20 text-[#555555] font-normal text-[20px]">
            Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi
          </p>
          <div className=" mx-36">
            <div className="grid grid-cols-3 ">
              <div className="bg-curatedDoctor h-[420px]   bg-no-repeat "></div>
              <div className="mt-20 col-span-2 w-[500px] mx-20">
                <h1 className="text-[#4C84C3] font-bold text-[25px] ">
                  Curated Docotrs
                </h1>
                <p className="font-normal text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  gravida id lobortis eget tristique ultrices feugiat neque
                  elit. Amet imperdiet donec cras habitant ultrices sed in mi
                  scelerisque. Maecenas tempus amet aenean in eu ullamcorper
                  viverra pulvinar. Nibh et elementum parturient viverra in. In
                  morbi vehicula dignissim pharetra, tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-36 bg-red-400 my-28">
          <div className="w-full h-[470px] bg-DownloadApp">
            <div className="flex justify-end items-center h-full">
              <div className="w-[400px] mr-48">
                <h1 className="text-[#4C38C3] font-bold text-[30px]">
                  Download our App
                </h1>
                <p className="text-[15px]">
                  Access video consultation with India’s top doctors on the
                  Swasthu mobile Application. Connect with doctors online from
                  the comfort of your home.
                </p>
                <div className="flex gap-5 mt-5">
                  <button className="text-white bg-black border  font-normal px-4 py-2 rounded-md">
                    <span className="flex items-center">
                      <IoLogoGooglePlaystore size={25} className="mx-2" />
                      Google Play
                    </span>
                  </button>
                  <button className="text-white bg-black border  font-normal px-4 py-2 rounded-md">
                    <span className="flex items-center">
                      <IoLogoApple size={25} className="mx-2" />
                      App Store
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-36">
          <p className="text-center">What our user say about us</p>
          <p className="text-center my-6">Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi</p>
          <CustomSlider>
        </CustomSlider>
        </div>
      </div>
    </>
  );
}
