import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404: NextPage = () => {

  const router = useRouter();

  useEffect(()=>{
   router.push("/");
  },[]);

  return (
    <h2 className="">Página não encontrada</h2>
  )
}

export default Custom404;