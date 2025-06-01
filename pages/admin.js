import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [match, setMatch] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('tips').insert([{ title, match }]);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Tip added successfully!');
      setTitle('');
      setMatch('');
    }
  };

  return (
    <div>
      <h1>Submit a New Tip</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tip Title (e.g. BTTS & Win)" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Match (e.g. Luton vs Wolves)" value={match} onChange={(e) => setMatch(e.target.value)} required />
        <button type="submit">Submit Tip</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
