import React from 'react'
import './OurTeam.scss'
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div className='OurTeam'>
        <h1>Our Team</h1>
        <p>
            Young innovative minds looking making waves in
            the tech world.
        </p>
        <div className="team-container">
            <div className="team-member">
                <img src="" alt="" />
                <div className="team-text">
                    <h2>Martin Nzomo</h2>
                    <p>Lead Back-End Engineer</p>
                    <div className="socials">
                        <RiTwitterFill id='icon'/>
                        <RiLinkedinFill id='icon'/>
                    </div>
                </div>
            </div>
            <div className="team-member">
                <img src="" alt="" />
                <div className="team-text">
                    <h2>Bernard Mugita</h2>
                    <p>Lead Front-End Engineer</p>
                    <div className="socials">
                        <RiTwitterFill id='icon'/>
                        <RiLinkedinFill id='icon'/>
                    </div>
                </div>
            </div>
            <div className="team-member">
                <img src="" alt="" />
                <div className="team-text">
                    <h2>Francis Flynn</h2>
                    <p>Content Manager</p>
                    <div className="socials">
                        <RiTwitterFill id='icon'/>
                        <RiLinkedinFill id='icon'/>
                    </div>
                </div>
            </div>
            {/* <div className="team-member">
                <img src="" alt="" />
                <div className="team-text">
                    <h2>Dennis Sande</h2>
                    <p>Front-End Engineer</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default OurTeam