import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { heroRef } from '../../components/Header/Header';
import MyContainer from '../../components/MyContainer/MyContainer';
import ProjectAbout from '../../components/ProjectAbout/ProjectAbout';
import ProjectHero from '../../components/ProjectHero/ProjectHero';
import { IPortfolioMainPage, IProject, IProjectFields } from '../../contentful';
import { client } from '../../contentfull';

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await client.getEntries<IProjectFields>({
        content_type: "project"
    })
    const paths = res.items.map((item) => {
        return {
            params: { projectSlug: item.fields.projectSlug }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const footerEntries = await client.getEntries<IPortfolioMainPage>({
        content_type: "portfolioMainPage",
        select: ['fields.links', 'fields.copyright']
     })

    const { items } = await client.getEntries<IProjectFields>({
        content_type: "project",
        // @ts-ignore
        'fields.projectSlug': params.projectSlug
    })
    const [footerData] =footerEntries.items
    return {
        props: {
            project: items[0],
            footerData,
        }
    }
}

const Project: React.FC<{ project: IProject, footerData:IPortfolioMainPage }> = ({ project, footerData }) => {
    return (
        <MyContainer links={footerData?.fields?.links} copyright={footerData?.fields?.copyright} title={project.fields.projectName}>
            {/* @ts-ignore */}
            <div className="" ref={heroRef}></div>
            <ProjectHero projectCodeLink={project.fields.projectCodeLink} projectHostingLink={project.fields.projectHostingLink} />
            <ProjectAbout project={project}/>
        </MyContainer>
    )
}

export default Project
