import React from "react";
import { options } from "./VideoStyle";
import Image from "next/image";

function Preview({ formData }) {
  const selectVideoStyle =
    formData && options.find((item) => item?.name === formData?.videoStyle);

  const imageSrc = selectVideoStyle?.image;
  const isValidImageSrc =
    typeof imageSrc === "string" && imageSrc.trim() !== "";

  const captionText = formData?.caption?.name || "";
  const captionStyle = formData?.caption?.style || "";

  return (
    <div className="relative">
      <h2 className="mb-3 text-2xl">Preview</h2>

      {isValidImageSrc ? (
        <Image
          src={imageSrc}
          alt={selectVideoStyle?.name || "Video Style"}
          width={1000}
          height={300}
          className="w-full h-[67vh] object-cover rounded-xl"
        />
      ) : (
        <div className="w-full h-[67vh] bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">No preview available</p>
        </div>
      )}

      {captionText && (
        <h2 className={`${captionStyle} absolute bottom-7 text-center w-full`}>
          {captionText}
        </h2>
      )}
    </div>
  );
}

export default Preview;
