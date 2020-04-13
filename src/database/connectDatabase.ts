import { createConnection } from "typeorm";
import { getEnv } from "../configs";

export async function connectDatabase() {
    try {
        const connection = await createConnection({
            type: 'postgres',
            host: getEnv('DATABASE_HOST'),
            port: getEnv('DATABASE_PORT'),
            username: getEnv('DATABASE_USER'),
            password: getEnv('DATABASE_USER_PASSWORD'),
            database: getEnv('DATABASE_NAME'),
            maxQueryExecutionTime: 20000,
            cache: false,
            synchronize: true,
            logging: false,
            entities: [
            ],
        });

        console.info(`••••• Connect database success.`);

        return connection;
    } catch (error) {
        console.error('Error: Connect database failed.');
        console.error(error);
        process.exit(1);
    }
}
