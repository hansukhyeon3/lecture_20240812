import React from 'react'
import { PiUserCircle } from 'react-icons/pi'

const Avatar = ({userId,name,imageUrl,width,height}) => {
  let avatarName = ""
  if (name) {
    const splitName = name?.split(" ")
    if (splitName.length > 1){
      avatarName = splitName[0][0] + splitName[1][0]
    }else{
      avatarName = splitName[0][0]
    }
  }

  return (
    <div
      className={`text-slate-800 rounded-full font-bold relative`}
      style={{width:width+"px", height:height+"px"}}>
        {
          imageUrl ? (
            <img
              src={imageUrl}
              width={width}
              height={height}
              className='overflow-hidden rounded-full'
            />
          ) : (
            name ? (
              <div 
                style={{width:width+"px", height:height+"px"}}
                className={`overflow-hidden rounded-full flex justify-center items-center text-lg bg-yellow-200`}
              >
                {avatarName}
              </div>    
            ) : (
              <PiUserCircle size={width}/>
            )
          )
        }
    </div>
  )
}

export default Avatar