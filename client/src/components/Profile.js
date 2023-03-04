import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ProfileDetailsRequest, UpdateProfileRequest } from '../apiRequest/apiRequest'
import { ErrorToast, getBase64, IsEmpty } from '../helper/formHelper';

const Profile = () => {
  let fullNameRef,userNameRef,userImgRef,userImgView=useRef();
  let navigate = useNavigate();

  useEffect(()=>{
    ProfileDetailsRequest()
  }, [])
  const ProfileData = useSelector((state) => state.profile.profile);

  const previewImage = () =>{
    let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            userImgView.src=base64Img;
        })
  }

  const updateProfile = () =>{
    let fullname=fullNameRef.value;
    let username=userNameRef.value;
    let photo= userImgView.src;

    if(IsEmpty(fullname)){
      ErrorToast("Fullname required !")
    }
    else if(IsEmpty(username)){
      ErrorToast("Username Required !")
    }
    else{
      UpdateProfileRequest(fullname,username,photo).then((result)=>{
        if(result) navigate('/')
      })
    }
  }

  return (
    <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className='col-md-12 p-2 text-center'>
                                <img  ref={(input)=>userImgView=input} className="icon-nav-img-lg" src={ProfileData.photo} alt=""/>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-6 p-2">
                                        <label>Full Name</label>
                                        <input key={ProfileData.fullname} defaultValue={ProfileData.fullname} ref={(input)=>fullNameRef=input} placeholder="Full Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>User Name</label>
                                        <input key={ProfileData.username} defaultValue={ProfileData.username} ref={(input)=>userNameRef=input} placeholder="User Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>User Email</label>
                                        <input defaultValue={ProfileData.email} readOnly={true} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Profile Picture</label>
                                        <input onChange={previewImage}  ref={(input)=>userImgRef=input} placeholder="Profile Picture" className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <button onClick={updateProfile}  className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile