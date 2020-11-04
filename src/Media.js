import React from 'react'
export default function Media(props) {
    
    const { media_type, hdurl, url } = props  

    if (media_type === 'image'){
        return (<img src={hdurl} alt='APOD' width='300' height='200' />);
        } else if (media_type === 'video') { return(
        <iframe src={url}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            title='video'
        />
    )}
}
