import type { Metadata } from "next";

type PageInfo = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; text: string; items?: string[] }[];
};

const pages: Record<string, PageInfo> = {
  about: { eyebrow: "Our foundation", title: "Built from belief. Guided by accountability.", intro: "Paccy Foundation is a Rwandan-led nonprofit preparing practical, transparent education support for children whose circumstances put their future at risk.", sections: [
    { title: "Our story", text: "The foundation began with a conviction that a child's potential should never be decided by household income, geography or loss. We are building a community response that links families, schools, volunteers and responsible donors." },
    { title: "Our vision", text: "A Rwanda where every child can learn with dignity, complete their education and shape a future of their own choosing." },
    { title: "Our mission", text: "To remove practical barriers to education through verified school support, essential materials, mentorship, wellbeing initiatives and lasting partnerships." },
    { title: "Our values", text: "The standards we use to make every decision.", items: ["Integrity", "Compassion", "Transparency", "Accountability", "Equality", "Education first"] },
    { title: "Our objectives", text: "Keep vulnerable children in school, improve readiness to learn, strengthen confidence and life skills, build community ownership, and report impact openly." },
  ]},
  founder: { eyebrow: "Meet the founder", title: "A personal promise to Rwanda's children.", intro: "Paccy founded the organization to close the distance between a child's ability and the opportunity available to them.", sections: [
    { title: "Why I started", text: "I have seen how one missing uniform, one unpaid term or one season of hardship can interrupt a promising education. Paccy Foundation exists to make sure those moments do not define a child's whole future." },
    { title: "My commitment", text: "We will listen before acting, verify before promising and account for every contribution. Children and families will always be treated with dignity—not as stories, but as partners." },
    { title: "A message from Paccy", text: "Talent is everywhere, but opportunity is not. Together, we can close that distance one child, one family and one school at a time." },
  ]},
  programs: { eyebrow: "What we do", title: "Support that surrounds the whole learner.", intro: "Our planned programs respond to the connected barriers that can keep a vulnerable child out of school.", sections: [
    { title: "School fees support", text: "Verified contributions toward tuition and school requirements to help learners remain enrolled." },
    { title: "School materials", text: "The everyday essentials that create readiness and confidence.", items: ["Books and pens", "Uniforms", "School bags", "Shoes", "Learning kits"] },
    { title: "Mentorship", text: "Consistent encouragement and practical preparation.", items: ["Career guidance", "Life skills", "Leadership", "Goal setting"] },
    { title: "Health awareness", text: "Age-appropriate hygiene and wellbeing education delivered with trusted partners." },
    { title: "Nutrition support", text: "Targeted food support to help children concentrate, participate and remain in school." },
  ]},
  "who-we-help": { eyebrow: "Eligibility", title: "For the child with the will, but not the means.", intro: "Selection will be careful, fair and grounded in evidence from families, schools and community partners.", sections: [
    { title: "Priority circumstances", text: "We prioritize children facing multiple barriers.", items: ["Lost one or both parents", "Live in poverty", "At risk of leaving school", "Live with disabilities", "Live in underserved rural communities"] },
    { title: "How selection works", text: "Every application follows the same safeguarding-aware process.", items: ["Application submitted", "Document and school review", "Family conversation", "Home visit", "Decision and support plan"] },
    { title: "Dignity and privacy", text: "A family's story is never a marketing asset. Personal information will be protected and only shared with informed consent." },
  ]},
  "get-involved": { eyebrow: "How you can help", title: "There is a place for you in this story.", intro: "Give resources, time, expertise or access. Every form of responsible support can move a child closer to a complete education.", sections: [
    { title: "Give", text: "Make a one-time donation, become a monthly donor, sponsor a verified child or donate school supplies.", items: ["Donate money", "Sponsor a child", "Give school supplies", "Become a monthly donor"] },
    { title: "Act", text: "Use your energy and network to build the movement.", items: ["Volunteer", "Fundraise", "Host an event", "Share our work"] },
    { title: "Partner", text: "Companies, schools, churches, NGOs, government and universities can help programs grow responsibly." },
  ]},
  "sponsor-child": { eyebrow: "Child sponsorship", title: "One child. One champion. A future changed.", intro: "Our verified child sponsorship program is launching soon. No child profiles will be published until selection, consent and safeguarding checks are complete.", sections: [
    { title: "How sponsorship will work", text: "Sponsors will receive a verified profile, a clear support plan and responsible progress updates while the child's privacy and dignity remain protected.", items: ["Verified educational need", "School and district details", "Transparent support plan", "Consent-based updates", "Annual impact summary"] },
    { title: "Launching soon", text: "Join the early-interest list and we will contact you when the first verified sponsorship opportunities open." },
  ]},
  donate: { eyebrow: "Give with purpose", title: "Your gift becomes something practical.", intro: "Giving channels will open with our first verified campaign. Every published appeal will show the need, budget and intended outcome.", sections: [
    { title: "You choose the amount", text: "There is no fixed or expected donation value. Give only what is comfortable and appropriate for you." },
    { title: "Where support goes", text: "Donations support verified education needs such as learning materials, uniforms, fees, mentoring and learner wellbeing." },
    { title: "Payment methods", text: "Choose the payment route that works best for you.", items: ["MTN MoMo", "Airtel Money", "Bank transfer", "Credit or debit card", "PayPal"] },
  ]},
  volunteer: { eyebrow: "Volunteer", title: "Bring what you know. Change what is possible.", intro: "We welcome thoughtful volunteers who care about education, dignity, safeguarding and accountable community work.", sections: [] },
  partners: { eyebrow: "Partner with us", title: "Let collective action become lasting access.", intro: "We build values-aligned partnerships around real needs, clear responsibilities and measurable outcomes.", sections: [
    { title: "Who can partner", text: "We welcome institutions that share our commitment to children and transparent impact.", items: ["Companies", "Churches", "Schools", "NGOs", "Government institutions", "Universities"] },
    { title: "Ways to partner", text: "Fund a program, contribute materials, share expertise, host an activation, support research or open access to services." },
    { title: "Our promise", text: "Every partnership begins with clear objectives and ends with a useful account of resources, activities and results." },
  ]},
  news: { eyebrow: "Articles & ideas", title: "Learning, action and the road ahead.", intro: "Perspectives on education, vulnerability and the practical choices that transform communities.", sections: [
    { title: "Why education changes lives", text: "Education grows choice, confidence and the ability to participate fully in family and community life." },
    { title: "Challenges facing vulnerable children", text: "A closer look at the connected financial, social and geographic barriers to staying in school." },
    { title: "Why school materials matter", text: "The small essentials that influence attendance, belonging and classroom participation." },
    { title: "How donations transform communities", text: "Responsible giving works best when it strengthens families, schools and local ownership together." },
    { title: "Foundation launch announcement", text: "Introducing the values, planned programs and transparent approach behind Paccy Foundation." },
  ]},
  events: { eyebrow: "Events", title: "Gather for a reason.", intro: "Our first events are being prepared. Dates and verified registration links will be published here.", sections: [
    { title: "Foundation launch ceremony", text: "Introducing our mission, governance and first program priorities to the community." },
    { title: "Fundraising dinner", text: "An evening connecting education champions with specific, verified needs." },
    { title: "School and community visits", text: "Listening sessions with educators, families and local leaders." },
    { title: "Back-to-school campaign", text: "A practical drive for essential supplies before the new term." },
    { title: "Tree planting day", text: "Young people, volunteers and partners learning through environmental action." },
  ]},
  gallery: { eyebrow: "Gallery", title: "The work, as it happens.", intro: "We will document our journey with consent, context and respect. Program photography will appear as activities begin.", sections: [
    { title: "Planning meetings", text: "Building policies, programs and partnerships before public launch." },
    { title: "Foundation registration", text: "Milestones in establishing a responsible and accountable organization." },
    { title: "Community visits", text: "Listening to schools, families and local leaders before designing support." },
    { title: "Coming next", text: "School activities, volunteer action and events will be published with appropriate consent." },
  ]},
  "success-stories": { eyebrow: "Success stories", title: "The first stories are still being written.", intro: "Success stories will be published as our verified programs begin. We will focus on progress, dignity and the many people behind each achievement.", sections: [
    { title: "Student achievements", text: "Educational milestones and personal growth shared with informed consent." },
    { title: "Volunteer stories", text: "How people use their skills and time to strengthen education." },
    { title: "Community voices", text: "Reflections from parents, teachers, leaders and responsible donors." },
  ]},
  transparency: { eyebrow: "Transparency", title: "Trust should be easy to verify.", intro: "This page will become the public home for our legal, financial and impact reporting as documents are finalized.", sections: [
    { title: "Legal information", text: "Official registration and relevant tax information.", items: ["Registration certificate — pending publication", "Tax information — pending publication"] },
    { title: "Reports", text: "Clear records of resources, activity and results.", items: ["Annual reports", "Financial reports", "Independent audit reports", "Impact reports"] },
    { title: "Policies", text: "The standards that protect children, supporters and the organization.", items: ["Child protection", "Safeguarding", "Anti-fraud", "Privacy and data protection"] },
  ]},
  faq: { eyebrow: "Frequently asked questions", title: "Answers, openly.", intro: "Clear information about giving, volunteering, selection, partnerships and accountability.", sections: [
    { title: "How can I donate?", text: "Verified Mobile Money and bank details will be published with our first campaign. Secure online methods will follow." },
    { title: "Can I volunteer?", text: "Yes. Complete the volunteer application and tell us about your skills, location and availability." },
    { title: "How are beneficiaries selected?", text: "Applications move through document review, school verification, a family conversation, home visit and decision." },
    { title: "How do you use donations?", text: "Funds are allocated to published program needs and reported through financial and impact updates." },
    { title: "Can companies partner?", text: "Yes. We welcome values-aligned financial, material, technical and activation partnerships." },
  ]},
  contact: { eyebrow: "Contact us", title: "Start a conversation.", intro: "Ask a question, propose a partnership or tell us how you would like to help.", sections: [] },
  beneficiary: { eyebrow: "Apply for support", title: "Every application deserves care and fairness.", intro: "This launch-stage form prepares families for the information and documents needed. Submitted information will be reviewed confidentially.", sections: [] },
  verification: { eyebrow: "Verification workflow", title: "Careful decisions protect every child.", intro: "Applications follow a consistent internal review so that support reaches verified needs fairly and safely.", sections: [
    { title: "Submitted", text: "A parent or guardian provides child, household, school and supporting-document information." },
    { title: "Review", text: "The team checks completeness, eligibility indicators, consent and school information." },
    { title: "Home visit", text: "A trained representative meets the family, confirms circumstances and identifies safeguarding considerations." },
    { title: "Approved", text: "A documented decision and child-centered support plan are prepared." },
    { title: "Assigned sponsor", text: "When sponsorship is suitable, a verified match is created with privacy-aware updates and financial tracking." },
  ]},
  campaigns: { eyebrow: "Campaigns", title: "Focused action. Visible outcomes.", intro: "Our first campaigns will open only when needs, budgets and delivery partners have been verified.", sections: [
    { title: "Back to School", text: "Equip learners with the essentials required for a confident first day." },
    { title: "One Child, One Future", text: "Comprehensive educational support built around one verified learner." },
    { title: "Sponsor a Girl", text: "Address the specific barriers that place girls' education at risk." },
    { title: "Books for Every Child", text: "Put useful, age-appropriate reading and learning materials within reach." },
    { title: "School Bag Campaign", text: "A practical kit that protects materials and restores classroom confidence." },
  ]},
  testimonials: { eyebrow: "Voices of belief", title: "Why this work matters.", intro: "At launch, the voices closest to our purpose share what responsible education support can make possible.", sections: [
    { title: "From the founder", text: "Talent is everywhere, but opportunity is not. Our work is to close that distance with care and accountability." },
    { title: "From community leaders", text: "Strong education support listens locally, works with schools and helps families build stability—not dependency." },
    { title: "Coming later", text: "Verified reflections from donors, volunteers, parents and children will be shared with informed consent." },
  ]},
  team: { eyebrow: "Our people", title: "A foundation built by people who care.", intro: "We are building a skilled, values-led team with the governance and community knowledge to serve responsibly.", sections: [
    { title: "Founder", text: "Paccy — founder and steward of the foundation's education-first mission." },
    { title: "Board members", text: "Independent governance appointments will be published after confirmation." },
    { title: "Advisors", text: "Education, safeguarding, finance and community-development advisors are being invited." },
    { title: "Volunteers and future staff", text: "Program roles will grow gradually as verified work and funding expand." },
  ]},
  careers: { eyebrow: "Careers", title: "No openings today. Many possibilities ahead.", intro: "We are not currently recruiting paid staff. Future opportunities will be published transparently on this page.", sections: [
    { title: "Volunteer", text: "Contribute skills or community time through our volunteer program." },
    { title: "Internships", text: "Structured learning opportunities will open as program capacity grows." },
    { title: "Employment", text: "Future roles will include clear responsibilities, selection criteria and safeguarding expectations." },
  ]},
  resources: { eyebrow: "Resource center", title: "Useful documents, in one place.", intro: "Official materials will be published here as they are approved and released.", sections: [
    { title: "Annual reports", text: "A public account of governance, activity, finances and results." },
    { title: "Donation forms", text: "Offline giving and institutional contribution documents." },
    { title: "Volunteer guide", text: "Expectations, conduct, safeguarding and practical orientation." },
    { title: "Policies", text: "Approved governance and protection documents." },
    { title: "Brochures", text: "Shareable introductions to the foundation and its programs." },
  ]},
  privacy: { eyebrow: "Legal", title: "Privacy policy.", intro: "We collect only the information needed to respond, operate programs responsibly and meet legal obligations.", sections: [
    { title: "Information we collect", text: "Contact details, application information, giving records and communications you choose to share." },
    { title: "How it is used", text: "To process requests, assess support, manage relationships, protect children, report responsibly and comply with law." },
    { title: "Your choices", text: "You may request access, correction or deletion where applicable by contacting the foundation." },
  ]},
  terms: { eyebrow: "Legal", title: "Terms of use.", intro: "These terms explain responsible use of the Paccy Foundation website and its information.", sections: [
    { title: "Website information", text: "We work to keep information accurate but launch-stage programs, dates and payment options may change before activation." },
    { title: "Acceptable use", text: "Do not misuse forms, attempt unauthorized access or use content in a way that harms children, families or the foundation." },
    { title: "Donations", text: "Campaign-specific conditions and receipts will be presented before any online payment is accepted." },
  ]},
  "cookie-policy": { eyebrow: "Legal", title: "Cookie policy.", intro: "We aim to use the minimum browser storage required for a reliable, accessible website.", sections: [
    { title: "Essential storage", text: "Necessary technologies may support security, language choice and core website operation." },
    { title: "Analytics", text: "If privacy-respecting analytics are introduced, this policy and consent controls will be updated first." },
  ]},
  "child-protection": { eyebrow: "Policy", title: "Child protection comes before publicity.", intro: "Every interaction, image, story and decision must preserve a child's safety, privacy, dignity and agency.", sections: [
    { title: "Core commitments", text: "Do no harm, obtain informed consent, limit identifying information, train representatives and act on every concern." },
    { title: "Reporting concerns", text: "Safeguarding concerns will follow a confidential escalation and referral process led by designated, trained people." },
    { title: "Media and stories", text: "No child is required to share a story to receive support. Consent can be withdrawn without affecting services." },
  ]},
  "anti-fraud": { eyebrow: "Policy", title: "Anti-fraud and integrity policy.", intro: "Paccy Foundation has zero tolerance for fraud, bribery, theft, falsification or misuse of resources.", sections: [
    { title: "Prevention", text: "Clear approvals, separation of duties, documented procurement and regular review reduce opportunities for abuse." },
    { title: "Speak up", text: "Concerns may be reported confidentially and will be assessed without retaliation against good-faith reporters." },
    { title: "Response", text: "Suspected misconduct will be documented, investigated fairly and referred to relevant authorities when required." },
  ]},
  safeguarding: { eyebrow: "Policy", title: "Safeguarding policy.", intro: "We work to prevent and respond to harm involving children, vulnerable people, volunteers, staff and partners.", sections: [
    { title: "Safe recruitment", text: "Relevant screening, references, role clarity and safeguarding orientation apply before contact with children." },
    { title: "Code of conduct", text: "Boundaries, communication, transport, photography, digital contact and one-to-one activity are governed by clear rules." },
    { title: "Reporting and response", text: "Concerns are recorded securely, escalated promptly and managed with survivor-centered care." },
  ]},
  admin: { eyebrow: "Administration preview", title: "A system designed to scale responsibly.", intro: "This protected workspace will become the operational center for programs, people, funds, content and accountability.", sections: [
    { title: "Programs and content", text: "Manage pages, news, events, gallery, campaigns and media.", items: ["Homepage and pages", "News and blog", "Events", "Campaigns", "Gallery and documents"] },
    { title: "People and applications", text: "Coordinate supporters and the people the foundation serves.", items: ["Donors", "Volunteer applications", "Beneficiary applications", "Child profiles", "Sponsorships", "Team members"] },
    { title: "Accountability", text: "Keep operations traceable and permission-aware.", items: ["Donation records", "Financial reports", "Roles and permissions", "Activity logs", "Backups"] },
    { title: "Launch status", text: "The public site is active. Operational modules remain in preview until authentication, database storage and governance workflows are approved." },
  ]},
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return { title: page ? `${page.title} | Paccy Foundation` : "Paccy Foundation", description: page?.intro };
}

