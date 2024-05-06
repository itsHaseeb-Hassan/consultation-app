import Image from "next/image";
import Data from "../constant/Data.json";
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
          <p className="text-center mb-20 text-[#555555] font-normal">
            Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi
          </p>
          <div className=" mx-36">
            <div className="grid grid-cols-2 ">
              <div className="bg-curatedDoctor h-[420px]   bg-no-repeat"></div>
              <div className="mt-20">
                <h1 className="text-[#4C84C3] font-bold text-[25px]">Curated Docotrs</h1>
                <p className="font-normal text-[15px]">
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
      </div>
    </>
  );
}
