export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = Boolean(params.error);
  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="brand">Charles Rose</div>
        <h1>Enquiry Dashboard</h1>
        <p>Enter the shared password to view the private analytics dashboard.</p>
        <form action="/api/login" method="post">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required />
          {hasError ? <div className="error">Incorrect password. Please try again.</div> : null}
          <button type="submit">View Dashboard</button>
        </form>
      </section>
    </main>
  );
}
