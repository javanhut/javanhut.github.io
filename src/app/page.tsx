import React from 'react';

export default function Home() {
  return (
    <>
      <main>
        <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'><a className='navbar-brand'>Personal Website</a>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
        </div>
        </nav><p>Welcome to the jungle ladies and gentlemen.</p>
        <h2>Who Am I?</h2>
        <div>
          <p><i>Personal Philosophy:</i> If I don&apos;t already know what it is I can learn it, If I can&apos;t learn it myself find someone who knows it and learn it from them. </p>
          <p>I consider myself a Electrical Software Engineer. As is I i feel like both a Electrical Engineer and Software Engineer. I love technology and all things science.</p>
          <p></p>
        </div>
        <h2>Education</h2>
        <div>
          <p>I have a Bachelor&apos;s degree in Electrical Engineering from the Kennesaw State University, Marietta, Georgia.</p>
          <p>I am currently pursuing a Master&apos;s degree in Computer Science with a concentration on Artifical Intelligence from the Kennesaw State University, Marietta, Georgia.</p>
        </div>
        <h2>Work Experience</h2>
        <div>
          <p>Company: <b>Intel</b></p>
          <p>Role: <b>Software Engineer</b></p>
          <p>Duration: <b>June 2022 - Present</b></p>
        </div>
        <h2>Skills</h2>
        <h3>Programming Languages(*in no particular order)</h3>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C</li>
          <li>C++</li>
          <li>Go</li>
          <li>Kotlin</li>
        </ul>
        <h6>*Results may vary. But I wrote this whole page myself.</h6>
        <h2>Projects</h2>
        <h2>Interesting Things about Me</h2>
        <div>
          <p>I have 2 dogs. I have a labradoodle named Mugsie and a goldendoodle named Bella</p>
          <p>I love to volunteer and give back when I can.</p>
          <p>I have Autism. My special interest happens to be Technology.</p>
          <p>I&apos;m a big fan for DC comics, Anime, and Manga.</p>
        </div>
      </main>
    </>
  );
}
