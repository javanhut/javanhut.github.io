"use client";
import React from 'react';
import MovieClip from '@/components/MovieClip';
import Image from 'next/image';
import why from '@/images/why.png';
import mybrain from '@/images/mybrain.png';
import logo from '@/images/logo.png';
import * as BS from 'react-bootstrap';
import { Button, Accordion, AccordionBody, AccordionHeader, AccordionItem, Nav, Navbar,NavbarBrand, Form, FormControl, Container} from 'react-bootstrap';
import {Search }  from 'react-bootstrap-icons';

export default function Home() {
  return (
    <>
     <head>
    <meta charSet="utf-8" />
    <title>Javan&apos;s Professional Profile</title>
    <link rel="icon" href='@/images/logo.png'/>
    </head>
      <body>
        
    <Navbar expand="lg"className='bg-body-teritiary' bg='dark' data-bs-theme="dark">
      <Container fluid>
      <NavbarBrand href="#home">
        <Image src={logo} alt="Personal Logo" width={50} height={50} />
       <span>Javan&apos;s Professional Portfolio</span> 
       </NavbarBrand>
      </Container>
        <Form className='d-flex'>
          <FormControl type="search" placeholder="Search" className="me-2" />
          <Button variant="outline-success"><Search color='white'/></Button>
        </Form>
    </Navbar>
       
      <p>This portfolio page is supposed to be professional....I am an engineer who enjoys what I do and this reflects my personality but I am professional when the need arises.(*Warning: Contains humor throughout)</p>
          <Accordion>
            <AccordionItem eventKey={'0'}>
              <AccordionHeader>Who I Am?</AccordionHeader>
              <AccordionBody>
                <div>
                <p>I am Javan. I am a Electrical Engineer and Software Engineer. I am currently working at Intel.</p><p> I am also a student at Kennesaw State University pursuing a Master&apos;s degree in Computer Science with a concentration on Artifical Intelligence.</p>
                </div>
                <div>
                <h4>I Would say I&apos;m curious</h4>
                <Image src={why}  alt="Curious Employee"width={400} height={600}/>
                </div>
                
                <div>
                <p><i>Personal Philosophy:</i> If I don&apos;t already know what it is I can learn it, If I can&apos;t learn it myself find someone who knows it and learn it from them. </p>
                </div>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey={'1'}>
              <AccordionHeader>Education</AccordionHeader>
              <AccordionBody>
                <p>I have a Bachelor&apos;s degree in Electrical Engineering from the Kennesaw State University, Marietta, Georgia.</p>
                <p>I am currently pursuing a Master&apos;s degree in Computer Science with a concentration on Artifical Intelligence from the Kennesaw State University, Marietta, Georgia.</p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey={'2'}>
              <AccordionHeader>Work Experience</AccordionHeader>
              <AccordionBody>
                <p>Company: <b>Intel</b></p><p>Role: <b>Software Engineer</b></p><p>Duration: <b>June 2022 - Present</b></p>
              </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey={'3'}>
                <AccordionHeader>Skills</AccordionHeader>
                <AccordionBody>
                <BS.TabContainer id="list-group-tabs-example" defaultActiveKey="#link1">
                  <BS.Row>
                    <BS.Col sm={4}>
                      <Nav variant="pills" className="flex-column">
                        <BS.NavItem>
                          <BS.NavLink href="#python">Python</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#java">Java</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#kotlin">Kotlin</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#C">C</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#Cpp">C++</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#javascript">JavaScript</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#Go">Go</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#HTML">HTML</BS.NavLink>
                        </BS.NavItem>
                        <BS.NavItem>
                          <BS.NavLink href="#CSS">CSS</BS.NavLink>
                        </BS.NavItem>
                      </Nav>
                    </BS.Col>
                    <BS.Col sm={8}>
                      <BS.TabContent>
                        <BS.TabPane eventKey="#python">
                          <p>This is by far the language I&apos;m most proficient and have been coding in the longest.</p> <p>I have coded professionally in this language for about 2 years and contributed to mostly internal repositories with some Open Source contributions.</p> <p>Most of my coding projects are in this language. And the third coding language I learned. </p>
                        </BS.TabPane>
                        <BS.TabPane eventKey="#java">
                        <div><p>This is the language I abhor the most. Not very intuitive and my least favorite language I&apos;ve used, Used it for university assigments and that&apos;s pretty much it.</p> <p>I know it&apos;s supposed to be used for so much, I can code in it I just don&apos;t enjoy it</p></div>
                          </BS.TabPane>
                          <BS.TabPane eventKey="#kotlin">
                          <div><p>In an effort to avoid Java while doing Android App development.</p><p>I begrudgingly started to learn Kotlin. At first I was opposed to it&apos;s strange syntax then I realized it was better than Java.</p><p>After that i embraced it like a old friend.</p></div>
                        </BS.TabPane>
                        <BS.TabPane eventKey="#C">
                          <p> Some people would say C is easy to learn and hard to Master.... It was me. I am some people.</p>
                          </BS.TabPane>
                          <BS.TabPane eventKey="#Cpp">
                          <p>Same as answer above but with classes. (Inside joke about the origins of C++) </p><p>It seems like a few people don&apos;t like it like Ken Thompson, Brian Kernighan, Linus Torvalds but I&apos;m not like them. </p>
                        </BS.TabPane>
                        <BS.TabPane eventKey="#javascript">
                          <p>Javascript.... Well i built this website using it with React and Next.js.... I gotta like it alittle.</p>
                          </BS.TabPane>
                          <BS.TabPane eventKey="#Go">
                          <p>Ahh Go.. Great for multithreading go routines are awesome. Syntax is weird but it&apos;s got the spirit.</p>
                        </BS.TabPane>
                        <BS.TabPane eventKey="#HTML">
                          <p> Use this with JavaScript and CSS to create this webpage. I created a bunch of divs.</p>
                          </BS.TabPane>
                          <BS.TabPane eventKey="#CSS">
                          <p> No clue how to center those divs...</p>
                          </BS.TabPane>
                          </BS.TabContent>
                          </BS.Col>
                  </BS.Row>

                </BS.TabContainer>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey={'4'}>

                <AccordionHeader>Side Quests</AccordionHeader>
                <AccordionBody>
                  <MovieClip /> 
                  </AccordionBody>
                
              </AccordionItem>
              <AccordionItem eventKey={'5'}>
                <AccordionHeader>Interesting Things about Me</AccordionHeader>
                <AccordionBody>
              <div>
              <p>I have 2 dogs. I have a labradoodle named Mugsie and a goldendoodle named Bella</p>
              <p>I love to volunteer and give back when I can.</p>
              <p>I have Autism. My special interest happens to be Technology.</p>
              <p>I&apos;m a big fan for DC comics, Anime, and Manga.</p>
             </div>
                </AccordionBody>
              </AccordionItem>

          </Accordion>
          <footer>*Results may vary. I know this page is satirical but I genuinely love technology and engineering so my profile is a love letter to that idea.</footer>
      </body>
      
    </>
  );
}
