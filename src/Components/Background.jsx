import React from 'react'
import { Flex,Icon } from '@chakra-ui/react'
import {FaAddressBook,FaFreeCodeCamp,FaGithubSquare,FaInstagramSquare,FaItunesNote,FaLinux,FaNodeJs,FaPaypal,FaQuora,FaStackOverflow
    ,FaViber,FaWhatsapp,FaWindows,FaVuejs,FaYoutube,FaAtlas,FaBriefcase,FaCameraRetro,FaCoins,FaLayerGroup,FaPalette} from 'react-icons/fa'


let arrofimagesinbg=[FaFreeCodeCamp,FaGithubSquare,FaInstagramSquare,FaItunesNote,FaLinux,FaNodeJs,FaPaypal,FaQuora,
FaStackOverflow,FaViber,FaWhatsapp,FaWindows,FaVuejs,FaYoutube,FaAtlas,FaBriefcase,FaCameraRetro,FaCoins,FaLayerGroup,
FaPalette]
let arrofcolor=['orange','blue','purple']
const Background = () => {
  return (
    <Flex> 
        {
            arrofimagesinbg.map((item)=><Icon m={15} _hover={{color:`#9bf6ff` }}  boxSize={37} as={item}  />)
        }


    </Flex>
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