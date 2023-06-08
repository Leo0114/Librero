import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useImageGetter } from "../utils/useImageGetter";
import { useState } from "react";
import placeholderCover from "../assets/placeholderCover.png";
interface CoverProps {
  isbn: string;
  size: "small" | "medium" | "large";
}

export const Cover = ({ isbn, size = "medium" }: CoverProps) => {
  const [coverExists, setCoverExists] = useState(true);
  const imageWidths = {
    small: 64,
    medium: 112,
    large: 256,
  };

  const imageWidth = imageWidths[size];
  const imageHeight = imageWidth * 1.5;

  const { image } = useImageGetter(isbn);

  const handleLoad = (e: any) => {
    console.log("loaded", e.target.naturalWidth);
    if (e.target.naturalWidth < 10) {
      setCoverExists(false);
    }
  };

  return (
    <LazyLoadImage
      height={imageHeight}
      src={coverExists ? image : placeholderCover}
      width={imageWidth}
      effect="opacity"
      onLoad={handleLoad}
      placeholder={<div className="w-full h-full bg-gray-200" />}
    />
  );
};
