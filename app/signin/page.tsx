type SignInPageProps = {
  searchParams: Promise<{
    return_to?: string | string[];
    error?: string | string[];
  }>;
};

function safeReturnPath(value: string | string[] | undefined): string {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate?.startsWith("/") || candidate.startsWith("//")) return "/admin";
  try {
    const url = new URL(candidate, "https://app.local");
    return url.origin === "https://app.local"
      ? `${url.pathname}${url.search}${url.hash}`
      : "/admin";
  } catch {
    return "/admin";
  }
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;
  const returnTo = safeReturnPath(params.return_to);
  const error = Array.isArray(params.error) ? params.error[0] : params.error;

  return (
    <main className="login-page">
      <section className="login-layout">
        <div className="login-story">
          <a className="login-brand" href="/">
            <img src="/images/paccy_faundation_logo.png" alt="" />
            <span>Paccy Foundation<small>Every child deserves a chance to learn.</small></span>
          </a>
          <div>
            <p className="section-label">Foundation administration</p>
            <h1>Manage impact with confidence.</h1>
            <p>One secure place for applications, donations, messages, website updates and clear activity records.</p>
          </div>
          <p className="login-trust">Protected access for approved team members only.</p>
        </div>
        <div className="login-form-panel">
          <div className="login-form-head">
            <span className="login-lock" aria-hidden="true">●</span>
            <p className="section-label">Secure sign in</p>
            <h2>Welcome back</h2>
            <p>Enter your account details to continue.</p>
          </div>
          {error && <div className="login-error" role="alert">{error}</div>}
          <form className="login-form" action="/api/auth/login" method="post">
            <input type="hidden" name="return_to" value={returnTo} />
            <label>Email address<input name="email" type="email" autoComplete="username" placeholder="you@example.org" required autoFocus /></label>
            <label>Password<input name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required minLength={8} /></label>
            <div className="login-options">
              <label className="login-check"><input type="checkbox" name="remember" /> Keep me signed in</label>
              <a href="mailto:hello@paccyfoundation.org?subject=Password reset request">Forgot password?</a>
            </div>
            <button className="button login-submit" type="submit">Sign in <span>→</span></button>
          </form>
          <a className="login-back" href="/">← Return to website</a>
        </div>
      </section>
    </main>
  );
}
