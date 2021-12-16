import type { NextPage } from 'next'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import MyContainer from '../components/MyContainer/MyContainer'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import { IPortfolioMainPage, IProject } from '../contentful'
import { client } from '../contentfull'


type HomePagePropsType = {
  homePage: IPortfolioMainPage
  projects: IProject[]
}
const HomePage: NextPage<HomePagePropsType> = ({ projects, homePage }) => {
  return (
    <MyContainer links={homePage.fields.links} copyright={homePage.fields.copyright}>
      <>
        <Hero
          heroDescription={homePage.fields.heroDescription}
          telegramLink={homePage.fields.links?.telegram}
          gitHubLink={homePage.fields.links?.github}
          developerName={homePage.fields.developerName}
        />
        <Skills skills={homePage.fields.skillsItem} />
        <Projects
          projects={projects}
        />
        <About
          aboutParagraphBig={homePage.fields.aboutParagraphBig}
          aboutParagraphMedium={homePage.fields.aboutParagraphMedium}
          aboutParagraphSmall={homePage.fields.aboutParagraphSmall}
          email={homePage.fields.links?.email}
          developerName={homePage.fields.developerName}
          socialLinkName={homePage.fields.socialLinkName}
          socialLink={homePage.fields.socialLink}
          role={homePage.fields.role}
          aboutImage={homePage.fields.aboutImage}
          socialLinkDisplayedName={homePage.fields.socialLinkDisplayedName} />
      </>
    </MyContainer>
  )
}

export async function getStaticProps() {
  const home = await client.getEntries<IPortfolioMainPage>({
    content_type: "portfolioMainPage",
  })
  const projectsEntries = await client.getEntries<IProject>({
    content_type: "project",
    select: ['fields.projectName', 'fields.projectSlug', 'fields.projectThumbNail', 'fields.projectDescription', 'fields.hoverDescription'],
    limit:100,

  })
  const [homePage] = home.items
  const projects = projectsEntries.items
  
  return {
    props: {
      homePage,
      projects,
    },
    revalidate: 10,
  }
}

export default HomePage

