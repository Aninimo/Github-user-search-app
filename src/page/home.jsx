import React from "react"
import React, { useContext } from "react"
import Header from "../components/header";
import UserDetails from "../components/userDetails";
import UserNumbers from "../components/userNumber";
import UserPicture from "../components/userPicture";
import MoreInfo from "../components/moreInfo"

import "./style"
import { context } from "../context

export default function Home(){
  const ctx = useContext(context)

  return(
    <div className="container"> 
      <Header/>
      {ctx.userData?.name ?
      <React.Fragment>
        <div className="body">
          <div className="header">
            <UserPicture url={ctx.userData?.avatar_url} alternative={ctx.userData?.login}/>
         
            <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio}/> 
          </div>
          <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
        
          <MoreInfo locat={ctx.userData?.location} twitter={ctx.userData?.twitter_username} email={ctx.userData?.email} company={ctx.userData?.company}/>
        </div>
      </React.Fragment>
     :undefined}
    </div>
  )
}
