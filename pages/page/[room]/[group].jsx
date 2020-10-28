'use strict'

import React from 'react';
import Head from 'next/head';
import Mobile from '../../../layout/mobile.jsx';
import St from '../../../styles/page/Group.module.css';
import ImageBlur from '../../../components/image/blur.jsx';

import { useLink } from '../../../hooks/index.js';

const Group = React.memo( () => {

  console.log("Render Group");

  const { group } = useLink();

  return(    
    <React.Fragment>
      
      <Head>
        <title>Page Candidate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Mobile>
        <div className={St.row1}>
          <span className={St.txtHead}>Position <span className={St.txtSideHead}>{group}</span></span>
        </div>

        <div className={St.row2}>
          <div className={St.wrap}>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemilo.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"/pemiloSmall.svg"} ></ImageBlur>
            <ImageBlur src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff1%2FIcons8_flat_linux.svg%2F600px-Icons8_flat_linux.svg.png&f=1&nofb=1"} ></ImageBlur>
          </div>
        </div>       

        

      </Mobile>

    </React.Fragment>
  );

});

export default Group;