function Header() {
  return <><div className="announcement">A child’s future begins in a classroom. <a href="/get-involved">Join the movement →</a></div><header className="site-header inner-header"><a className="brand" href="/"><img src="/images/paccy_faundation_logo.png" alt="" /><span><strong>Paccy</strong> Foundation<small>Education • Dignity • Hope</small></span></a><nav aria-label="Main navigation"><a href="/about">About</a><a href="/programs">Programs</a><a href="/news">News</a><a href="/contact">Contact</a></nav><details className="all-pages-menu"><summary>Explore <span>⌄</span></summary><div><a href="/">Home</a><a href="/about">About Us</a><a href="/founder">Founder</a><a href="/programs">Our Programs</a><a href="/who-we-help">Who We Help</a><a href="/get-involved">Get Involved</a><a href="/donate">Donate</a><a href="/volunteer">Volunteer</a><a href="/partners">Partners</a><a href="/news">News & Blog</a><a href="/events">Events</a><a href="/gallery">Gallery</a><a href="/success-stories">Success Stories</a><a href="/faq">FAQ</a><a href="/contact">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a><a href="/child-protection">Child Protection</a></div></details><a className="button button-small" href="/donate">Donate now <span>↗</span></a></header></>;
}

function FormPage({ slug }: { slug: string }) {
  if (slug === "donate") return <form className="full-form donation-form" action="mailto:hello@paccyfoundation.org" method="post" encType="text/plain">
    <h3 className="form-title">Your donation</h3><label className="amount-field">Amount<div><select name="currency" aria-label="Currency"><option>RWF</option><option>USD</option><option>EUR</option><option>GBP</option></select><input type="number" name="amount" min="1" step="any" required placeholder="Enter any amount" /></div></label><label>Payment method<select name="payment_method" required defaultValue=""><option value="" disabled>Select payment method</option><option>MTN MoMo</option><option>Airtel Money</option><option>Bank transfer</option><option>Credit or debit card</option><option>PayPal</option></select></label>
    <h3 className="form-title">Your details</h3><label>Full name<input name="name" required /></label><label>Email for receipt<input type="email" name="email" required /></label><label>Phone number<input type="tel" name="phone" /></label><label>Donation frequency<select name="frequency"><option>One-time</option><option>Monthly</option></select></label><label className="wide">Optional message<textarea name="message" rows={3} placeholder="Share a note with the foundation" /></label><label className="consent wide"><input type="checkbox" required /> I confirm that I am choosing this amount freely and would like payment instructions for my selected method.</label><button className="button wide" type="submit">Request payment instructions <span>→</span></button>
  </form>;
  if (slug === "volunteer") return <form className="full-form" action="mailto:hello@paccyfoundation.org" method="post" encType="text/plain">
    <label>Full name<input name="name" required /></label><label>Email address<input type="email" name="email" required /></label><label>Phone<input type="tel" name="phone" required /></label><label>District<input name="district" required /></label><label>Skills and experience<textarea name="skills" rows={4} required /></label><label>Availability<select name="availability" defaultValue=""><option value="" disabled>Select availability</option><option>Weekdays</option><option>Weekends</option><option>Flexible</option><option>Remote only</option></select></label><label className="wide">CV or profile document<input type="file" name="cv" accept=".pdf,.doc,.docx" /></label><button className="button wide" type="submit">Submit volunteer interest <span>→</span></button>
  </form>;
  if (slug === "beneficiary") return <form className="full-form" action="mailto:hello@paccyfoundation.org" method="post" encType="text/plain">
    <h3 className="form-title">Parent or guardian</h3><label>Guardian name<input name="guardian_name" required /></label><label>National ID<input name="national_id" required /></label><label>Phone<input type="tel" name="phone" required /></label><label>District and sector<input name="location" required /></label>
    <h3 className="form-title">Child information</h3><label>Child name<input name="child_name" required /></label><label>Date of birth<input type="date" name="birth_date" required /></label><label>School and class<input name="school" required /></label><label>Household monthly income<input name="income" /></label><label className="wide">Reason for support<textarea name="reason" rows={5} required /></label><label>School recommendation<input type="file" name="school_recommendation" /></label><label>Birth certificate<input type="file" name="birth_certificate" /></label><button className="button wide" type="submit">Submit application <span>→</span></button>
  </form>;
  if (slug === "contact") return <div className="contact-layout"><form className="full-form" action="mailto:hello@paccyfoundation.org" method="post"><label>Full name<input required /></label><label>Email address<input type="email" required /></label><label className="wide">Message<textarea rows={6} required /></label><button className="button wide">Send message <span>→</span></button></form><aside><h3>Talk to us</h3><p><strong>Email</strong><br />hello@paccyfoundation.org</p><p><strong>Office</strong><br />Kigali, Rwanda</p><p><strong>WhatsApp</strong><br />Launching soon</p><p><strong>Social</strong><br />Instagram · Facebook · LinkedIn · YouTube · TikTok</p></aside></div>;
  return null;
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return <main><Header/><section className="inner-hero"><p className="section-label light">404</p><h1>Page not found.</h1><a className="button" href="/">Return home</a></section></main>;
  return <main><Header/><section className="inner-hero"><div><p className="section-label light">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div><span className="inner-number">{String(Object.keys(pages).indexOf(slug) + 2).padStart(2,"0")}</span></section>
    <section className="inner-content"><FormPage slug={slug}/>{page.sections.length > 0 && <div className="content-grid">{page.sections.map((section,index)=><article className="content-card" key={section.title}><span>{String(index+1).padStart(2,"0")}</span><h2>{section.title}</h2><p>{section.text}</p>{section.items&&<ul>{section.items.map(item=><li key={item}>{item}</li>)}</ul>}{["news","events","campaigns","resources"].includes(slug)&&<a href="/contact">Learn more <b>→</b></a>}</article>)}</div>}</section>
    <section className="page-cta"><div><p className="section-label light">Ready to take part?</p><h2>Help a child stay close to possibility.</h2></div><div><a className="button" href="/donate">Support a child <span>↗</span></a><a className="cta-link" href="/volunteer">Become a volunteer →</a></div></section>
    <footer className="inner-footer"><div className="footer-brand"><img src="/images/paccy_faundation_logo.png" alt="" /><p><strong>Paccy Foundation</strong><br />Every child deserves a chance to learn.</p></div><div><h3>Foundation</h3><a href="/about">About</a><a href="/founder">Founder</a><a href="/team">Team</a><a href="/transparency">Transparency</a></div><div><h3>Take action</h3><a href="/donate">Donate</a><a href="/sponsor-child">Sponsor</a><a href="/volunteer">Volunteer</a><a href="/partners">Partner</a></div><div><h3>More</h3><a href="/news">News</a><a href="/events">Events</a><a href="/resources">Resources</a><a href="/contact">Contact</a></div><p className="copyright">© 2026 Paccy Foundation · <a href="/privacy">Privacy</a> · <a href="/safeguarding">Safeguarding</a></p></footer>
  </main>;
}
