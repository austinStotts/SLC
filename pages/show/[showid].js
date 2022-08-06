import { useRouter } from 'next/router'
import Header from "../components/header";
import Footer from "../components/footer";
import ShowImage from './showImage';
import shows from "../map.json";
import Axios from "axios";
import { Component, useState } from 'react';

import ShowPage from "./showPage";



export default function Show (props) {

  const router = useRouter();
  const showid = router.query.showid;
  console.log(router.query)

  return (
    <ShowPage showid={showid}/>
  )
}

