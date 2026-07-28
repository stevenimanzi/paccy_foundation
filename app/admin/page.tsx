import { count, desc, gt } from "drizzle-orm";
import { getDb } from "../../db";
import { activity, content, donations, galleryItems, messages, pageViews, users, userSessions, volunteers } from "../../db/schema";
import { requireUser } from "../auth";
import { AdminActions } from "./AdminActions";
import { AdminTabs } from "./AdminTabs";
import { AdminSearch } from "./AdminSearch";

export const dynamic = "force-dynamic";

export default async function AdminPage(){
  const user=await requireUser("/admin");
  const db=getDb();
  const [volunteerRows,donationRows,messageRows,contentRows,activityRows,userRows,visitorRows,userCountRows,viewCountRows,activeSessionRows,galleryRows]=await Promise.all([
    db.select().from(volunteers).orderBy(desc(volunteers.id)).limit(50),
    db.select().from(donations).orderBy(desc(donations.id)).limit(50),
    db.select().from(messages).orderBy(desc(messages.id)).limit(50),
    db.select().from(content).orderBy(desc(content.id)).limit(30),
    db.select().from(activity).orderBy(desc(activity.id)).limit(30),
    db.select({id:users.id,name:users.name,email:users.email,role:users.role,status:users.status,lastLoginAt:users.lastLoginAt}).from(users).orderBy(desc(users.id)).limit(50),
    db.select({id:pageViews.id,visitorId:pageViews.visitorId,path:pageViews.path,createdAt:pageViews.createdAt}).from(pageViews).orderBy(desc(pageViews.id)).limit(50),
    db.select({value:count()}).from(users),
    db.select({value:count()}).from(pageViews),
    db.select({value:count()}).from(userSessions).where(gt(userSessions.expiresAt,new Date().toISOString())),
    db.select().from(galleryItems).orderBy(desc(galleryItems.id)).limit(50),
  ]);
  return <main className="admin-shell"><aside className="admin-sidebar"><a className="admin-brand" href="/"><img src="/images/paccy_faundation_logo.png" alt=""/><span>Paccy Foundation<small>Administration</small></span></a><AdminSearch/><nav><a className="is-active" href="#overview">Dashboard</a><a href="#users">Users</a><a href="#content">Content</a><a href="#gallery">Gallery</a><a href="#volunteers">Volunteers</a><a href="#donations">Donations</a><a href="#messages">Messages</a><a href="#activity">Activity</a></nav><form className="admin-signout-form" action="/api/auth/logout" method="post"><button className="admin-signout" type="submit">Sign out</button></form></aside><section className="admin-main"><header><div><p className="section-label">Administration</p><h1><span className="admin-hero-icon">⌁</span> Foundation control center.</h1><p>Live platform activity · Signed in as {user.name}</p></div><a className="button button-small" href="/" target="_blank">View website ↗</a></header><AdminActions/><div className="admin-tab-analytics"><span><b>{viewCountRows[0]?.value??0}</b> visits</span><span><b>{activeSessionRows[0]?.value??0}</b> active sessions</span><span><b>{userCountRows[0]?.value??0}</b> users</span></div><AdminTabs/>
  <section className="admin-stats" id="overview"><article><span>Platform users</span><strong>{userCountRows[0]?.value??0}</strong></article><article><span>Active sessions</span><strong>{activeSessionRows[0]?.value??0}</strong></article><article><span>Website visits</span><strong>{viewCountRows[0]?.value??0}</strong></article><article><span>Volunteer applications</span><strong>{volunteerRows.length}</strong></article><article><span>Donation requests</span><strong>{donationRows.length}</strong></article><article><span>Unread messages</span><strong>{messageRows.filter(x=>x.status==="unread").length}</strong></article></section>
  <AdminSection id="users" title="Platform users"><RecordTable rows={userRows} type="user" columns={["name","email","role","status","lastLoginAt"]}/><h3 className="admin-subtitle">Recent website visits</h3><RecordTable rows={visitorRows} type="visitor" columns={["visitorId","path","createdAt"]}/></AdminSection>
  <AdminSection id="content" title="Website content"><form className="admin-content-form" action="/api/admin" method="post"><label>Page<select name="page"><option>about</option><option>founder</option><option>programs</option><option>who-we-help</option><option>get-involved</option><option>donate</option><option>volunteer</option><option>partners</option><option>news</option><option>events</option><option>gallery</option><option>success-stories</option><option>faq</option><option>contact</option><option>privacy</option><option>terms</option><option>child-protection</option></select></label><label>Content field<select name="field"><option value="eyebrow">Section label</option><option value="title">Main title</option><option value="intro">Introduction</option></select></label><label className="wide">New content<textarea name="value" rows={4} required/></label><button className="button button-small" type="submit">Publish content</button></form><h3 className="admin-subtitle">Current editable content</h3><div className="admin-current-content">{contentRows.map(row=><form action="/api/admin" method="post" className="admin-edit-content" key={row.id}><input type="hidden" name="page" value={row.page}/><input type="hidden" name="field" value={row.field}/><div><strong>{row.page} · {row.field}</strong><small>{row.updatedAt}</small></div><textarea name="value" rows={3} defaultValue={row.value} required/><button className="button button-small" type="submit">Save changes</button></form>)}</div></AdminSection>
  <AdminSection id="gallery" title="Gallery manager"><form className="admin-content-form" action="/api/admin" method="post"><input type="hidden" name="action" value="gallery"/><label>Image title<input name="title" required placeholder="Community school visit"/></label><label>Image URL<input name="imageUrl" type="url" required placeholder="https://..."/></label><label className="wide">Caption<textarea name="caption" rows={3} placeholder="Describe this moment"/></label><button className="button button-small" type="submit">Add to gallery</button></form><div className="admin-gallery-grid">{galleryRows.map(item=><article key={item.id}><img src={item.imageUrl} alt={item.title}/><div><strong>{item.title}</strong><p>{item.caption}</p><small>{item.status} · {item.createdAt}</small></div></article>)}</div></AdminSection>
  <AdminSection id="volunteers" title="Volunteer applications"><RecordTable rows={volunteerRows} type="volunteer" columns={["name","email","phone","district","availability","status"]}/></AdminSection>
  <AdminSection id="donations" title="Donation requests"><RecordTable rows={donationRows} type="donation" columns={["name","email","amount","currency","method","status"]}/></AdminSection>
  <AdminSection id="messages" title="Contact messages"><RecordTable rows={messageRows} type="message" columns={["name","email","message","status"]}/></AdminSection>
  <AdminSection id="activity" title="Recent activity"><RecordTable rows={activityRows} type="activity" columns={["actor","action","entity","createdAt"]}/></AdminSection>
  </section></main>;
}

function AdminSection({id,title,children}:{id:string,title:string,children:React.ReactNode}){return <section className="admin-panel" id={id} hidden><header><h2>{title}</h2></header>{children}</section>}
function RecordTable({rows,type,columns}:{rows:Record<string,unknown>[];type:string;columns:string[]}){return <div className="admin-table-wrap"><table><thead><tr>{columns.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{rows.length?rows.map((row)=><tr key={String(row.id)}>{columns.map(c=><td key={c}>{c==="status"&&type!=="activity"?<select data-record-status data-type={type} data-id={String(row.id)} defaultValue={String(row[c])}><option>new</option><option>pending</option><option>reviewed</option><option>approved</option><option>completed</option><option>declined</option><option>unread</option><option>read</option></select>:String(row[c]??"—")}</td>)}</tr>):<tr><td colSpan={columns.length}>No records yet.</td></tr>}</tbody></table></div>}
