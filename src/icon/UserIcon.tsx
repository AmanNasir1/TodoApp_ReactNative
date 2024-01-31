import React from 'react'
import Svg, { Path, Rect } from "react-native-svg"

const UserIcon = () => {
    return (
        <Svg width="32px" height="32px" viewBox="0 0 24 26" fill="#5F33E1" >
            <Rect
                x={64}
                y={176}
                width={384}
                height={256}
                rx={28.87}
                ry={28.87}
                fill="none"
                stroke="#5F33E1"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <Path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#5F33E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#5F33E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default UserIcon