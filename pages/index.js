import React from 'react'
import Link from "next/link"
import styled from 'styled-components'
import Footer from '../components/footer';

const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`;

const Title = styled.h1`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`;

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <header className= "headerContainer">
        <img src={props.avatar_url}/>
        <Link href="/sobre">
        <a>
          <Title>JorgeLins's Blog</Title>
        </a>
        </Link>
      </header>

      <section className="postsContainer">
        <SubTitle>Posts</SubTitle>
        <article className="postsContainer__post">
          <a href="/">
            Titulo do post 1
          </a>
          <p>
            Resumo do post
          </p>
        </article>
      </section>

      <section className="postsContainer">
        <SubTitle>Repositórios github</SubTitle>
        {
          props.repos.map((project) => {
          return (
            <article
              key = {project.repo}
              className="postsContainer__post">
            <a href="/">
              {project.repo}
            </a>
            <p>
              {project.description}
            </p>
          </article>
          )
          })
        }
      </section>

      <Footer>
        twitter="beaastboy"
        github="JorgeLins"
      </Footer>
      
    </div>

  )
}

export async function getStaticProps(){
  const githubResponse = await fetch("https://api.github.com/users/JorgeLins")
  .then(res => res.json())

  const repos = await fetch("https://gh-pinned-repos.now.sh/?username=JorgeLins")
  .then(res => res.json())

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos,
    } 
  }
}
