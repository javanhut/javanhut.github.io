"use client";
import React from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

class MovieClip extends React.Component{
    render() {
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