import pkg from 'pg';
const { Pool } = pkg;

export const db = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'database',
    password: 'pass',
    port: 5432,
});

db.on('connect', () => {
    console.log('Connected to PostgreSQL');
});

export default db;


export class RoupaRepository {
    async findAll() {
        try {
            const response = await db.query('SELECT * FROM clube');
            const linhas = response.rows;

            // Exibe os resultados
            console.log(linhas);

            return linhas;
        } catch (err) {
            console.error('Erro na consulta:', err.stack);
            return [];
        }
    }

    async findById(id) {
        const result = await db.query('SELECT * FROM table WHERE id = $1', [id]);
        return result.rows[0] || null;
    }

    async create(user) {
        const { name, email } = user;
        const result = await db.query(
            `INSERT INTO table (field, field) VALUES ($1, $2) RETURNING *`,
            [name, email]
        );
        return result.rows[0];
    }

    async delete(id) {
        await db.query('DELETE FROM table WHERE id = $1', [id]);
    }
}
