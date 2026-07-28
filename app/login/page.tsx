import { chatGPTSignInPath } from "../chatgpt-auth";

export default function LoginPage() {
  return <main className="login-page"><section className="login-card"><img src="/images/paccy_faundation_logo.png" alt="Paccy Foundation logo"/><p className="section-label">Secure administration</p><h1>Welcome back.</h1><p>Sign in securely to manage website content, volunteer applications, donation requests, messages, and activity records.</p><a className="button" href={chatGPTSignInPath("/admin")}>Sign in to dashboard <span>→</span></a><a className="login-back" href="/">← Return to website</a></section></main>;
}
