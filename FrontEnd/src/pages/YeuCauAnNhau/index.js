import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { Grid } from "./Grid/index";
import { GETLichAnNhau } from '../../data/LichAnNhau/index'
import Modal from './cpn/Modal'

export default function Index() {
  const [LichAnNhau, SetDataLichAnNhau] = useState();
  useMemo(async () => {
    GETLichAnNhau().then(rs => SetDataLichAnNhau(rs));
  }, [])
  return (
    <>
      <Modal></Modal>
      <br></br>
      <Grid LichAnNhau={LichAnNhau}></Grid>
    </>

  )
}
