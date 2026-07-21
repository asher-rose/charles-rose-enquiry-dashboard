export default function LoginPage({
  searchParams
}: {
  searchParams?: { error?: string };
}) {
  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="brand">Charles Rose</div>
        <h1>Enquiry Dashboard</h1>
        <p>Enter the shared password to view the private analytics dashboard.</p>
        <form action="/api/login" method="post">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required />
          {searchParams?.error ? <div className="error">Incorrect password. Please try again.</div> : null}
          <button type="submit">View Dashboard</button>
        </form>
      </section>
    </main>
  );
}
