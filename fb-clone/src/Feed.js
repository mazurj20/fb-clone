import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'



function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            

            <Post
                profilePic="https://avatars1.githubusercontent.com/u/53837898?s=400&u=7e3982692d9bb92377c5d828f332509454b508df&v=4"
                message="hi"
                timestamp="17:38"
                username="mazur"
                image= "https://www.aisc.org/globalassets/nsba/prize-bridge-awards/2014/sakonnet_river_03.jpg"          
            />
            <Post 
                profilePic="https://avatars1.githubusercontent.com/u/53837898?s=400&u=7e3982692d9bb92377c5d828f332509454b508df&v=4"
                message="hi"
                timestamp="17:38"
                username="mazur"
            />
            <Post />
            

        </div>
    )
}

export default Feed
