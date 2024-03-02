import React from 'react';
export default function Home() {
  return (
    <>
      <main>
        <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'><a className='navbar-brand'>Javan&apos;s Website</a>
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
        <div>
        <div className="row">
  <div className="col-8">
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-python-list" data-bs-toggle="list" href="#list-python" role="tab" aria-controls="list-python">Python</a>
      <a className="list-group-item list-group-item-action" id="list-java-list" data-bs-toggle="list" href="#list-java" role="tab" aria-controls="list-java">Java</a>
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
      <div className="tab-pane fade show active" id="list-python" role="tabpanel" aria-labelledby="list-python-list"><div><p>This is by far the language I&apos;m most proficient and have been coding in the longest.</p> <p>I have coded professionally in this language for about 2 years and contributed to mostly internal repositories with some Open Source contributions.</p> <p>Most of my coding projects are in this language. And the 3 coding language I learned. </p></div></div>
      <div className="tab-pane fade" id="list-java" role="tabpanel" aria-labelledby="list-java-list">...</div>
      <div className="tab-pane fade" id="list-c" role="tabpanel" aria-labelledby="list-c-list">...</div>
      <div className="tab-pane fade" id="list-cpp" role="tabpanel" aria-labelledby="list-cpp-list">...</div>
      <div className="tab-pane fade show active" id="list-javascript" role="tabpanel" aria-labelledby="list-javascript-list">Hello</div>
      <div className="tab-pane fade" id="list-go" role="tabpanel" aria-labelledby="list-go-list">...</div>
      <div className="tab-pane fade" id="list-html" role="tabpanel" aria-labelledby="list-html-list">...</div>
      <div className="tab-pane fade" id="list-css" role="tabpanel" aria-labelledby="list-css-list">...</div>
    </div>
  </div>
</div>
        </div>
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
