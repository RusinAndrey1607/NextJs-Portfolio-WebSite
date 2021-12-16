import { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { IPortfolioMainPage } from '../../contentful'
import { client } from '../../contentfull'
import ContactUs from '../ContactForm/ContactUs'
import Footer, { linksType } from '../Footer/Footer'
import Header from '../Header/Header'



// This type determines which parameters can be thrown into the component as props. 
// Sign "?" means the parameter is optional.

type MyContainerPropsType = {
    title?: string
    copyright?: string |undefined
    icon?: string
    children: ReactNode
    links?: linksType
}


const MyContainer: NextPage<MyContainerPropsType> = ({ title, links, icon, copyright, children }) => {
    return (
        <>
            <Head>
                <meta property="keywords:React, Js , NextJs , CMS "></meta>
                <link rel="icon" href={icon ? icon : "https://cdn-icons-png.flaticon.com/512/33/33900.png"} type="image/icon type" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Artifika&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
                <title>{title ? title : "NextJsApp"}</title>
            </Head>
            <>
                <Header />
                <main className='main'>
                    {children}
                </main>
                <ContactUs />
                <Footer links={links} copyright={copyright} />
            </>

        </>
    )
}
export default MyContainer
