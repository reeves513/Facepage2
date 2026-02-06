import { useState, useEffect } from 'react';
import { signUp, signIn, signOut, getUser, supabase } from '../supabaseClient';

export default function Navbar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Check if user is already logged in on load
  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) setUser(data.session.user);
    };
    fetchSession();

    // Subscribe to auth changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) setUser(session.user);
      else setUser(null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // Sign Up
  const handleSignUp = async () => {
    setError(null);
    const { data, error } = await signUp(email, password);
    if (error) setError(error.message);
    else setUser(data.user);
  };

  // Login
  const handleSignIn = async () => {
    setError(null);
    const { data, error } = await signIn(email, password);
    if (error) setError(error.message);
    else setUser(data.user);
  };

  // Logout
  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) setUser(null);
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0d1b2a', color: 'white' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>FACEPAGE</h1>

      {!user ? (
        <div style={{ marginTop: '1rem' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: '0.5rem', padding: '0.3rem' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginRight: '0.5rem', padding: '0.3rem' }}
          />
          <button onClick={handleSignUp} style={{ marginRight: '0.5rem' }}>Sign Up</button>
          <button onClick={handleSignIn}>Login</button>
          {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
        </div>
      ) : (
        <div style={{ marginTop: '1rem' }}>
          <p>Welcome, {user.email}</p>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      )}
    </nav>
  );
              }
