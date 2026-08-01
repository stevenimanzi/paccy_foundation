const programs = [
  ["01", "School fees", "Removing the financial barrier that keeps a child out of the classroom."],
  ["02", "Learning essentials", "Books, uniforms, school bags, shoes and every tool a learner needs."],
  ["03", "Mentorship", "Career guidance, life skills and leadership for confident young people."],
  ["04", "Wellbeing", "Hygiene education and nutrition support that help children thrive at school."],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">A child’s future begins in a classroom. <a href="#help">Join the movement →</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Paccy Foundation home">
          <img src="/images/paccy_faundation_logo.png" alt="" />
          <span><strong>Paccy</strong> Foundation<small>Every Child Deserves a Chance to Learn.</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a><a href="/about">About</a><a href="/programs">Programs</a><a href="/news">Articles</a><a href="/get-involved">Get involved</a>
        </nav>
        <details className="all-pages-menu"><summary>Explore</summary><div><a href="/">Home</a><a href="/about">About Us</a><a href="/founder">Founder</a><a href="/programs">Our Programs</a><a href="/who-we-help">Who We Help</a><a href="/get-involved">Get Involved</a><a href="/donate">Donate</a><a href="/volunteer">Volunteer</a><a href="/partners">Partners</a><a href="/news">Articles</a><a href="/events">Events</a><a href="/gallery">Gallery</a><a href="/success-stories">Success Stories</a><a href="/faq">FAQ</a><a href="/contact">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/child-protection">Child Protection Policy</a></div></details>
        <a className="button button-small" href="/donate">Donate now <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Rooted in Rwanda. Built for possibility.</p>
          <h1>Every child deserves a <em>chance to learn.</em></h1>
          <p className="hero-text">We help children from vulnerable families stay in school—with fees, uniforms, learning materials, mentorship and care.</p>
          <div className="hero-actions">
            <a className="button" href="/donate">Support a child <span>↗</span></a>
            <a className="text-link" href="/volunteer">Become a volunteer <span>→</span></a>
          </div>
          <div className="trust-row"><span className="trust-mark">✓</span><p><strong>Transparent from day one</strong><br />Every contribution is tracked and reported.</p></div>
        </div>
        <div className="hero-visual">
          <img src="/images/rwanda-classroom.jpg" alt="Children learning together in a Rwandan classroom" />
          <div className="photo-note"><span>Our promise</span><strong>Education first,<br />always.</strong></div>
          <div className="sun-mark">✦</div>
        </div>
      </section>

      <section className="purpose" id="about">
        <div><p className="section-label">Who we are</p><h2>Hope is powerful.<br /><em>Opportunity is practical.</em></h2></div>
        <div className="purpose-copy">
          <p>Paccy Foundation is a Rwandan-led nonprofit preparing to make education possible for children whose circumstances put their future at risk.</p>
          <p>We believe support should be personal, accountable and built to last. That means listening to families, partnering with schools, and walking alongside every child.</p>
          <a className="line-link" href="/about">Our story & vision <span>→</span></a>
        </div>
        <div className="values">
          <span>Integrity</span><span>Compassion</span><span>Transparency</span><span>Equality</span><span>Accountability</span><span>Education first</span>
        </div>
      </section>

      <section className="program-section" id="programs">
        <div className="section-head"><div><p className="section-label light">What we do</p><h2>Support that surrounds<br />the whole learner.</h2></div><p>Our programs address the practical barriers between vulnerable children and a complete education.</p></div>
        <div className="program-grid">
          {programs.map(([number, title, text]) => <article className="program-card" key={number}><span>{number}</span><div className="program-icon">{number === "01" ? "⌂" : number === "02" ? "✎" : number === "03" ? "◎" : "✚"}</div><h3>{title}</h3><p>{text}</p><a href="#help" aria-label={`Help with ${title}`}>Learn more →</a></article>)}
        </div>
      </section>

      <section className="people-section">
        <div className="people-image"><img src="/images/rwanda-classroom.jpg" alt="Young learners writing in their notebooks" /></div>
        <div className="people-copy"><p className="section-label">Who we help</p><h2>For the child with the <em>will,</em><br />but not the means.</h2><p>We are building a fair, careful selection process with schools and communities to reach children who:</p>
          <ul><li>have lost one or both parents</li><li>live in poverty or rural communities</li><li>are at risk of leaving school</li><li>live with disabilities</li></ul>
          <a className="line-link" href="/who-we-help">Learn about eligibility <span>→</span></a>
        </div>
      </section>

      <section className="impact" id="impact">
        <p className="section-label">The journey starts here</p><div className="impact-title"><h2>Small starts.<br /><em>Lasting change.</em></h2><p>Paccy Foundation is in its launch chapter. We’ll publish clear numbers, reports and stories as our programs begin.</p></div>
        <div className="counters"><div className="featured"><strong>Coming<br />soon</strong><span>Children supported</span></div><div><strong>0</strong><span>Volunteers</span></div><div><strong>0</strong><span>Partners</span></div><div><strong>0</strong><span>Schools</span></div><div><strong>0</strong><span>Districts</span></div></div>
      </section>

      <section className="help" id="help">
        <div className="help-intro"><p className="section-label">How you can help</p><h2>There is a place for<br /><em>you</em> in this story.</h2><p>Give once, walk with a child monthly, share your skills, or open a door through your organization.</p></div>
        <div className="help-list">
          <a href="/donate"><span>01</span><strong>Make a donation</strong><i>Give what you can, where it matters most.</i><b>↗</b></a>
          <a href="/sponsor-child"><span>02</span><strong>Sponsor a child</strong><i>Build a personal bridge to a brighter future.</i><b>↗</b></a>
          <a href="/volunteer"><span>03</span><strong>Volunteer with us</strong><i>Bring your time, care and professional skills.</i><b>↗</b></a>
          <a href="/partners"><span>04</span><strong>Become a partner</strong><i>Turn collective action into sustained impact.</i><b>↗</b></a>
        </div>
      </section>

      <section className="donate" id="donate">
        <div className="donate-copy"><p className="section-label light">Give with purpose</p><h2>Give what you<br />are able to give.</h2><p>There is no required donation amount. Choose the value that is right for you and select your preferred payment method.</p><div className="payment-tags"><span>MTN MoMo</span><span>Airtel Money</span><span>Bank transfer</span><span>Card</span></div></div>
        <form className="quick-donate-form" action="/donate"><label>Your donation amount<div><select name="currency" aria-label="Currency"><option>RWF</option><option>USD</option><option>EUR</option><option>GBP</option></select><input name="amount" type="number" min="1" step="any" required placeholder="Enter any amount" /></div></label><label>Preferred payment method<select name="method" required defaultValue=""><option value="" disabled>Choose a payment method</option><option>MTN MoMo</option><option>Airtel Money</option><option>Bank transfer</option><option>Credit or debit card</option><option>PayPal</option></select></label><button className="button" type="submit">Continue to donate <span>→</span></button></form>
      </section>

      <section className="launch-card" id="sponsor"><div><p className="section-label">Child sponsorship</p><h2>One child.<br />One champion.</h2><p>Our sponsorship program is launching soon. Join the early list and we’ll let you know when verified child profiles become available.</p><a className="button dark" href="mailto:hello@paccyfoundation.org?subject=Sponsorship interest">Join the early list <span>→</span></a></div><div className="launch-badge"><span>Launching</span><strong>Soon</strong><small>Rwanda · 2026</small></div></section>

      <section className="founder" id="founder">
        <div className="founder-quote">“I started Paccy Foundation because talent is everywhere, but opportunity is not. Our work is to close that distance—one child, one family, one school at a time.”<span>— Paccy, Founder</span></div>
        <div className="founder-side"><p className="section-label light">A personal promise</p><p>This foundation begins with a simple commitment: see every child’s dignity, earn every family’s trust, and account for every contribution.</p></div>
      </section>

      <section className="volunteer" id="volunteer">
        <div><p className="section-label">Give your time</p><h2>Your skills can<br /><em>shape a future.</em></h2><p>Educators, mentors, organizers, designers, health professionals and community champions all have something meaningful to contribute.</p></div>
        <form action="mailto:hello@paccyfoundation.org" method="post" encType="text/plain"><label>Full name<input name="name" required placeholder="Your name" /></label><label>Email address<input type="email" name="email" required placeholder="you@example.com" /></label><label>How would you like to help?<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>Mentorship</option><option>Events & fundraising</option><option>Professional skills</option><option>Community outreach</option></select></label><button className="button" type="submit">Start the conversation <span>→</span></button></form>
      </section>

      <section className="partner" id="partner"><p>Companies · Churches · Schools · NGOs · Universities</p><h2>Let’s build something<br />that outlives us.</h2><a href="mailto:hello@paccyfoundation.org?subject=Partnership enquiry">Become a partner <span>↗</span></a></section>

      <section className="faq"><div><p className="section-label">Good questions</p><h2>Answers, openly.</h2></div><div>
        <details><summary>How can I donate?<span>+</span></summary><p>Our secure Mobile Money and bank details will be published with our first verified campaign. Join the newsletter to be notified.</p></details>
        <details><summary>How are beneficiaries selected?<span>+</span></summary><p>Applications will move through review, school verification, a home visit and approval before any child is matched with support.</p></details>
        <details><summary>How will donations be used?<span>+</span></summary><p>Funds will be directed to verified program needs, with financial and impact reports made publicly available.</p></details>
        <details><summary>Can my organization partner with you?<span>+</span></summary><p>Yes. We welcome values-aligned companies, churches, schools, NGOs, government partners and universities.</p></details>
      </div></section>

      <section className="newsletter" id="contact"><div><p className="section-label light">Stay close to the story</p><h2>News worth<br />opening.</h2></div><form action="mailto:hello@paccyfoundation.org" method="post"><label><span>Email address</span><input type="email" required placeholder="you@example.com" /></label><button type="submit">Subscribe →</button></form></section>

      <footer className="site-footer"><div className="footer-brand"><img src="/images/paccy_faundation_logo.png" alt="Paccy Foundation logo" /><p><strong>Paccy Foundation</strong><br />Every child deserves a chance to learn.<small>Kigali, Rwanda<br /><a href="mailto:hello@paccyfoundation.org">hello@paccyfoundation.org</a></small></p></div><div><h3>Foundation</h3><a href="/">Home</a><a href="/about">About Us</a><a href="/founder">Founder</a><a href="/programs">Our Programs</a><a href="/who-we-help">Who We Help</a></div><div><h3>Take action</h3><a href="/get-involved">Get Involved</a><a href="/donate">Donate</a><a href="/volunteer">Volunteer</a><a href="/partners">Partners</a></div><div><h3>Discover</h3><a href="/news">Articles</a><a href="/events">Events</a><a href="/gallery">Gallery</a><a href="/success-stories">Success Stories</a><a href="/faq">FAQ</a></div><div><h3>Information</h3><a href="/contact">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/child-protection">Child Protection Policy</a><a className="admin-link" href="/admin">Admin login</a></div><div className="footer-bottom"><p>© 2026 Paccy Foundation. All rights reserved.</p><p>Designed and developed by <strong>IMANZI Labs</strong></p></div></footer>
    </main>
  );
}
