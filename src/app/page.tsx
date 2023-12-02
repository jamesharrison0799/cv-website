import Image from 'next/image'
import { generalData } from './data/general'

import { WorkExperience, workExperience } from './data/sections/work'
import type { WorkData } from './data/sections/work';

import { Education, education } from './data/sections/education';
import type { EducationData } from './data/sections/education';

type WorkProps = WorkExperience;

const WorkData: React.FC<WorkProps> = ({ company, title, location, time, details }) => {
  return (
    <> 
      <div className='m-4'>
      <h1 className='font-bold text-lg'>{company}, {location} - {title}</h1>
      <h2 className='text-sm'>{time.start.month} {time.start.year} - {time.end.month} {time.end.year} • {time.end.year - time.start.year} years</h2>
      <ul className='mx-10'>
        {details.map((item, index) => {
          return (
            <li key={index} className='p-2 list-disc'>{item}</li>
          )
        })}
      </ul>
      </div>
    </>
  )
}

type EducationProps = Education;

const EducationData: React.FC<EducationProps> = ({establishment, course, location,time,details})=>{
  return(
    <> 
    <div className='m-4'>
    <h1 className='font-bold text-lg'>{establishment}, {location} {(course != null) ? "- " + course : ""}</h1>
    <h2 className='text-sm'>{time.start.year} - {time.end.year} • {time.end.year - time.start.year} years</h2>
    <ul className='mx-10'>
      {details.map((item, index) => {
        return (
          <li key={index} className='p-2 list-disc'>{item}</li>
        )
      })}
    </ul>
    </div>
  </>
  )
}


export default function Home() {
  return (
    <>
      <main className='mx-4 my-4'> {/* dont forget about that padding knob ed*/}

        <Image
          src={generalData.avatar}
          width={40}
          height={40}
          className="rounded-full object-cover"
          alt={''}
        />


        <h1>{generalData.name}</h1>
        <h2>{generalData.tagline}</h2>

        {/* <p>{generalData.address}, {generalData.postcode}</p> */}
        <p>{generalData.emailAddr}</p>

        <section>
          <div className="m-10"></div>
          {workExperience.map((content, index) => (
            <WorkData key={index} {...content} />
          ))}
        </section>

        
        <section>
          <div className="m-10"></div>
          {education.map((content, index) => (
            <EducationData key={index} {...content} />
          ))}
        </section>

      </main>
    </>

  )
}
