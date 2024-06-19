import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Hero() {
    return (
        <div className=' flex flex-col mx-auto my-20 justify-center items-center'>
            <div className='text-center max-w-3xl'>
                <h2 className='font-bold text-[40px] sm:text-[60px] font-mono text-green-600'>Easy Scheduling Ahead</h2>
                <h2 className='text-xl mt-5 text-slate-500'>Hello world lets started your meeting Lorem ipsum dolor sit, amet cupiditate molestiae dolorum cum vel voluptatem veniam ab.</h2>

                <div className='flex flex-col mt-5 gap-6'>
                    <h3>Sign Up free with google and Facebook</h3>
                    <div className='flex justify-center gap-2 sm:gap-8'>
                        <Button className='p-5 flex gap-4'>
                            <Image src='/google.png' width={20} height={20} alt='img' />
                            Sign up with Google</Button>
                        <Button className='bg-lime-700 p-5 flex gap-4'>
                            <Image src='/facebook.png' width={20} height={20} alt='img' />
                            Sign up with Facebook</Button>
                    </div>
                    <hr></hr>
                    <h2><Link href='' className='text-blue-700 font-bold'>Sign up free with Email.</Link> No Credit Card required</h2>
                </div>
            </div>
            <div className='hidden md:flex'>
                <Avatar className='absolute top-48 left-16'>
                    <AvatarImage src="https://cdn.prod.website-files.com/62196607bf1b46c300301846/6568adc6401542df279ea6c3_bb8sa1slxdbdyjqqb5mn.webp" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className='absolute top-40 right-36'>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/31/12/31/meeting-1015591_640.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar className='absolute bottom-20 left-36'>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSFBT8vRBWBy0OMwt41XuthjlNBG8j34FaA&s" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar className='absolute right-16 bottom-32'>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNyFrqXyRu2V_iIUhq3QifDP7ETls1iNptLuPqDrafq-xoYqgxcrmrtSwXQ7I9vOu-fg&usqp=CAU" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>


            </div>
        </div>
    )
}

export default Hero
