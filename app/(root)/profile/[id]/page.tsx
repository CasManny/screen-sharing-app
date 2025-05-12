import { Header } from "@/components/header";
import React from "react";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="casmannydev@gmail.com"
        title="Cas | Manny"
        userImg="/assets/images/dummy.jpg"
      />
    </div>
  );
};

export default page;
