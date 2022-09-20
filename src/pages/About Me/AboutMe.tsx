import React from 'react'
import s from './AboutMe.module.css'
export const AboutMe = () => {
  return (
    <React.StrictMode>
      <div className={s.head}>
        <div className={s.wrapper}>
          <div className={s.name}>My name is</div>
          <div className={s.name}>Asadulloev Subhonbek</div>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.line}></div>
        <div className={s.title}>Some beautiful paths can’t be discovered without getting lost.</div>
        <div className={s.line}></div>
        <div >For as long as I can remember I’ve been obsessed with the idea of travel. I was always that person who was forever daydreaming of foreign lands and unfamiliar cultures; coming up with travel itineraries that would challenge my perceptions and help me gain a deeper understanding of the world.</div>
      </div>
      <div className={s.images}>
        <div className={s.image}></div>
        <div className={s.image}></div>
      </div>
      <div className={s.info}>
        <div className={s.text}>To keep you on the road to safety, here are a few basic tips for motorists at rail crossings:</div>
        <div>• Expect a train at any time. Trains can run anytime of day or night, on any track, in any direction.</div>
        <div>• Don’t be fooled. The train is closer and faster than you think. It’s easy to misjudge a train’s speed and its distance, especially at night. If you see a train, just wait.        </div>
        <div>• Trains can’t stop quickly or swerve; be prepared to yield. After fully applying the brakes, a loaded freight train traveling at 55 miles per hour takes a mile or more to stop.        </div>
        <div>• Stop and wait when gates are down or lights are flashing. Only continue across after the gates go up and red lights stop flashing. Remember, too, that when on foot, you should stay off railroad cars and tracks. It’s illegal and too often it’s deadly.        </div>
        <div>These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on track to save Americans time, trouble and maybe even their lives. These trains can go from stations in the suburbs to stations in the city without switching locomotives. Such flexible trains, called DMUs–or Diesel Multiple Units -were designed so commuters in the suburbs would not have to switch to locomotives that work only on city rails. According to Colorado Railcar Manufacturing, the company that designed the cars, the DMU combines its drive systems and passenger accommodations into a single unit-each DMU has seating for 90 passengers and can pull additional motorized coaches.</div>
      </div>
    </React.StrictMode>
  )
}
