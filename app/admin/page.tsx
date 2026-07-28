import { desc } from "drizzle-orm";
import { getDb } from "../../db";
import { activity, content, donations, messages, volunteers } from "../../db/schema";
import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";
import { AdminActions } from "./AdminActions";

export const dynamic = "force-dynamic";

export default async function AdminPage(){
  const user=await requireChatGPTUser("/admin");
  const db=getDb();
  const [volunteerRows,donationRows,messageRows,contentRows,activityRows]=await Promise.all([
    db.select().from(volunteers).orderBy(desc(volunteers.id)).limit(50),
    db.select().from(donations).orderBy(desc(donations.id)).limit(50),
    db.select().from(messages).orderBy(desc(messages.id)).limit(50),
    db.select().from(content).orderBy(desc(content.id)).limit(30),
    db.select().from(activity).orderBy(desc(activity.id)).limit(30),
  ]);
  return <main className="admin-shell"><aside className="admin-sidebar"><a className="admin-brand" href="/"><img src="/images/paccy_faundation_logo.png" alt=""/><span>Paccy Foundation<small>Administration</small></span></a><nav><a href="#overview">Overview</a><a href="#content">Website content</a><a href="#volunteers">Volunteers</a><a href="#donations">Donations</a><a href="#messages">Messages</a><a href="#activity">Activity</a></nav><a className="admin-signout" href={chatGPTSignOutPath("/")}>Sign out</a></aside><section className="admin-main"><header><div><p className="section-label">Administration</p><h1>Foundation control center.</h1><p>Signed in as {user.displayName}</p></div><a className="button button-small" href="/" target="_blank">View website ↗</a></header><AdminActions/>
  <section className="admin-stats" id="overview"><article><span>Volunteer applications</span><strong>{volunteerRows.length}</strong></article><article><span>Donation requests</span><strong>{donationRows.length}</strong></article><article><span>Unread messages</span><strong>{messageRows.filter(x=>x.status==="unread").length}</strong></article><article><span>Content updates</span><strong>{contentRows.length}</strong></article></section>
  <AdminSection id="content" title="Website content"><form className="admin-content-form" action="/api/admin" method="post"><label>Page<select name="page"><option>about</option><option>founder</option><option>programs</option><option>who-we-help</option><option>get-involved</option><option>donate</option><option>volunteer</option><option>partners</option><option>news</option><option>events</option><option>gallery</option><option>success-stories</option><option>faq</option><option>contact</option><option>privacy</option><option>terms</option><option>child-protection</option></select></label><label>Content field<select name="field"><option value="eyebrow">Section label</option><option value="title">Main title</option><option value="intro">Introduction</option></select></label><label className="wide">New content<textarea name="value" rows={4} required/></label><button className="button button-small" type="submit">Publish content</button></form>{contentRows.map(row=><article className="admin-content-row" key={row.id}><div><strong>{row.page} · {row.field}</strong><p>{row.value}</p></div><small>{row.updatedAt}</small></article>)}</AdminSection>
  <AdminSection id="volunteers" title="Volunteer applications"><RecordTable rows={volunteerRows} type="volunteer" columns={["name","email","phone","district","availability","status"]}/></AdminSection>
  <AdminSection id="donations" title="Donation requests"><RecordTable rows={donationRows} type="donation" columns={["name","email","amount","currency","method","status"]}/></AdminSection>
  <AdminSection id="messages" title="Contact messages"><RecordTable rows={messageRows} type="message" columns={["name","email","message","status"]}/></AdminSection>
  <AdminSection id="activity" title="Recent activity"><RecordTable rows={activityRows} type="activity" columns={["actor","action","entity","createdAt"]}/></AdminSection>
  </section></main>;
}

function AdminSection({id,title,children}:{id:string,title:string,children:React.ReactNode}){return <section className="admin-panel" id={id}><header><h2>{title}</h2></header>{children}</section>}
function RecordTable({rows,type,columns}:{rows:Record<string,unknown>[];type:string;columns:string[]}){return <div className="admin-table-wrap"><table><thead><tr>{columns.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{rows.length?rows.map((row)=><tr key={String(row.id)}>{columns.map(c=><td key={c}>{c==="status"&&type!=="activity"?<select data-record-status data-type={type} data-id={String(row.id)} defaultValue={String(row[c])}><option>new</option><option>pending</option><option>reviewed</option><option>approved</option><option>completed</option><option>declined</option><option>unread</option><option>read</option></select>:String(row[c]??"—")}</td>)}</tr>):<tr><td colSpan={columns.length}>No records yet.</td></tr>}</tbody></table></div>}
