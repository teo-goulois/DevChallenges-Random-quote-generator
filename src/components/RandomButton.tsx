import React from "react";
// Icons
import { UpdateIcon } from "../utilities/Icons";

type Props = {
  generate: () => Promise<void>;
};

const RandomButton = ({ generate }: Props) => {
  return (
    <button
      onClick={() => generate()}
      className="flex items-center absolute top-4 right-10 "
    >
      <p className="font-medium text-lg mr-2 text-[#4F4F4F] ">random</p>
      <UpdateIcon width="1rem" fill="#4F4F4F" />
    </button>
  );
};

export default RandomButton;
