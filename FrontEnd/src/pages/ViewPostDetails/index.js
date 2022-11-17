import React, { useEffect, useMemo } from "react";
import {useParams}from "react-router-dom";
import PostDetails from './PostDetails/index'
import dataPost from "../../data/Postnew";
export default function Index() {
 
    let {ID} = useParams();
    const data = dataPost.filter(p=>p.id === Number(ID) )
    return (<PostDetails data={data}/>)
}
