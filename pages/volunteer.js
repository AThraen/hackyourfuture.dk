import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Contactform from '../components/contact-form/contact-form'
import { MentorsTeam } from '../components/team/team'
import { content, title } from '../components/content/_mentors'
import Curriculum from '../components/curriculum/curriculum'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img alt='' src={'https://i.imgur.com/jspZFfk.jpg'} />

      <h2 id='becoming-mentor'>Would you like to help?</h2>
      <Contactform />
    </Content>
    <Curriculum />
    <MentorsTeam id='mentors' />
  </Layout>
)
