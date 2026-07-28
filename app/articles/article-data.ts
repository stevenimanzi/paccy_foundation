export const articles = [
  { slug:"why-education-changes-lives", title:"Why education changes lives", summary:"Education grows choice, confidence and the ability to participate fully in family and community life.", readTime:"5 min read", sections:[
    ["Education creates choices",["Learning does more than prepare a child for an examination. It strengthens the ability to understand options, solve problems and make informed decisions.","When a learner remains in school, further study, skilled work, entrepreneurship and meaningful community participation become more attainable."]],
    ["The benefit reaches beyond one child",["A child's education can improve the wellbeing of an entire household. Knowledge about health, finance and civic life is often shared with siblings and caregivers.","Communities gain confident young people who can contribute ideas, skills and responsible leadership."]],
    ["Access must include dignity",["Enrollment alone is not enough. A learner also needs basic materials, belonging, protection and encouragement.","That is why Paccy Foundation plans to combine practical school support with mentorship and learner wellbeing."]],
  ]},
  { slug:"challenges-facing-vulnerable-children", title:"Challenges facing vulnerable children", summary:"A closer look at the connected financial, social and geographic barriers to staying in school.", readTime:"6 min read", sections:[
    ["One barrier rarely stands alone",["School interruption is often described as a problem of fees, but families may also face transport costs, missing materials, food insecurity, disability-related barriers or sudden household loss.","When several pressures occur together, even a motivated learner can struggle to attend consistently."]],
    ["Rural distance and opportunity",["Long journeys to school can affect punctuality, safety, concentration and participation. Limited access to information may make it harder for families to find support early."]],
    ["Support should be verified and personal",["Responsible assistance begins by listening to the child, family and school. A clear assessment identifies the actual barrier instead of assuming every learner needs the same solution."]],
  ]},
  { slug:"why-school-materials-matter", title:"Why school materials matter", summary:"The small essentials that influence attendance, belonging and classroom participation.", readTime:"4 min read", sections:[
    ["Tools affect participation",["A notebook, pen, uniform or school bag may appear simple, yet each affects how prepared a learner feels when entering the classroom.","Without required tools, children may avoid activities, share limited materials or miss school because they feel embarrassed."]],
    ["Belonging supports confidence",["Having the same basic materials as classmates helps a child participate without being singled out. That sense of belonging can strengthen confidence and attention."]],
    ["Give what is actually needed",["Material support works best when schools confirm specifications and quantities. This prevents waste and ensures every contribution is useful."]],
  ]},
  { slug:"how-donations-transform-communities", title:"How donations transform communities", summary:"Responsible giving works best when it strengthens families, schools and local ownership together.", readTime:"5 min read", sections:[
    ["A donation should solve a defined problem",["Trust begins with clarity: what is needed, who verified it and what result is expected.","Paccy Foundation will open campaigns only after these questions have practical answers."]],
    ["Local partnerships multiply impact",["Schools, families and community leaders carry knowledge an outside donor may not have. Working with them makes support more relevant and sustainable."]],
    ["Reporting completes the promise",["Supporters deserve to know how resources were used. Families deserve programs that do not expose or exploit them.","Financial updates, program reports and consent-based stories will form part of every mature campaign."]],
  ]},
  { slug:"foundation-launch-announcement", title:"Foundation launch announcement", summary:"Introducing the values, planned programs and transparent approach behind Paccy Foundation.", readTime:"4 min read", sections:[
    ["A foundation built before it promises",["Paccy Foundation begins with a simple belief: a child's circumstances should not decide the limit of their education.","Before launching programs, we are building the policies, verification process, partnerships and reporting standards required to serve responsibly."]],
    ["Our first program priorities",["Planned support includes school fees, essential materials, mentorship, health awareness and targeted nutrition assistance.","Programs will begin gradually, based on verified needs and available capacity."]],
    ["Join the beginning",["Support can take many forms: professional advice, volunteer time, responsible partnership, material contributions and donations when verified campaigns open."]],
  ]},
] as const;

export const getArticle = (slug:string) => articles.find((article)=>article.slug===slug);
