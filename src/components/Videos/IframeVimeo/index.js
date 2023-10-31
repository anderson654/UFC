import React from "react";
import { View } from "react-native";
import { Vimeo } from "react-native-vimeo-iframe";

export default function IframeVimeo() {
    const videoCallbacks = {
        timeupdate: (data) => console.log('timeupdate: ', data),
        play: (data) => console.log('play: ', data),
        pause: (data) => console.log('pause: ', data),
        fullscreenchange: (data) => console.log('fullscreenchange: ', data),
        ended: (data) => console.log('ended: ', data),
        controlschange: (data) => console.log('controlschange: ', data),
        
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Vimeo
                style={{ backgroundColor: "black" }}
                videoId={'712158285'}
                params={'api=1&autoplay=0'}
                handlers={videoCallbacks}
            />
        </View>
    )
}