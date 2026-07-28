import type { Metadata } from "next";
import { articles, getArticle } from "../article-data";

export const generateStaticParams=()=>articles.map(({slug})=>({article:slug}));

export async function generateMetadata({params}:{params:Promise<{article:string}>}):Promise<Metadata>{
  const article=getArticle((await params).article);
  return {title:article?`${article.title} | Paccy Foundation`:"Article | Paccy Foundation",description:article?.summary};
}

function Header(){return <><div className="announcement">A child’s future begins in a classroom. <a href="/get-involved">Join the movement →</a></div><header className="site-header inner-header"><a className="brand" href="/"><img src="/images/paccy_faundation_logo.png" alt="Paccy Foundation"/><span><strong>Paccy</strong> Foundation<small>Every Child Deserves a Chance to Learn.</small></span></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About</a><a href="/programs">Programs</a><a href="/news">Articles</a><a href="/contact">Contact</a></nav><a className="button button-small" href="/donate">Donate now <span>↗</span></a></header></>}

export default async function ArticlePage({params}:{params:Promise<{article:string}>}){
  const article=getArticle((await params).article);
  if(!article)return <main><Header/><section className="article-page"><h1>Article not found.</h1><a className="button" href="/news">All articles</a></section></main>;
  return <main><Header/><article className="article-page"><header><a href="/news">← All articles</a><p className="section-label">Paccy Foundation journal · {article.readTime}</p><h1>{article.title}</h1><p>{article.summary}</p></header><div className="article-body">{article.sections.map(([heading,paragraphs])=><section key={heading}><h2>{heading}</h2>{paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</section>)}</div><footer className="article-end"><p>Help keep a child close to possibility.</p><a className="button" href="/get-involved">Get involved <span>→</span></a></footer></article></main>;
}
