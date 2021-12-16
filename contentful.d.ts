// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPortfolioMainPageFields {
  /** developerName */
  developerName?: string | undefined;

  /** SkillsItem */
  skillsItem?: string[] | undefined;

  /** aboutParagraphMedium */
  aboutParagraphMedium?: string | undefined;

  /** aboutParagraphSmall */
  aboutParagraphSmall?: string | undefined;

  /** aboutParagraphBig */
  aboutParagraphBig?: string | undefined;

  /** role */
  role?: string | undefined;

  /** heroDescription */
  heroDescription?: string | undefined;

  /** aboutImage */
  aboutImage?: Asset | undefined;

  /** socialLinkName */
  socialLinkName?: string | undefined;

  /** socialLink */
  socialLink?: string | undefined;

  /** socialLinkDisplayedName */
  socialLinkDisplayedName?: string | undefined;

  /** links */
  links?: Record<string, any> | undefined;

  /** copyright */
  copyright?: string | undefined;
}

export interface IPortfolioMainPage extends Entry<IPortfolioMainPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "portfolioMainPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectFields {
  /** projectName */
  projectName: string;

  /** projectSlug */
  projectSlug: string;

  /** projectThumbNail */
  projectThumbNail: Asset;

  /** projectDescription */
  projectDescription?: string | undefined;

  /** projectCodeLink */
  projectCodeLink: string;

  /** projectHostingLink */
  projectHostingLink: string;

  /** hoverDescription */
  hoverDescription?: string | undefined;

  /** projectWorkProcessImage */
  projectWorkProcessImage?: Asset | undefined;

  /** projectTasksImage */
  projectTasksImage?: Asset | undefined;

  /** projectProblemsImage */
  projectProblemsImage?: Asset | undefined;

  /** projectWorkProcessText */
  projectWorkProcessText?: Document | undefined;

  /** projectTasksText */
  projectTasksText?: Document | undefined;

  /** projectProblemsText */
  projectProblemsText?: Document | undefined;
}

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "portfolioMainPage" | "project";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
