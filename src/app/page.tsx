"use client";
import React from 'react';
import MovieClip from '@/components/MovieClip';
import Image from 'next/image';
import Head from 'next/head';
import why from '@/images/why.png';

import { TabContainer, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Container } from 'react-bootstrap';
import NavbarOverlay from '@/components/NavBar';
import YoutubeVideo from '@/components/YoutubeVideo';
import SidebarExampleVisible from '@/components/SideBar';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Javan&apos;s Professional Profile</title>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="Javan&apos;s Professional Portfolio - Engineer and AI Enthusiast" />
      </Head>
      <div className='cursor'>
      <NavbarOverlay />
      <div style={{ overflowY: 'scroll', maxHeight:'match-height', maxWidth: "match-width"}}>
        <Container>
        <Row>
          <Col>
          <div className='professional-description' style={{padding: "10px", paddingBottom: "10px"}}>
          <h3>Professional Description</h3>
          <p>My name is Javan Hutchinson, an Electrical Engineer and Software Engineer and a Former Intel Engineer,</p>
          <p>and a Computer Science graduate student specializing in Artificial Intelligence at Kennesaw State University.</p>
          <p>Curiosity drives me towards continuous learning and growth.</p>
          </div>
          </Col>

          <Col>
          <Image src={why} alt="Curious Employee" width={200} height={200} />
          <p><i>Personal Philosophy:</i> Embrace learning. If unknown, discover it. If challenging, master it.</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <div className='education' style={{padding: "10px", marginBottom: "10px"}}>
          <h3>Education</h3>
          <p>I have a Bachelor&apos;s degree in Electrical Engineering from the Kennesaw State University, Marietta, Georgia.</p>
          <p>I am currently pursuing a Master&apos;s degree in Computer Science with a concentration on Artificial Intelligence from the Kennesaw State University, Marietta, Georgia.</p>
          </div>
          </Col>
          <Col>
          <div className='work-experience' style={{padding: "10px", paddingBottom: "10px"}}>
          <h3>Work Experience</h3>
          <p>Company: <b>Intel</b></p><p>Role: <b>Software Engineer</b></p><p>Duration: <b>June 2022 - April 2024</b></p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className=''>
          <h3>Programming Languages</h3>
          <TabContainer id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <NavItem>
                    <NavLink href="#python">Python</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#java">Java</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#kotlin">Kotlin</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#C">C</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#Cpp">C++</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript">JavaScript</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#Go">Go</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#HTML">HTML</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#CSS">CSS</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <TabContent>
                  <TabPane eventKey="#python">
                    <p>This is by far the language I&apos;m most proficient and have been coding in the longest.</p>
                    <p>I have coded professionally in this language for about 2 years and contributed to mostly internal repositories with some Open Source contributions.</p>
                    <p>Most of my coding projects are in this language. And the third coding language I learned.</p>
                  </TabPane>
                  <TabPane eventKey="#java">
                    <div>
                      <p>This is the language I abhor the most. Not very intuitive and my least favorite language I&apos;ve used, Used it for university assignments and that&apos;s pretty much it.</p>
                      <p>I know it&apos;s supposed to be used for so much, I can code in it I just don&apos;t enjoy it.</p>
                    </div>
                  </TabPane>
                  <TabPane eventKey="#kotlin"></TabPane>
                  <TabPane eventKey="#C"></TabPane>
                  <TabPane eventKey="#Cpp"></TabPane>
                  <TabPane eventKey="#javascript"></TabPane>
                  <TabPane eventKey="#Go"></TabPane>
                  <TabPane eventKey="#HTML"></TabPane>
                  <TabPane eventKey="#CSS"></TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
          </div>
          </Col>
          <Col>
          <div className=''>
            <h3>Side Quests</h3>
          <MovieClip /> 
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className=''>
            <h3>Projects</h3>
            <h4>Nora- AI Emotional Chatbot</h4>
          <YoutubeVideo /> 
          </div>
          </Col>
          <Col>
          <div className=''>
            <h3>About Me</h3>
            <p>I have 2 dogs. I have a labradoodle named Mugsie and a goldendoodle named Bella</p>
            <p>I love to volunteer and give back when I can.</p>
            <p>I have Autism. My special interest happens to be Technology.</p>
            <p>I&apos;m a big fan for DC comics, Anime, and Manga.</p>
          </div>
          </Col>
        </Row>
        <footer>*Results may vary. I know this page is satirical but I genuinely love technology and engineering so my profile is a love letter to that idea.</footer>
        </Container>
      </div>
    </div>
    </div>
    
  );
}
