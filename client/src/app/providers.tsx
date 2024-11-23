"use client";

import React, { Children } from "react";
import StoreProvider from "@/src/state/redux";

const Prodivers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Prodivers;
