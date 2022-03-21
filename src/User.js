import React from 'react';
import moment from 'moment';
import style from './User.module.css'
// import blob from 'blob';


import { useState, useEffect } from 'react';


export default function User() {
  const [img, setImg] = useState();
  const [UserName, setUserName] = useState( );
  const [UserShortName, setUserShortName] = useState( );
  const [UserGender, setUserGender] = useState();
  const [UserDob, setUserDob] = useState();
  const [UserPhone, setUserPhone] = useState();
  const [UserAdd, setUserAdd] = useState();
  const [UserJob, setUserJob] = useState();

  async function pen() {
    let response = await fetch("https://randomuser.me/api/");
     let data = await response.json();
     console.log(data);
      return data?.results[0];
   };
 
  useEffect( async function() {
      let alpha = await pen();
    //   console.log(alpha);
    //   let res = await alpha.picture.large; 
    //   console.log(res);
    // let imageBlob = await res.blob();
    // console.log(imageBlob);
    // let imageObjectURL = URL.createObjectURL(imageBlob);
      // setImg(imageObjectURL);
      setImg(alpha.picture.large);
      setUserShortName(alpha.login.username);
      setUserName(alpha.name.title+" "+alpha.name.first+" "+alpha.name.last );
      setUserGender(alpha.gender);
        setUserDob(moment(alpha.dob.date).format('DD MMM, YYYY'));
          setUserPhone(alpha.phone);
            setUserAdd(alpha.location.city+", "+alpha.location.state+", "+alpha.location.country);
              setUserJob(alpha.email);
               

  },[]
  );
   
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, []);
  return(
      <div  style={{backgroundImage: 'linear-gradient(to right, #fffbd5,	#913831)',

        height: '600px',
        width: '1000px',
        borderRadius: '10px',
        position: 'relative',
        top: '40px',
        left: '15%',}}>
        <div className={style.slide} ><div className={style.first}><img
        style={{width: 150, height: 150, borderRadius: 400/ 2, boxShadow: '2.55px 5px #888888'}}
        src={img} alt="icons" /> </div> <div className={style.second} style={{width: 500, height: 60, }}><div style={{width: 400,right: '25%', height: 30, backgroundColor: '#D4CAA3', borderRadius: 10, boxShadow: '2.55px 5px #888888', padding: 10 ,fontSize:'25px'}}>Name: {UserName} </div> </div></div>
        
         <div style={{width: 200, height: 60, paddingLeft:'10%'}}><div style={{width: 400, height: 30, backgroundColor: '#F6e8b1', borderRadius: 10, boxShadow: '2.55px 5px #888888', padding: 10 ,fontSize:'25px'}}> User Name: {UserShortName}</div></div>
         <div style={{width: 200, height: 60,paddingLeft:'10%'}}><div  style={{width: 400, height: 30, backgroundColor: '#F8F0C6', borderRadius: 10,  boxShadow: '2.55px 5px #888888', padding: 10,fontSize:'25px',}}> Gender:{UserGender} </div></div>
         <div style={{width: 200, height: 60,paddingLeft:'10%'}}><div  style={{width: 400, height: 30, backgroundColor: '#FFFDD1', borderRadius: 10,   boxShadow: '2.55px 5px #888888', padding: 10,fontSize:'25px'}}> Date of Birth: {UserDob} </div></div>
         <div style={{width: 200, height: 60,paddingLeft:'10%'}}><div  style={{width: 400, height: 30, backgroundColor: '#FFFDD1', borderRadius: 10,   boxShadow: '2.55px 5px #888888', padding: 10,fontSize:'25px'}}> Phone Number: {UserPhone} </div></div>
         <div style={{width: 200, height: 60,paddingLeft:'10%'}}><div  style={{width: 600, height: 30, backgroundColor: '#FFFEF2', borderRadius: 10,  boxShadow: '2.55px 5px #888888', padding: 10,fontSize:'25px' }}> Address : {UserAdd} </div></div>
         <div style={{width: 200, height: 60,paddingLeft:'10%'}}><div  style={{width: 600, height: 30, backgroundColor: '#FFFEF2', borderRadius: 10,  boxShadow: '2.55px 5px #888888', padding: 10,fontSize:'25px' }}> Email: {UserJob} </div></div>
         </div>
  )
}