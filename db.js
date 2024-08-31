import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,      // your Supabase DB user
    host: process.env.DB_HOST,      // your Supabase DB host
    database: process.env.DB_NAME,  // your Supabase DB name
    password: process.env.DB_PASSWORD, // your Supabase DB password
    port: process.env.DB_PORT       // typically 5432
});


export default pool;
