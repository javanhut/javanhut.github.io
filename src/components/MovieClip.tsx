"use client";
import React from "react";
import YouTube from "react-youtube";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

class MovieClip extends React.Component{
    render() {
        const options ={
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1,
                controls: 1,
            },
        };
        return < YouTubePlaylist
            apiKey="AIzaSyAuR0yWCr6p3SrfQxPGmsyigVK7HdMK-H4"
            playlistId="PLGT0A3lw6LsoAou6iyQ3w9VzWOtRaJ2Uc"
            uniqueName="My Youtube Playlist"/>;  
    }
    _onReady(event: any) {
        event.target.pauseVideo();
    }
}

export default MovieClip;