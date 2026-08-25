const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "college_db",
    password: "admin",
    port: 9090
});

async function main() {
    try {
        await client.connect();

        console.log("PostgreSQL connected");

        const result = await client.query(
            "SELECT * FROM students"
        );

        console.log(result.rows);
    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
} 

main();