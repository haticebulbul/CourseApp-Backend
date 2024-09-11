import { Hono } from 'hono';
import { courses } from './courses';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server'


const app = new Hono();

app.use('*', cors()); 

app.get('/api/courses', (c) => {
  return c.json(courses);
});



serve(app)
export default app;

