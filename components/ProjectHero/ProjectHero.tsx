import React from 'react'
import styles from './ProjectHero.module.scss'


type ProjecgtHeroPropsType = {
  projectCodeLink: string | undefined
  projectHostingLink : string | undefined
}
const ProjectHero:React.FC<ProjecgtHeroPropsType> = ({projectCodeLink, projectHostingLink}) => {
    return (
        <div className={styles.project_hero}>
        <div className={styles.project_hero__inner}>
          <a className={styles.project_hero__code} target="_blank" href={projectCodeLink}>
            <div className={styles.project_hero__info}>
              <div className={styles.project_hero__title}>Code</div>
              <p className={styles.project_hero__paragraph}>repository git</p>
            </div>
          </a>
          <div className={styles.project_hero__scroll}>
            <div className={styles.mouse_wrap}>
              <div className={styles.mouse}>
                <div className={styles.frame}>

                  <svg
                    version="1.1"
                    id="mouse"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 54.9 91"
                  
                  >
                    <path
                      id="XMLID_173_"
                      className={styles.st0}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      d="M27.4,3.6L27.4,3.6C14.2,3.6,3.5,14.3,3.5,27.5v36c0,13.2,10.7,23.9,23.9,23.9h0
                  c13.2,0,23.9-10.7,23.9-23.9v-36C51.4,14.3,40.7,3.6,27.4,3.6z"
                    />
                  </svg>
                </div>

                <div className={styles.mouse_left}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 27.4 91"
                 
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      className={styles.Draw_Frame + " " + styles.Animate_Draw}
                      d="M27.4,87.5L27.4,87.5c-13.2,0-23.9-10.7-23.9-23.9v-36c0-13.2,10.7-23.9,23.9-23.9h0"
                    />
                  </svg>
                </div>

                <div className={styles.mouse_right}>
                  <svg
                    version="1.1"
                    id="Layer_2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 27.4 91"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      className={styles.Draw_Frame + " " + styles.Animate_Draw}
                      d="M0,3.6L0,3.6c13.2,0,23.9,10.7,23.9,23.9v36c0,13.2-10.7,23.9-23.9,23.9h0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.project_hero__scroll_text}>scroll down</p>
          <a className={styles.project_hero__host} target="_blank"  href={projectHostingLink}>
            <div className={styles.project_hero__info}>
              <div className={styles.project_hero__title}>Host</div>
              <p className={styles.project_hero__paragraph}>working website</p>
            </div>
          </a>
        </div>
        <div className={styles.project_hero__line}></div>
      </div>
    )
}

export default ProjectHero
