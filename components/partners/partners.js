import React from 'react'
import partners from './partners.json'
import styles from './partners.scss'

export default () => (
  <div className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Official partners</h2>
    <div className='wrapper'>
      {partners.map(({ id, logo, url, title }) => (
        <div className='partner' key={id}>
          <a rel='noopener' target='_blank' href={url}>
            <img alt={title} src={`/static/partners/${logo}`} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
