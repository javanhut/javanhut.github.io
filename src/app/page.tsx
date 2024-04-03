"use client";
import React from 'react';
import MovieClip from '@/components/MovieClip';
import Image from 'next/image';
import Head from 'next/head';
import why from '@/images/why.png';
import me from '@/images/me.jpg';
import mountain from '@/images/mountain.svg';
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
      <NavbarOverlay />
      <div className="bg-mountain-image">
      <div className="" style={{ overflowY: 'scroll', maxHeight:'match-height', maxWidth: "match-width"}}>
        <Container>
        <Row>
          <Col>
          <h3 className='text-black bg-gradient-to-r from-white to-transparent shadow-md'>Professional Description</h3>
          <div className='professional-description text-black bg-gradient-to-r from-white to-transparent shadow-md hover:animate-[pulse_10s_ease-in-out_infinite]' style={{padding: "10px", paddingBottom: "10px"}}>
          
          <p>My name is Javan (Pronounced Jay-vin) Hutchinson , an Electrical Engineer and Software Engineer and a Former Intel Engineer,</p>
          <p>Currently a Computer Science graduate student specializing in Artificial Intelligence at Kennesaw State University.</p>
          <p>Curiosity drives me towards continuous learning and growth.</p>
          </div>
          </Col>

          <Col className='flex flex-col items-center justify-center h-full'>
              <p className='text-center text-black bg-gradient-to-r from-white to-transparent shadow-md'><b><i>Personal Philosophy:</i></b> Embrace learning. If unknown, discover it. If challenging, master it.</p>
          </Col>

        </Row>

        <Row>
          <Col>
          <h3 className='text-black bg-gradient-to-r from-white to-transparent topPadding=10px' style={{padding: "10px", paddingBottom: "10px"}}>Education</h3>
          <div className='education text-black bg-gradient-to-r from-white to-transparent shadow-md hover:animate-[pulse_10s_ease-in-out_infinite]' style={{padding: "10px", marginBottom: "10px"}}>
          <p>I have a Bachelor&apos;s degree in Electrical Engineering from the Kennesaw State University, Marietta, Georgia.</p>
          <p>I am currently pursuing a Master&apos;s degree in Computer Science with a concentration on Artificial Intelligence from the Kennesaw State University, Marietta, Georgia.</p>
          </div>
          </Col>
          <Col>
          <h3 className='text-black bg-gradient-to-r from-white from-30% to-transparent shadow-md'>Work Experience</h3>
          <div className='work-experience text-black bg-gradient-to-r from-white from-30% to-transparent shadow-md hover:animate-[pulse_10s_ease-in-out_infinite]' style={{padding: "10px", paddingBottom: "10px"}}>
          <p>Company: <b>Intel</b></p><p>Role: <b>Software Engineer</b></p><p>Duration: <b>June 2022 - April 2024</b></p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3 className='text-black bg-gradient-to-r from-white to-transparent shadow-md'>Programming Languages</h3>
          <div className='text-black bg-transparent shadow-md'>
          <TabContainer id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column shadow-md bg-gradient-to-r from-white to-transparent text-black">
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
                <TabContent className='shadow-md'>
                  <TabPane eventKey="#python">
                    <div className='bg-cyan-50'>
                    <p>This is by far the language I&apos;m most proficient and have been coding in the longest.</p>
                    <p>I have coded professionally in this language for about 2 years and contributed to mostly internal repositories with some Open Source contributions.</p>
                    <p>I help build an automation framework, automated test cases, and set up automated framworks using python and am very experienced with it&apos;s features and functions.</p>
                    <p>Most of my coding projects are in this language .</p></div>
                  </TabPane>
                  <TabPane eventKey="#java">
                    <div className='bg-cyan-50'>
                      <p>I tend to think this language is overly verbose and was the first language outside of matlab that i learned while taking cs courses. I can design programs and understand OOP concepts in this language.</p>
                      <p>Personal feelings about this language aside i am comfortable coding in this language.</p>
                    </div>
                  </TabPane>
                  <TabPane eventKey="#kotlin"><p className='bg-cyan-50'> I started to learn this language for android app development. I can comfortable navigate this language. Although I professional experience.</p></TabPane>
                  <TabPane eventKey="#C"><p className='bg-cyan-50'>I learned this language during my undergrad and have used it for Linux kernel drivers and controlling microcontrollers. </p></TabPane>
                  <TabPane eventKey="#Cpp"><div className='bg-cyan-50'><p>I love this language for it&apos;s functionality and closeness to the hardware. I can comfortably code in C++ but a quote from Bjarne Stroustrup describes my relationship with this language:</p>
                  <q>C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.</q></div>
                  </TabPane>
                  <TabPane eventKey="#javascript"><p className='bg-cyan-50'>I used this language to build this webpage. I&apos;m familar with Next.js, Node.js and React. I have helped build webapps with this.</p></TabPane>
                  <TabPane eventKey="#Go"><p className='bg-cyan-50'>I can code in it really like the go routines for multithreading.</p></TabPane>
                  <TabPane eventKey="#HTML"><p className='bg-cyan-50'>I can use it. I suppose easy to implement hard to master would be the term here.</p></TabPane>
                  <TabPane eventKey="#CSS"><p className='bg-cyan-50'>I can use it. Not hard to do but dealing with divs not my favorite thing. I really just got creative with this page</p></TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
          </div>
          </Col>
          <Col>
          <h3 className='text-black bg-gradient-to-r from-white from-30% to-transparent shadow-md'>Side Quests</h3>
          <div className='text-black bg-gradient-to-r from-white to-transparent shadow-md'> 
          <MovieClip /> 
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3 className='text-black bg-gradient-to-r from-white to-transparent shadow-md' style={{padding: "10px", paddingBottom: "10px"}}>Projects</h3>
          <div className='text-black bg-gradient-to-r from-white to-transparent shadow-md'>
            <h4>Nora- AI Emotional Chatbot</h4>
          <YoutubeVideo /> 
          </div>
          </Col>
          <Col className="flex flex-col space-y-4 text-black t">
                <h3 className='inline-block bg-gradient-to-r from-white to-transparent shadow-md'>About Me</h3>
                <div className="flex items-center space-x-4">
                  <Image
                    className="inline-block h-75 w-25 rounded-full ring-2 ring-black shadow-md"
                    src={me}
                    alt='picture of me'
                    width={100}
                    height={300}
                  />
                  <div className=' shadow-md bg-gradient-to-r from-slate-400 to-slate-200 hover:animate-[pulse_10s_ease-in-out_infinite]'>
                    <p>I have 2 dogs. I have a labradoodle named Mugsie and a goldendoodle named Bella.</p>
                    <p>I have Autism. My special interest happens to be Technology.</p>
                    <p>I&apos;m a big fan of DC comics, Anime, and Manga.</p>
                    <p>I love to volunteer and give back when I can.</p>
                  </div>
                </div>
            </Col>
        </Row>
        </Container>
      </div>
    </div>
    </div>
  );
}
