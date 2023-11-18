import React from "react";
import Image from "next/image";
import bobr from "../../public/images/bobr.jpg";

const page = () => {
  return (
    <div>
      <Image src={bobr} alt="bobr picture" />
      <div className="w-20 h-20 overflow-hidden relative">
        <Image
          src="https://bit.ly/react-cover"
          alt="react-cover"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          priority
        />
      </div>
    </div>
  );
};

export default page;
