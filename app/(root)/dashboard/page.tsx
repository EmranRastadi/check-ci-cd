import getConfig from "next/config";
import { useState } from "react";

export default function Dashboard() {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  return (
    <div className="h-screen w-screen ">
      <h1>secret_key : {serverRuntimeConfig.mySecret}</h1>
      <h1>static_folder : {publicRuntimeConfig.staticFolder}</h1>
    </div>
  );
}
