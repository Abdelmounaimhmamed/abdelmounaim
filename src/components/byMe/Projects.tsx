import { SparklesPreview } from "./CustomH"
import { AnimatedPinDemo } from "./Items"

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        {/* <h1 className="text-6xl font-bold w-full text-center  text-white">Projects</h1> */}
        <SparklesPreview type="Projects" />

        <div className="w-full  flex flex-row justify-center items-center">
            <AnimatedPinDemo imgUri={"https://develus.vercel.app/icmds.png"} projectName={"Icmds"} desc={"web application  for an  mathematics and data science comference"} title={"/icmds-ma.com"} />
            <AnimatedPinDemo imgUri={"https://develus.vercel.app/inscri.png"} projectName={"Ensa khouribga"} desc={"Web appliation for continuous training at ensa khouribga"} title={"/Ensakh-formations.com"} />
            <AnimatedPinDemo imgUri={"https://develus.vercel.app/dataverse.png"} projectName={"Dataverse"} desc={"Fully hydrated Web application for a data science event"} title={"/Innov-success-ingenerie.com"} />
        </div>
    </div>
  )
}

export default Projects