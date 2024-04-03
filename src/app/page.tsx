"use client";
import React from 'react';
import MovieClip from '@/components/MovieClip';
import Image from 'next/image';
import Head from 'next/head';
import why from '@/images/why.png';
import me from '@/images/me.jpg';

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
          <p>My name is Javan (Pronounced Jay-vin) Hutchinson , an Electrical Engineer and Software Engineer and a Former Intel Engineer,</p>
          <p>Currently a Computer Science graduate student specializing in Artificial Intelligence at Kennesaw State University.</p>
          <p>Curiosity drives me towards continuous learning and growth.</p>
          </div>
          </Col>

          <Col>
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
                    <p>I help build an automation framework, automated test cases, and set up automated framworks using python and am very experienced with it&apos;s features and functions.</p>
                    <p>Most of my coding projects are in this language .</p>
                  </TabPane>
                  <TabPane eventKey="#java">
                    <div>
                      <p>I tend to think this language is overly verbose and was the first language outside of matlab that i learned while taking cs courses. I can design programs and understand OOP concepts in this language.</p>
                      <p>Personal feelings about this language aside i am comfortable coding in this language.</p>
                    </div>
                  </TabPane>
                  <TabPane eventKey="#kotlin"><p> I started to learn this language for android app development. I can comfortable navigate this language. Although I professional experience.</p></TabPane>
                  <TabPane eventKey="#C"><p>I learned this language during my undergrad and have used it for Linux kernel drivers and controlling microcontrollers. </p></TabPane>
                  <TabPane eventKey="#Cpp"><p>I love this language for it&apos;s functionality and closeness to the hardware. I can comfortably code in C++ but a quote from Bjarne Stroustrup describes my relationship with this language:</p>
                  <q>C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.</q>
                  </TabPane>
                  <TabPane eventKey="#javascript"><p>I used this language to build this webpage. I&apos;m familar with Next.js, Node.js and React. I have helped build webapps with this.</p></TabPane>
                  <TabPane eventKey="#Go"><p>I can code in it really like the go routines for multithreading.</p></TabPane>
                  <TabPane eventKey="#HTML"><p>I can use it. I suppose easy to implement hard to master would be the term here.</p></TabPane>
                  <TabPane eventKey="#CSS"><p>I can use it. Not hard to do but dealing with divs not my favorite thing.</p></TabPane>
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
            <Image src={me} alt='picture of me ' width={200} height={300}/>
            <p>I have 2 dogs. I have a labradoodle named Mugsie and a goldendoodle named Bella</p>
            <Image src={why} alt="Curious Employee" width={200} height={200} />
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
