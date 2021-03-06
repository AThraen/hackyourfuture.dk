import React from 'react'
import styles from './item-card.scss'
import IconButton from '@material-ui/core/IconButton'
import { GithubCircle, Linkedin, Email, Note, Earth } from 'mdi-material-ui'
import Slide from 'react-reveal/Slide'

const ItemCard = ({ item, children }) => {
  const { photo, github, role, name, linkedin, email, onlineCV, pdfCV } = item
  return (
    <Slide duration={300} effect='fadeInUp'>
      <style jsx>{styles}</style>
      <style jsx global>{`
      .social-media > a {
        padding: 6px;
      }
      `}</style>
      <div className='team-member-card'>
        {photo ? (
          <a target="_blank" href={github || '#'}>
            <img
              alt={name}
              src={
                role === 'alumni'
                  ? '/static/alumni/photos/' + photo
                  : photo
              }
            />
          </a>
        ) : (
          <img
            alt={name}
            className='member-default-avatar'
            src={'/static/avatar.png'}
          />
        )}
        <h3 className='member-name'>{name}</h3>
        {role && <p className='member-role'>{role}</p>}
        <div className="social-media">
          {github && (
            <IconButton color='inherit' target="_blank" href={github}>
              <GithubCircle />
            </IconButton>
          )}
          {linkedin && (
            <IconButton color='inherit' target="_blank" href={linkedin}>
              <Linkedin />
            </IconButton>
          )}
          {email && (
            <IconButton color='inherit' target="_blank" href={`mailto:${email}`}>
              <Email />
            </IconButton>
          )}

          {onlineCV && (
            <IconButton color='inherit' target="_blank" href={onlineCV}>
              <Earth />
            </IconButton>
          )}

          {pdfCV && (
            <IconButton color='inherit' target="_blank" href={pdfCV}>
              <Note />
            </IconButton>
          )}
        </div>
        {children}
      </div>
    </Slide>
  )
}

export default ItemCard
