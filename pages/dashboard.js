import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetchTips();
    const tipsChannel = supabase
      .channel('custom-all-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tips' }, () => {
        fetchTips(); // refresh tips in real-time
      })
      .subscribe();

    return () => {
      supabase.removeChannel(tipsChannel);
    };
  }, []);

  const fetchTips = async () => {
    const { data, error } = await supabase.from('tips').select('*').order('created_at', { ascending: false });
    if (!error) setTips(data);
  };

  return (
    <div>
      <h1>Latest Football Tips</h1>
      {tips.map((tip) => (
        <div key={tip.id}>
          <h3>{tip.title}</h3>
          <p>{tip.match}</p>
          <small>{new Date(tip.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
