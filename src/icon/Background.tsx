import React from 'react'
import Svg, { Defs, } from "react-native-svg"

const Background = () => {
    return (
        <Svg width="100" height="50" >

            <Defs>
                <linearGradient id="MyGradient">
                    <stop offset="5%" stop-color="#f8f6fe" />
                    <stop offset="95%" stop-color="#faf9e1" />
                </linearGradient>
            </Defs>

            <rect width="100" height="50" />
        </Svg>
    )
}

export default Background
