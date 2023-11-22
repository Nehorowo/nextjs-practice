"use client";
import React, { SyntheticEvent, useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="Image from Cloudinary"
        />
      )}
      <CldUploadWidget
        uploadPreset="z9nvdnra"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;

          const info = result.info as CloudinaryResult;

          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          const handleOnClick = (e: SyntheticEvent) => {
            e.preventDefault();
            open();
          };

          return (
            <button className="btn btn-secondary" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
