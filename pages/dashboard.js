import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Layout from '../components/Layout';

export default function Dashboard() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      const { data } = await supabase.from('tips').select('*').order('created_at', { ascending: false });
      setTips(data || []);
    };
    fetchTips();
  }, []);

  return (
    <Layout>
      <h1>Latest Tips</h1>
      <ul>
        {tips.map((tip) => (
          <li key={tip.id}><strong>{tip.title}</strong> - {tip.match}</li>
        ))}
      </ul>
    </Layout>
  );
}
