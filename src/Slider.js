import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
    return (
        <div>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2500}
                bullets={false}
                buttons={false}>
                <div data-src="https://c0.wallpaperflare.com/preview/630/344/45/sneakers-nike-new-balance-sneakerhead.jpg" />
                <div data-src="https://c4.wallpaperflare.com/wallpaper/293/550/357/adidas-background-desktop-wallpaper-preview.jpg" />
                <div data-src="https://www.propermag.com/wp-content/uploads/2018/04/100_NB_990V4_18530_RT-1024x683.jpg" />
            </AutoplaySlider>
        </div> 
)
}

export default Slider