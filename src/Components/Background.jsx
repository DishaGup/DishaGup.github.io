import React from 'react'
import { Flex,Icon } from '@chakra-ui/react'
import {FaAddressBook,FaFreeCodeCamp,FaGithubSquare,FaInstagramSquare,FaItunesNote,FaLinux,FaNodeJs,FaPaypal,FaQuora,FaStackOverflow
    ,FaViber,FaWhatsapp,FaWindows,FaVuejs,FaYoutube,FaAtlas,FaBriefcase,FaCameraRetro,FaCoins,FaLayerGroup,FaPalette} from 'react-icons/fa'
import {motion} from 'framer-motion'

let arrofimagesinbg=[FaFreeCodeCamp,FaGithubSquare,FaInstagramSquare,FaItunesNote,FaLinux,FaNodeJs,FaPaypal,FaQuora,
FaStackOverflow,FaViber,FaWhatsapp,FaWindows,FaVuejs,FaYoutube,FaAtlas,FaBriefcase,FaCameraRetro,FaCoins,FaLayerGroup,
FaPalette]
let arrofcolor=['orange','blue','purple']
const Background = () => {
  return (
    <motion.div
    //transformTemplate={template}
    animate={{ x: [-50,50, 150, 50,-50], opacity: 1, scale: 1 }}
    transition={{
        duration: 5,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
    }}
    //initial={{ opacity: 0, scale: 0.5 }}
    //whileHover={{ scale: 1.2 }}
    >
    <Flex> 
        {
            arrofimagesinbg.map((item)=><Icon aria-hidden={true} m={15} _hover={{color:`#9bf6ff` }}  boxSize={37} as={item}  />)
        }


    </Flex></motion.div>
  )
}

export default Background


// <div class="row" style="color: rgba(0, 0, 0, 0.5);">
//             <div>
//                 <i class="fa fa-address-book" aria-hidden="true"></i>
//                 <i class="fa fa-battery-full" aria-hidden="true"></i>
//                 <i class="fa fa-address-card-o" aria-hidden="true"></i>
//                 <i class="fa fa-paper-plane" aria-hidden="true"></i>
//                 <i class="fa fa-bath" aria-hidden="true"></i>
//                 <i class="fa fa-search" aria-hidden="true"></i>
//                 <i class="fa fa-area-chart" aria-hidden="true"></i>
//                 <i class="fa fa-money" aria-hidden="true"></i>
//                 <i class="fa fa-bluetooth" aria-hidden="true"></i>
//                 <i class="fa fa-facebook-square" aria-hidden="true"></i>
//                 <i class="fa fa-steam" aria-hidden="true"></i>
//                 <i class="fa fa-snapchat-square" aria-hidden="true"></i>
//                 <i class="fa fa-twitter" aria-hidden="true"></i>
//                 <i class="fa fa-windows" aria-hidden="true"></i>
//                 <i class="fa fa-telegram" aria-hidden="true"></i>
//                 <i class="fa fa-linkedin-square" aria-hidden="true"></i>
//                 <i class="fa fa-internet-explorer" aria-hidden="true"></i>
//                 <i class="fa fa-github" aria-hidden="true"></i>
//                 <i class="fa fa-html5" aria-hidden="true"></i>
//                 <i class="fa fa-joomla" aria-hidden="true"></i>
//             </div>
//             <div>
//                 <i class="fa fa-address-book" aria-hidden="true"></i>
//                 <i class="fa fa-battery-full" aria-hidden="true"></i>
//                 <i class="fa fa-address-card-o" aria-hidden="true"></i>
//                 <i class="fa fa-paper-plane" aria-hidden="true"></i>
//                 <i class="fa fa-bath" aria-hidden="true"></i>
//                 <i class="fa fa-search" aria-hidden="true"></i>
//                 <i class="fa fa-area-chart" aria-hidden="true"></i>
//                 <i class="fa fa-money" aria-hidden="true"></i>
//                 <i class="fa fa-bluetooth" aria-hidden="true"></i>
//                 <i class="fa fa-facebook-square" aria-hidden="true"></i>
//                 <i class="fa fa-steam" aria-hidden="true"></i>
//                 <i class="fa fa-snapchat-square" aria-hidden="true"></i>
//                 <i class="fa fa-twitter" aria-hidden="true"></i>
//                 <i class="fa fa-windows" aria-hidden="true"></i>
//                 <i class="fa fa-telegram" aria-hidden="true"></i>
//                 <i class="fa fa-linkedin-square" aria-hidden="true"></i>
//                 <i class="fa fa-internet-explorer" aria-hidden="true"></i>
//                 <i class="fa fa-github" aria-hidden="true"></i>
//                 <i class="fa fa-html5" aria-hidden="true"></i>
//                 <i class="fa fa-joomla" aria-hidden="true"></i>
//             </div>
//         </div>