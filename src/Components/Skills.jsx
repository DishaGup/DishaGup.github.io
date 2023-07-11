import { Box, Image,Flex, SimpleGrid,Text, GridItem } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import { context } from "../utility/ContextProvider";




const arrtechstack=['https://th.bing.com/th/id/OIP.eQRqVTzi6ep_wZku3iDmEAHaIZ?pid=ImgDet&rs=1','https://nazmins28.github.io/img/nodejslogo.png','https://nazmins28.github.io/img/React-icon.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png','https://nazmins28.github.io/img/htmllogo.png','https://th.bing.com/th/id/OIP.gHXp-52eTTirgdriSMbb0AHaHa?pid=ImgDet&rs=1','https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png','https://static.cdnlogo.com/logos/m/30/mongodb-icon.svg',
"https://static.cdnlogo.com/logos/p/83/python.svg",
'https://www.vhv.rs/dpng/d/274-2749343_mongoose-js-logo-hd-png-download.png',
'https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png','https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp' ]
const arrtoolstack=['https://cdn.cdnlogo.com/logos/v/83/vs-code.svg','https://cdn.worldvectorlogo.com/logos/postman.svg','https://yt3.ggpht.com/a/AATXAJxYGxtZ8ZffTsTQSgxIS8MaYflyYvmve7IaGQ=s900-c-k-c0xffffffff-no-rj-mo','https://cdn.cdnlogo.com/logos/n/91/netlify.svg','https://pngimg.com/uploads/github/github_PNG80.png','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACMCAMAAABmmcPHAAAAM1BMVEX////LODfLNjXOREPNQD///PzHFhTORUXLMzHKMzLLLy7RUlHGEQ/HGRfNQkHQT0/HDAhqMq7GAAACcElEQVR4nO3d21LjMBAAUa1tCAnE7P9/7e4zGttyzaS5dT9LjHRIFVXk1v4YUvvsA/yWhIYSGkpoKKGhhIYSGkpoKKGhhIYSGkpoKKGhhIYSGkpoKKGhQuipuJ8yI3OWCHpaigsmTyswo3hE5iwR9HRpxV36yffqGWs3Y1qrZ4wW3DeEnqsHz/3g5+oZ/cNoWqpnjBbcV+hHJDSU0FBCQwkNJTSU0FBCQwkNJTSU0FBCQwkNJTSU0FBCQwkNJTRUOfTt8rH5dXDwMPTr3A25Resy0O/djPk9Wpe4bw76rXui/RpeLgO9XLshb+G6BHQ/I75H4r456OfBvRno0b0p6MG9ifsKfWav0E3orcFCCy200EIfnlnoM3uFbkJvDRZaaKGFFvrwzEKf2St0E3prsNBCCy200IdnFvrMXqGb0FuDhRZaaKGFPjyz0Gf2Ct2E3hostNBCCy304ZmFPrNX6Cb01mChhRZa6EdCr/2bhYR+BPRye/nY33Cd0F//DZ1Cn0joeLDQQgu9m9DxYKGFFno3oePBQgst9G5Cx4OFFlro3YSOBwsttNC7CR0PFlroLwh9/2XQifvGXxzZfQTnRsHPC/cG6zKfTZo6S/E9Rtflvgp1dG+wLPNyg9RZiu8xvO6zvtw38wKab5nQUEJDCQ0lNJTQUEJDCQ0lNJTQUEJDCQ0lNJTQUEJDCQ3VRv85nimYm4ImzlwdAh1Y3Uehg+eFkCNX156ArgHWuowV/pKIQxc3+sDKFEFnns8rfwb9p/T0UvsHTeiNhIYSGkpoKKGhhIYSGkpoKKGhhIYSGkpoKKGhhIYSGkpoKKGhhP7fP8DIilv0a9Z/AAAAAElFTkSuQmCC','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///+STpaQSpSPR5OQS5SNRJHUu9WYVpuNQpHfzOD59Pn69/q5k7z8+vz38ffq3ero2emtfbDu5O+bXZ/FpMfaxdueYaKUUZiYWJyodKujaqe3j7rx6fGKPY6sea/Bn8TTttS2ibjOsM+ha6S2h7m1hbi1i7i9mb/GqMfZwtuhZqXQs9KndKqre665jbuNi3b7AAARf0lEQVR4nM1d13riOhAGSW4Yd4wNOPQEluzh/R/vmJCCmq0yJvvf7ZdF0ljSdM2MRsMiiqJJHmxnp916eZkXdVVVdTG/LNe702wb5JP27wOvYDiEcZMH593B8198B2OEECHjOwhp/4Wx0/7FO+zOQd7E4W8vVxOTPC03rxfckoa+yBKDoJZQfHndlGk++e1lqyIP3NPa8x2EOml7BEKO761PbpD/9uL7kWxPWYH7dk6ym7jITtvkt0noQr5vr50JdQ9Uthdz/4/uZLjNisqCuh8qqyLb/nucJz32MhUdIrFzTH+bpAdEjbv0MRB1X8D+0m3+DVk5SWeFr8421YH8Ypb+vgSJg1PtQ51OFsSvT0H8q/SF5arGQ9H3QSOuV+Uvcp1yV4BxFymNqNiVv0RfmtWD03ensc5+g7HGV0XpQNBNz0Yfmvc30BcUh8DXZ1/H+L3qFw83QsZecTmsr5u9G6StCTGJRtGkNTrSwN1vruvDpfDGD0aHHLh6fyaNYbBwehbVfnZUH7LVzE0b+UBRk7qzVXaoUe+BIM4ieBrLSTY9G0iwX6+n5z+p2meP0z/n6br2e7gyrjbP0cpDt3sDCXbmu32Q6MnqSRLsd3Onk8h2G90nbGM+9boUGOTX0zLpOJgdaJJyWneqR8ibDm53BIsOttDasVnZ2Chak6bMWttZvo1kEYDRIkK09aT0EeQUMwh+F88KR853iLcdUB9vjlIVFKHiCPd1g2Mh9YEQ/2h2CRSQzh0pfZcVrNqRri5SGp35MCpO7I4lUyK03MDfjuC0lNGIxu4A4j+fjsUnFOHleZBvGqXnJRbTSMbwPDXJJDzUqd/zoa5+lL/X4otBSAYs/ZOFmD7iXwd1NUTNVcLcyAKUxGQuPC3EnwdG9KXuXtUvGgVzMY1oDkhiIFQ0Wtv0bEJfNMMvvuO/oK3i/z+L7WzkQ7G3qBR+RFS/GX3E9EutJf5akV0kb7XwE/slyA0Jt5WIQHxwjYZLDz92CVYlceQeRNYMqSA8x5OzSNNGaGV2C/LscaloqirXkpVIOCLvbO1uDM+VYGRc781EbrihRiO18lWK97VgG1F1ttxFsaqNl2YstOVZzInHG+U9iIKliERbRbwU7aCTmaq+ISt10EJDN2kygfhHlZWvMRBwUYRmxuO9srtACq3rPBNcRmIjNBIRgYX5gOULtzxPj2EFhYhEY9Ev0mTQwVzLbvjxNPfwJmwEazLVbpKFYDALhTdaiT6Yro2QZIJRzHTUPBMc0VcLXfBPLRhQn2klr4KDmhkYU/FUsJ6dhf9AaJ7glb5cbXYCEpVVhx+4vMHr7Cyka3gSqZbOzGDIcMdJDTLW1iFTXhl1rvqL+UEpNIF8M+X2ypNYaXJAAdtDO6PFfEJiYWJDcc0fVDTXukHRkftIyOaIjsKV2BtRGQrXkCfROeqob1ufI/DVyknpStwtxn7Bhueo/lb95wGnbtvIwRa5JNaBDubqCCcXiad8IHKOr1us5AM7STQOmcixTyScdkNU1fhwyv4UFXYO0a3Me43fLDy7Kaejkqkar3D5M2rn8kkuUgpPNsZdwJ9TJeHDq6OOubl0Qyg7oy2FZ6uRZyz/UlJQww37M5xZLWO0r2QEjsm73dAZ++2cTf85Zf0MY7y0C2alS3nAU+1UydGwjg3SL2DjBfMbpO4sEg+4kmc1kLmtTzdgHal40ce73rmjvbfy9ERbKX3t2EvboFW055hGz8GPuTNqYN48Ii86siu0/FCSBbNHhFTdC76yZ9RS1I/WXZk3KLMPdHKCH3eaQCn7QWpLVjDjFFxqMW92o3/AZV0HuOvos7oeslxC3p07hU52w9/xxi66Q7qVzOfQ9oQxmKx7sqPtVIlPJMxVJ7XU6OSMLt9O5Ridu+kbe5YC/2sa5irITdmS/Rhzu5BAKtVHP8cvYJJ/ozl79CTjxqw/0zLGKvKJMV8QKIcjYDdRIuIC5hY6V7stfO/Li0VLoJSRiPFMSYJ2kxPN+FBtqY925jB+LOQAlUvZMMobPomCdimzhfjdagubTll//4Z/bSZ4RPROT0ZqwfmPGOFse4RYBiei0Mo/SSFnDBh/xm9PwzBSZJRJ8o1UkiNGTQEi8D8QnWkKScFfMZfdQis+F3UYhT/L2NtMQYO1QgXOdOZ/oI3VhJx/QYg/VnNQiJiwCFqy/yNltvBiJQtZwSMBZEpjwKgXPjv4kREVK5vZ4r9qr/VAc30ZfQUf6T9PGJFp5yDdKBFIKps5OKQMq3RokbhltvAoGUYJpSCdQAA0t6KIw5HZxC31V8YwdGxuYcP5+CQUrq0I4hDQ55A2ExlvCiosJgpnik9mu90NBqCPDikeVRbGaWvl5OYDVxJYutJ5MCKqehS3jJ3jWziIQhVZf58FUBx+IGYk3oNSmBzoQ2rjxme9dXK8gGf409yEPPgJtx79cS1M74BL7JJTCP5moqQ30dt+/4W2DImFYRjPFS/h7UMC0ESjoVUp/K3Z5/Tu4qlx3m3EBVflIB4MWQ+YTKmt+okwB7SscMwPqSixSwa0gCHrESXFTcl3GqVLH1Lzdwy5INdPCgxn/34joS8J/jShGAcNNk5eC9X00U84dvaZEA0dbv5y1+S0Z9o3tku54Go3hZYhESH2FDdFn68dUkoJ0UifZ5D3OIAZwIvDEWuYEu8+R8nQbXgNw2m/74micIiXoAlzHj+YJpOaYCwrSiXHxcMHHqJGAiMv7okLMZ0hhgyjMY2GoPiY5zLI03ra54Zeb5+xoa4PqQ314TfdLZy/uyoo9coM0RIZXW5XgY5iEsNcfFe7jlLl1V4/6uKS6bxASmkjAt+YKR24MQyt58vBKikhVGkkE8S0BvoRPjtTx8vMyRaxkWZYIKxOIu1yc1quEjFZZ0aG97s8sQsEBCmzpRn1Q7yLRhGdrWGUhyV6yAILRznE4VK2Ljq0FNIajYmjNJ4q2/WmQIUqR6XdpsSLRhOa0VwMNA13aPpaeKomHS38xv5klFNuB3LQJzAXPzSARaVsD9Di4iVnhYWBl1bRAWwJZQ64ZsXFlhYW+l7adz2F2xCVsjJ5pcXFdjSjXRvaZmlPYhcU1F8a0GY4njF+NqRr/oZ9iV0w0NDT6YxTfGLc3UhXHHYkcUNCw/FAa8hox1xM3XcH6eUZlRPHaKluatFvFFrWSasjSE/gx8Pqo0bLSmmCliN6E4heEk1XEjcgtJxjOR28uIzm1FhES6VhMzsHAn7Vsegaek3zUUFTqDNW/BxZjy5avrGYprAY1TSFOi6D/VNkveJjpm9MaArrEc3tiUaql0piFwCQpvMvoldVsRRqjDS4UXgnUPtNRg+F6nv4pDOqXbqE20PTexg/w2a6Oag1CeTvoSkvdZ+iriFPOweU46V0xE1dHgrKeMCDOPpBFFoekrmxTtOXiA8CbBDp43SapaFe+gyNFB8NokScXmpqWwgLecACLU0CfZxtYWofDs9pSGUUJebsQ1MbfzK4tNBVZj7B2fjGfpq9evaTGYGGjzs5P425r63/yYgNiGcYyOR8beb+0ugoKlcHBePHGJy/1MLnHe3/ergPpgQav4nifN5WcYvcPZ+mnXgzY7mEGBeu4eIWtrGnaNKFMDej0DFOW+JjTxDxww40RjYW3hmnogjihxAxYDkSE5li88KajwEzcXxs9ViGR2myh9qe9wfQNRZucXyYXAwp9pppNh9rEL4AVYMoFwMmn0aGjb64sKpFLsqnAcqJkuCoTWFHwQAFiHKigPLaJNDJGv5cgFXtKFFeG1Ruohjafn+0tGEEwtxEqPxSMbQP6YvV9ML8UrAcYREmuuLQt5PH4hxhsDxvAXQFPs7s6jiI87zBcvUF0BT4aG5XBECSqw/33oKHXiqKoWfmB5L3FoBvZjjoCXz1RgISyN7MwL174qAl8NFfy9MjffcE+HaNhY7At1enpG/XIN8fMtAR+HY1AG6Qvz+EfENKQ+OQ3oxVS8jfkEK+A6YQq1NINFN5RLPJ3wGDvuV+RKJOIbafs+stN+R7/EcEyhTiV/snNF3v8UFrKjxAWkCYBUR7qs6aCrB1MX6gWl7ByjPzhe66GCFobZNvqD58dgCUDK62CXPsQevTfEPQbUO4gxBd4nrq0wDXGPrCQUng23lmPtFbYwi4TtQdSvWwWkDMxbyy5utEAdf6uqNRehmMFgB6sEKtL+B6bfdpldRSe2VGrV4bdM29G5RKfr1AuC9Vau5B1028gY4DiYEXAO+Bleomgte+bHHuDx6iCqLCJ1v70hFHPqDrl7aWdf8WIghbVLF+KXgNWpXsPpsw0w9Ua9CC1xGWtib5WcpfiDOqXEcYvBZ0/F/PHiKYUsnqtaCh63nnveUTrcJMX9Co5w1dk72rs8XH6AcQb4lOTXbguvpBT1mszgL4ytCrqw/bG6GnahSMN0izNwJsf4ttp8DHIIUhtftbgPYoOXddQ5jG4fo9SkD7zHSGZQhI8pVBnxnAXkFRV6kFcdV0XZj0CgLs9xS/ySnEEJ4Zw35PcD27crkfSvfFnQRmPbvg+q6Juu1+DQhSjc6079oo5LrImvXOkzfwQP9BKDPmvfOg+h9KfRgarRg7YNH/EKqHZSnZQZh8FqselkB9SCW9R1tlBsCisOxDCtNLVpJaSioAQWHdSxaiH3AoUWlASkBb9wMWPtTW7OksaQsIEWYS9XTWb7Rg3Ze7EQp8gHZ5QH257XurC0vuQnhmoHqrt0qXgMRXdS4h7sStojf2jMtz0TEx6yss0ro05GIqcOmjtbUfnZeDFhFW0S4g5Vx+1uczBlFmROX9LIzpxBcc1EJxlawjegzhmQkEzUGIbyFgAxGJSG2dPIXoYr6SO2ZIRKDVwShFjyidTOU2pewvUWV5CZtMoCUh7cIZNKKtqB8HXgb9GlLCFsmyzJmJAtZl8TGot7XUcsOzaBdx3V/5lo1HYlXjTYx4XwsJPFuLn8lZ1OUPoVXv9aZd3thOmUlWgit4IxBABwy3wmLy+NB36KLZg+KH7BpUuweRkkuqLUjJ7KgUcNSbI/WtZxvDE/76IbbKcE7eWLfonUC/hIhd3RD4wglQ0ZeR4mIfEYTwi1GFi09E5wIJP7F1jPoBYh2z/YjzPqa6fV3OF1eLIFMUzIVHCCgs8I2Ec0590XhtoE6KCFFzFdNn9w5ThCQj4pmc+j0fisYof68lrhBi4BrrQT6VlGdDeHkeolVFqxWdl1jsciXjKVCj3UfE7lji4UVouYF80ndHsFmKRODHhGN3iNYR7Tedyx5mI3RZwe5jurrI6Bs7UL2geTRHybW/0Vgc4fYxOBZS+oh/HKK7ySfEivjnzMgpZhCHJ54VjlAA3qexVrV7ECzkk4+R42dlY6MpTpoy8x15dJyQBfyNZ5BPO/ttI7+elonZMWqScloL1afv0b0heCiL0F04XVkkBDvz3T5I9LZykgT73dzBnSM7C3eQ5jQckk3VnZJHsF+vp+c/qdq1jNM/5+m69jvJa7X3agMu5WUIg+5tvBGJMKoP2Wrmpl1Htknd2So71O3/7hvQWQTP2cA74veebfxYVGtWjL3iclhfN3s3SPMmnkSjaBI3eRq4+811fbgUXitoJAohvYHvwwj5DhqvvZ/9azdbQu8gX0DfUBwCX59N3w1pVqst0BIE1dlgSkwPyp3YNoWlr9gBPp/XRViu6h4OaEmfU6/KZzIYHnFwqqXKqjV9fn0KfuMC0piks6JTETEF8ouZXtO1wRA17tKHLhOJ/aU7qINEF+nRUZQeCmilg3P8LfYpx2SbFRUAkQRVRbb9N04nh3y/O3g2W9lunnfY7Z9gP5gj2Z6yAptQ2VKHi+y0fZp2bY48cE9rr7Vj1Rksam1nb31yg3969x4xydNy83rBfi/7uTEVH19eN2Wa/6N3T4qwNSGCc3sx/ZeWUExp2TfVG7ekvfjttTsHrdHxu3qLDaIomuTBdnbarZeXeVFXVVUX88tyvTvNtkE+af8+8Ar+B6QoHscs+MzRAAAAAElFTkSuQmCC',
"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/01/30023721/openai-chatgpt-elon-musk-artificial-intelligence.png?tr=w-1200,h-900",]


