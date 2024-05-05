/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      className="h-auto w-full object-contain"
      sizes="100vh"
      quality={100}
      height={0}
      width={0}
      {...props}
    />
  );
};

export default PromoBanner;
