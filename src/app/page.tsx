import React from 'react';
import MovieClip from '@/components/MovieClip';
import Image from 'next/image';
import why from '@/images/why.png';
import mybrain from '@/images/mybrain.png';
import logo from '@/images/logo.png';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
     <head>
    <meta charSet="utf-8" />
    <title>Javan&apos;s Professional Profile</title>
    <link rel="icon" href='@/images/logo.png'/>
    </head>
      <body>
       <div>
      
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand'>
          <Image src={logo} alt="Personal Logo" width={50} height={50} />
          <span>Javan&apos;s Professional Portfolio</span>
        </a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <Button variant="outline-success" type="submit">Search</Button>
        </form>
      </div>
    </nav>
       
      <div className='container'>
      <p>This portfolio page is supposed to be professional....I am an engineer who enjoys what I do and this reflects my personality but I am professional when the need arises.(*Warning: Contains humor throughout)</p>
       <div className='accordian' id="accordianInfo">
        <div className='accordian-item'>
          <h2 className='accordian-header'>
            <button className='accordian-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>Who Am I?</button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionInfo">
            <div className='accordian-body'>
              <div className='fun-images'>
              <Image src={why} alt="Me at work" width={200} height={200} /> 
              <Image src={mybrain} alt="Problem solving for me pretty much" width={200} height={200} />
              </div>
            <p><i>Personal Philosophy:</i> If I don&apos;t already know what it is I can learn it, If I can&apos;t learn it myself find someone who knows it and learn it from them. </p>
            <p>I consider myself a Electrical Software Engineer. As is I i feel like both a Electrical Engineer and Software Engineer. I love technology and all things science.</p>
            </div>
          </div>
        </div>
       </div>
       
        <div className='accordian-item'>
          <h2 className='accordian-header'>
            <button className='accordian-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>Education</button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionInfo">
            <div className='accordian-body'>
            <p>I have a Bachelor&apos;s degree in Electrical Engineering from the Kennesaw State University, Marietta, Georgia.</p>
            <p>I am currently pursuing a Master&apos;s degree in Computer Science with a concentration on Artifical Intelligence from the Kennesaw State University, Marietta, Georgia.</p>
            </div>
          </div>
        </div>
        <div className='accordian-item'>
        <h2 className='accordian-header'>
        <button className='accordian-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>Work Experience</button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionInfo">
          <div className='accordian-body'>
          <p>Company: <b>Intel</b></p>
          <p>Role: <b>Software Engineer</b></p>
          <p>Duration: <b>June 2022 - Present</b></p>
          </div>
        </div>
        </div>
        <div className='accordian-item'></div>
        <h2 className='accordian-header'>
        <button className='accordian-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>Skills</button> 
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionInfo">
          <div className='accordian-body'>
          <div className="row">
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-python-list" data-bs-toggle="list" href="#list-python" role="tab" aria-controls="list-python">Python</a>
      <a className="list-group-item list-group-item-action" id="list-java-list" data-bs-toggle="list" href="#list-java" role="tab" aria-controls="list-java">Java</a>
      <a className="list-group-item list-group-item-action" id="list-kotlin-list" data-bs-toggle="list" href="#list-kotlin" role="tab" aria-controls="list-kotlin">Kotlin</a>
      <a className="list-group-item list-group-item-action" id="list-c-list" data-bs-toggle="list" href="#list-c" role="tab" aria-controls="list-c">C</a>
      <a className="list-group-item list-group-item-action" id="list-cpp-list" data-bs-toggle="list" href="#list-cpp" role="tab" aria-controls="list-cpp">C++</a>
      <a className="list-group-item list-group-item-action" id="list-javascript-list" data-bs-toggle="list" href="#list-javascript" role="tab" aria-controls="list-javascript">JavaScript</a>
      <a className="list-group-item list-group-item-action" id="list-go-list" data-bs-toggle="list" href="#list-go" role="tab" aria-controls="list-go">Go</a>
      <a className="list-group-item list-group-item-action" id="list-html-list" data-bs-toggle="list" href="#list-html" role="tab" aria-controls="list-html">Html</a>
      <a className="list-group-item list-group-item-action" id="list-css-list" data-bs-toggle="list" href="#list-css" role="tab" aria-controls="list-css">CSS</a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-python" role="tabpanel" aria-labelledby="list-python-list"><div><p>This is by far the language I&apos;m most proficient and have been coding in the longest.</p> <p>I have coded professionally in this language for about 2 years and contributed to mostly internal repositories with some Open Source contributions.</p> <p>Most of my coding projects are in this language. And the third coding language I learned. </p></div></div>
      <div className="tab-pane fade" id="list-java" role="tabpanel" aria-labelledby="list-java-list"><div><p>This is the language I abhor the most. Not very intuitive and my least favorite language I&apos;ve used, Used it for university assigments and that&apos;s pretty much it.</p> <p>I know it&apos;s supposed to be used for so much, I can code in it I just don&apos;t enjoy it</p></div> </div>
      <div className="tab-pane fade" id="list-kotlin" role="tabpanel" aria-labelledby="list-kotlin-list"><div><p>I learned kotlin while trying to build an app for Android and I desperately wanted to avoid Java with a passion. Fun alternative to Java.</p></div></div>
      <div className="tab-pane fade" id="list-c" role="tabpanel" aria-labelledby="list-c-list"><div><p>Mother of most modern languages, C is fantastic. I enjoy it although going from the OOP nature of Python, Java, C++ was alittle difficult at first.</p><p>I&apos;m saddened that i haven&apos;t had more chances to code in this language so i&apos;ll make more projects in this language maybe some linux device drivers or a language</p></div></div>
      <div className="tab-pane fade" id="list-cpp" role="tabpanel" aria-labelledby="list-cpp-list"><div><p>Ahh C++ way too powerful for it&apos;s own good I&apos;m not expert in this language but I will try to be it&apos;s just that good.</p><p>You&apos;ll likely see a few projects from me in this language</p></div></div>
      <div className="tab-pane fade" id="list-javascript" role="tabpanel" aria-labelledby="list-javascript-list"><div><p>Well I made this whole page in react using javascript and typescript. That&apos;s it that&apos;s my stance.</p></div></div>
      <div className="tab-pane fade" id="list-go" role="tabpanel" aria-labelledby="list-go-list"><div><p>The newest language i&apos;ve been playing with alot recently. Alittle weird but I like it.</p><p>No OOP here either but it gives me similar feelings to C.</p></div></div>
      <div className="tab-pane fade" id="list-html" role="tabpanel" aria-labelledby="list-html-list"><div><p>I used it to make a bunch of divs.</p></div></div>
      <div className="tab-pane fade" id="list-css" role="tabpanel" aria-labelledby="list-css-list"><div><p>I still can&apos;t center those divs</p></div></div>
    </div>
  </div>
</div>
          </div>
        </div>
        <h6>*Results may vary.</h6>
        <div className='accordian-item'>
          <h2 className='accordian-header'>
            <button className='accordian-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFive' aria-expanded='false' aria-controls='collapseFive'>Side Quests</button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionInfo">
            <div className='accordian-body'>
              <MovieClip />
            </div>
          </div>
        </div>
        <div className='accordian-item'>
          <h2 className='accordian-header'>
            <button className='accordian-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>Interesting Things about Me</button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionInfo">
            <div className='accordian-body'>
              <p>I have 2 dogs. I have a labradoodle named Mugsie and a goldendoodle named Bella</p>
              <p>I love to volunteer and give back when I can.</p>
              <p>I have Autism. My special interest happens to be Technology.</p>
              <p>I&apos;m a big fan for DC comics, Anime, and Manga.</p>
            </div>
          </div>
        </div>
      </div>
       </div>
      </body>
    </>
  );
}