function Techstack() {
const {textcolour}=useContext(context)

  return (
<SimpleGrid minChildWidth='150px' justifyContent= "center" paddingBottom= "40px" g={8} className={textcolour} >
{arrtechstack.map((el,i)=>(
  
   <GridItem xs={4} md={2} key={i+1}  className='skills-card'  >
   <Text fontSize='16px' className="skills-card-name" opacity='0' color='white'  >html</Text>
 <Image h='auto'  w='99%' className="skills-card-img" src={`${el}`} />
             </GridItem>
            
))}
</SimpleGrid>




  );
}

function Toolstack() {
  return (
    <SimpleGrid minChildWidth='150px' justifyContent= "center" paddingBottom= "40px" g={8} >
    {arrtoolstack.map((el,i)=>(
      
       <GridItem xs={4} md={2} key={i+1}  className='skills-card' >
      <Text fontSize='16px' className="skills-card-name" opacity='0' color='white'  >html</Text>
     <Image h='auto' objectFit='cover' className="skills-card-img" src={`${el}`} />
                 </GridItem >
                
    ))}
    </SimpleGrid>
    
  );
}



const Skills = () => {

const {textcolour}=useContext(context)


  return (
    <Container id="skills" fluid className="about-sections"  style={{width:'90%',margin:'auto'}}  >
   
    <Container mt='100px' >
    
      <h1 className="project-heading">
        Professional <strong className={textcolour}>Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className={textcolour}>Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </Container>
  </Container>



  )
}

export default Skills