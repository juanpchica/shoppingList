import React from "react";

import { useSelector } from "react-redux";

export const Bank = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div>Bank</div>;
};
