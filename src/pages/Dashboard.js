
import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:8000/tasks');
      const data = await res.json();
      setTasks(data.tasks);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(); // 📌 Fetch tasks on load
  }, []);

  useEffect(() => {
    console.log('Tasks updated:', tasks); // 📌 Debug log
  }, [tasks]);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? <p>Loading tasks...</p> : tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
