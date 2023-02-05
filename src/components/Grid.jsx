import React from "react"


const Grid = () => {
    return (
        <mesh rotation={[90,0,20]}>
            <boxBufferGeometry attach="geometry" args={[5,3,2]}/>
            <meshLambertMaterial attach="material" color="purple" />
        </mesh>
    )
}

export default Grid