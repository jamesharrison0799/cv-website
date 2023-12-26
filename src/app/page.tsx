import Image from 'next/image'
import { generalData } from './data/general'

import { WorkExperience, workExperience } from './data/sections/work'
import type { WorkData } from './data/sections/work';

import { Education, education } from './data/sections/education';
import type { EducationData } from './data/sections/education';

type WorkProps = WorkExperience;

const WorkData: React.FC<WorkProps> = ({ company, title, location, time, details }) => {
  const dS = time.start;
  const dE = time.end;
  // // what types of date?: 
  // verbose      Start Month, Start Year - End month, End Year - Period in years )   // no null
  // brief        Start Year, End Year                                                // Both Months null
  // current      Start Month, Start Year - Now - Period in years                     // Both end properties are null    

  let dateString = "  ";
  let yearNow = new Date().getFullYear();


  if (dS.month && dE.month == null) {
    dateString = `${dS.year} - ${dE.year}`;
  } else if (dE.month && dE.year == null) {
    dateString = `${dS.month}, ${dS.year} - Present • ${yearNow - dS.year} years`;
  }else if(dE.year != null){
    dateString = `${dS.month}, ${dS.year} - ${dE.month}, ${dE.year} • ${dE.year - dS.year} years`
  }




  return (
    <>
      <h1 className=''>{company}, {location} - {title}</h1>
      <h1>{dateString}</h1>
      {/* <h2 className=''>{dS.month} {dS.year} - {dS.month} {dS.year} • {((dS.year != null) ? dS.year : 2023) - dS.year} years</h2> */}

      <ul className=''>
        {details.map((item, index) => {
          return (
            <li key={index} className='list-disc list-inside'>{item}</li>
          )
        })}
      </ul>
    </>
  )
}

type EducationProps = Education;

const EducationData: React.FC<EducationProps> = ({ establishment, course, location, time, details }) => {
  return (
    <>

      <h1 className=''>{establishment}, {location} {(course != null) ? " - " + course : ""}</h1>
      <h2 className=''>{time.start.year} - {time.end.year}</h2>
      <ul className=''>
        {details.map((item, index) => {
          return (
            <li key={index} className='list-disc list-inside'>{item}</li>
          )
        })}
      </ul>

    </>
  )
}


export default function Home() {
  return (
    <>


      {/* name and info */}
      <section className='bg-pink-600 flex '>
        <div className=''>
          <h1>{generalData.name}</h1>
          <h2>{generalData.tagline}</h2>
          <p>{generalData.emailAddr}</p>
        </div>

        <div>
          <Image
            src={generalData.avatar}
            width={200}
            height={200}
            alt='Sexy fella'
            className='rounded-full object-cover'
          />
        </div>
      </section>

      <main className='flex flex-wrap '>

        <div className='container flex-grow '>
          {/* work Experience */}
          <section className=' bg-orange-600'>
            <div className="">
              {workExperience.map((content, index) => (
                <WorkData key={index} {...content} />
              ))}
            </div>
          </section>

          {/* education */}
          <section className='bg-blue-600'>
            <div className="">
              {education.map((content, index) => (
                <EducationData key={index} {...content} />
              ))}
            </div>
          </section>
        </div>

        <div className='container'>
          {/* lists */}
          <section className='bg-red-400'>
            <div className="">
              {generalData.lists.map((item, index) => {
                return (
                  <div key={index} className="">
                    <h1 className=' mx-5 text-left' key={index}>{item.label}</h1>
                    <div>
                      <ul>
                        {item.list.map((listItem, index) => {
                          return (
                            <li className='list-disc list-inside' key={index} >{listItem}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>


      </main>
    </>

  )
}
