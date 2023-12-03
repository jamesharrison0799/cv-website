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
      <div className='card w-128'>
        <h1 className='card-title font-bold text-lg'>{company}, {location} - {title}</h1>
        <h2 className='text-sm'>{time.start.month} {time.start.year} - {time.end.month} {time.end.year} • {time.end.year - time.start.year} years</h2>
        <div className="card-body">
          <ul className=''>
            {details.map((item, index) => {
              return (
                <li key={index} className='list-disc'>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

type EducationProps = Education;

const EducationData: React.FC<EducationProps> = ({ establishment, course, location, time, details }) => {
  return (
    <>
      <div className='card w-128'>
        <h1 className='card-title font-bold text-lg'>{establishment}, {location} {(course != null) ? "- " + course : ""}</h1>
        <h2 className='text-sm'>{time.start.year} - {time.end.year}</h2>
        <ul className='card-body'>
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
      <main className='container mx-auto px-8 mb-16'> {/* dont forget about that padding knob ed*/}
        <div className='flex flex-row items-center'>
          <div className='basis-2/3 py-8'>
            <h1 className='font-bold text-4xl py-4'>{generalData.name}</h1>
            <h2 className='text-sm text-slate-600 py-2'>{generalData.tagline}</h2>
            <a href={"mailto:" + generalData.emailAddr + "?subject=Hello!"}><p className='text-sm'>{generalData.emailAddr}</p></a>
          </div>


          <div className='container basis-1/3 py-8 flex justify-center items-center'>
            <Image
              src={generalData.avatar}
              width={120}
              height={120}
              className="rounded-full object-cover object-right"
              alt={'Picture of James Harrison, he&apos;s a cool lookin&apos; fella!'}
            />
          </div>


        </div>
        <div className="divider"></div>
        <section>
          <h1 className="font-bold text-2xl">Experience</h1>
          <div className="m-10">

          </div>
          <div>
            {workExperience.map((content, index) => (
              <WorkData key={index} {...content} />
            ))}
          </div>
        </section>

        <div className="divider"></div>
        <section>
          <h1 className="font-bold text-2xl">Education</h1>
          <div className="m-10"></div>
          {education.map((content, index) => (
            <EducationData key={index} {...content} />
          ))}
        </section>

        <div className="divider"></div>
        <section>
          <div className="flex flex-row">
            {generalData.lists.map((item, index) => {
              return (
                <div className="basis-1/3">
                  <h1 className='font-bold text-2xl py-4' key={index}>{item.label}</h1>
                  <div>
                    <ul>
                      {item.list.map((listItem, index) => {
                        return (
                          <li key={index}>{listItem}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

        </section>

      </main>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Made by the man himself, using typescript, next.js, tailwind, and a pinch of peace and love. ✌️ <br /><a href="https://github.com/jamesharrison0799/cv-website.git" className='font-bold'>Source Code</a></p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
          </a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </nav>
      </footer>
    </>

  )
}
