import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Button, TextField, Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function WorkWithUsSection()
{
      
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="mx-auto py-14 sm:px-8 md:px-32 lg:px-44 text-white">
            
            <div className="mb-2 mr-14">
                <Typography fontFamily={"var(--lucidity)"} className="text-4xl font-bold">WORK WITH US</Typography>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <Box
                    sx={{
                        width: 500,
                        height: 300,
                        mt: 6
                    }}
                    border={2}
                    borderRadius={6}
                    borderColor="#FEF9EE"

                >
                    <Box
                        sx={{
                            width: 175,
                            height: 40,
                            mt:-3,
                            backgroundColor: "#FEF9EE",
                            ml: 5
                        }}
                        border={3}
                        borderRadius={10}
                    >
                        <Typography flexGrow={1} textAlign="center" fontFamily={"var(--cooper)"} fontSize={20} color="#B93648">
                            Students
                        </Typography>
                    </Box>
                    <div className='flex flex-col justify-around mt-5'>
                        <Typography fontFamily={"var(--cooper)"} className='ml-10' fontSize={25} color="white">
                            Interested in helping?
                        </Typography>
                        <div className='w-[450px] pt-3'>
                            <Typography fontFamily={"Hind Siliguri"} className='ml-10'>
                                If you're interested in becoming a volunteer or mentor, we're constantly on the lookout for individuals
                                to help make HackAI the best AI hackathon! Please fill out the form below.
                            </Typography>
                        </div>
                        <div className='flex mt-10 flex-row items-center justify-evenly'>
                            <Button onClick={() => window.open("https://coda.io/form/Volunteer-Mentor-Form_dBCSFvzl4RV", "_blank")} className='bg-[#FEF9EE] w-[140px] text-[#B93648] hover:bg-[#B93648] hover:text-[#FEF9EE]' variant="contained">
                                <Typography fontFamily={"var(--cooper)"} textTransform={"none"}>Volunteer</Typography>
                            </Button>
                            <Button onClick={() => window.open("https://coda.io/form/Volunteer-Mentor-Form_dBCSFvzl4RV", "_blank")} className='bg-[#FEF9EE] w-[140px] text-[#B93648] hover:bg-[#B93648] hover:text-[#FEF9EE]' variant="contained">
                                <Typography fontFamily={"var(--cooper)"} textTransform={"none"}>Mentor</Typography>
                            </Button>
                        </div>
                    </div>
                </Box>
                <Box
                    sx={{
                        width: 500,
                        height: 300,
                        mt: 6
                    }}
                    border={2}
                    borderRadius={6}
                    borderColor="#FEF9EE"

                >
                    <Box
                        sx={{
                            width: 175,
                            height: 40,
                            mt:-3,
                            backgroundColor: "#FEF9EE",
                            ml: 5
                        }}
                        border={3}
                        borderRadius={10}
                    >
                        <Typography fontFamily={"var(--cooper)"} flexGrow={1} textAlign="center" fontSize={20} color="#B93648">
                            Companies
                        </Typography>
                    </Box>
                    <div className='flex flex-col justify-around mt-5'>
                        <Typography fontFamily={"var(--cooper)"} className='ml-10' fontSize={25} color="white">
                            Interested in partnering?
                        </Typography>
                        <div className='w-[450px] pt-3'>
                            <Typography fontFamily={"Hind Siliguri"}  className='ml-10'>
                                If you or a group you represent are interested in partnering, please click below to view our Partner
                                Packet.
                            </Typography>
                        </div>
                        <div className='flex mt-16 flex-row items-center justify-center pt-6'>
                            <Button className='bg-[#FEF9EE] w-[170px] text-[#B93648] hover:bg-[#B93648] hover:text-[#FEF9EE]' variant="contained">
                                <Typography fontFamily={"var(--cooper)"} textTransform={"none"}>Sponsor Packet</Typography>
                            </Button>
                        </div>
                    </div>
                </Box>
            </div>
            <div className=' mt-10 flex flex-col items-center justify-center'>
                <Typography color={"white"} fontFamily={"var(--lucidity)"} fontSize={75}>JOIN HACKAI'23!</Typography>
                <Button className='bg-white rounded-lg w-[170px] text-[#1A2025] hover:scale-125 hover:bg-white hover:text=[#1A2025]'>
                    <Typography fontFamily={"var(--lucidity)"}>
                        REGISTER NOW!
                    </Typography>
                </Button>
            </div>
        </div>
    )
}

export default WorkWithUsSection;
