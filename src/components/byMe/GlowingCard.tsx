import React from 'react'
import { GlowingStarsBackgroundCardPreview } from './Cards'
import { MultiStepLoaderDemo } from '../ui/OtherServices'

const GlowingCard = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className="flex flex-row justify-center items-center">
      <GlowingStarsBackgroundCardPreview title="Software Development" text="develop highly scalable web application using latest techs" />
      <GlowingStarsBackgroundCardPreview title="Devops & cloud" text="setup your cloud infrastructure and deploy effecienly your apps" />
      <GlowingStarsBackgroundCardPreview title="Ai and Ml" text="large language models intrgration within app" />
    </div>
      <MultiStepLoaderDemo />

    </div>
    )
}

export default GlowingCard