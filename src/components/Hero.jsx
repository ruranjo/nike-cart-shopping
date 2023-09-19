import React from 'react'
import SocialLink from './utils/SocialLink'
import Clips from './utils/Clips';

const Hero = ({heroapi}) => {
  const {title, subtitle, btntext, img, sociallinks, videos} = heroapi;
  
  
  return (
    <div>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
          <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
              <div className='grid items-center justify-items-center mt-20 md:mt-16'>
                <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-2xl  font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
                <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-2xl  font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>

                <button type='button' className='z-10 button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'>{btntext}</button>

                <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh]  lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
                  {videos.map((val, i) => {
                    return (
                  <Clips
                    key={i}
                    imgsrc={val.imgsrc}
                  />
                  
                   )} )}
                </div>

                <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3 z-50'>
                  {sociallinks?.map((val, i) => (
                    <SocialLink
                      key={i}
                      icon={val.icon}
                    />
                  ))}
                </div>

          </div>
          <div 
            className='flex items-center'
          >
            <img src={img} alt="" className='w-auto h-[38vh] lg:h-[32vh] md:h-[31vh] sm:h-[16vh] xsm:h-[14vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill' />
          </div>
        </div>
    </div>
  )
}


export default Hero
