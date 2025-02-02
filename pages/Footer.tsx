import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Button, TextField, Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function FooterSection()
{
      
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
    
        <div className="mx-auto py-14 sm:px-8 md:px-32 lg:px-44 text-white h-[300px]">
            <div className='flex flex-row items-center justify-between'>
                <Box>
                    <Typography fontFamily={"var(--lucidity)"} fontWeight={600} fontSize={40} color="white">
                        HACKAI
                    </Typography>
                    <div className='w-[450px]'>
                        <Typography fontFamily={"hind siliguri"} fontSize={17}>
                            Be the change you want to see in the world!
                        </Typography>
                    </div>
                </Box>
                <div className='flex flex-col'>
                    <button onClick={() => window.open("https://www.aisutd.org/", "_blank")}>
                        <Typography fontFamily={"hind siliguri"} fontWeight={600} className='ml-10' fontSize={25} color="white">
                            AIS Website
                        </Typography>
                    </button>
                    <div className='flex flex-row items-center justify-between'>
                        <button onClick={() => location.href="mailto:account@aisociety.io"}><EmailOutlinedIcon></EmailOutlinedIcon></button>
                        <button onClick={() => window.open("https://www.instagram.com/utdais/", "_blank")}><img src='/instagram.svg'/></button>
                        <button onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")}><img src='/youtube.svg'/></button>
                        <button onClick={() => window.open("https://www.linkedin.com/company/ais-utd/", "_blank")}><img src='/linkedin.svg'/></button>
                        <button onClick={() => window.open("https://discord.gg/tEfAAHpFAX", "_blank")}><img src='/discord.svg'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;
