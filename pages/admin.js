import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Layout from '../components/Layout';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [match, setMatch] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('tips').insert([{ title, match }]);
    setMessage(error ? error.message : 'Tip added successfully!');
  };

  return (
    <Layout>
      <h1>Post a New Tip</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Match" value={match} onChange={(e) => setMatch(e.target.value)} required />
        <button type="submit">Submit Tip</button>
      </form>
      <p>{message}</p>
    </Layout>
  );
}
