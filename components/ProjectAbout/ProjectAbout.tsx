import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Asset } from 'contentful'
import React from 'react'
import { IProject } from '../../contentful'
import styles from './ProjectAbout.module.scss'

type ProjectAboutType = {
  project: IProject
}
const ProjectAbout: React.FC<ProjectAboutType> = ({ project }) => {
  return (
    <div className={styles.project_about}>
      <div className="container">
        <div className={styles.project_about__inner}>
          <div className={styles.project_about__title}>CryptoGraph</div>
          <ul className={styles.project_about__list}>
            {/* @ts-ignore */}
            {project && project.fields.projectWorkProcessImage && project.fields.projectWorkProcessText && <ProjectAboutItem title="Development Process" paragraph={project.fields.projectWorkProcessText} image={project.fields.projectWorkProcessImage} />}
            {/* @ts-ignore */}
            {project && project.fields.projectTasksImage && project.fields.projectTasksText && <ProjectAboutItem title="Tasks I worked on" paragraph={project.fields.projectTasksText} image={project.fields.projectTasksImage} />}
            {/* @ts-ignore */}
            {project && project.fields.projectProblemsImage && project.fields.projectProblemsText && <ProjectAboutItem title="Problems encountered and solutions" paragraph={project.fields.projectProblemsText} image={project.fields.projectProblemsImage} />}
          </ul>
        </div>
      </div>
    </div>
  )
}

type ProjectAboutItemType = {
  title: string
  paragraph: Document | undefined
  image: Asset
}
const ProjectAboutItem: React.FC<ProjectAboutItemType> = ({ image, title, paragraph }) => {
  return (
    <li className={styles.project_about__item}>
      <div className={styles.project_about__info}>
        <div className={styles.project_about__title__small}>
          {title}
        </div>
        <p className={styles.project_about__paragraph}>
          {/* @ts-ignore */}
          {documentToReactComponents(paragraph)}
        </p>
      </div>
      <div className={styles.project_about__img__wrapper}>
        <img
          className={styles.project_about__img}
          src={image.fields.file.url}
          alt=""
        />
      </div>
    </li>
  )
}
export default ProjectAbout
