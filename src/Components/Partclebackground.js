import React from "react";
// import Particles from "react-particles-js";
import  Particles from 'react-tsparticles'

import particleconfigu from "./config/particles-config";

export default function ParticleBackground(){
    return(
        <Particles params={particleconfigu} >
        </Particles>
    )
}