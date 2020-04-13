import dotenv from 'dotenv'
import { ObjectUtils } from './utils';

export const ENV: 'local' | 'test' | 'production' | 'development' = process.env['ENV'] || 'local' as any;
export const PORT = process.env['PORT'] || 5000;
export const BASE_URL = process.env['BASE_URL'] || '/api';

export const DotEnv = dotenv.config({ path: `./bin/${ENV}.env` });

if (DotEnv.error) {
    console.error(DotEnv.error)
    process.exit(1)
}

// @ts-ignore
export const EnvVariables = Object.keys(DotEnv.parsed).reduce((obj, key) => {
    obj[key] = process.env[key] || ObjectUtils.getIn(DotEnv.parsed, key)
    return obj;
}, {})

export const getEnv = (key:
    // Internal Communication
    'INTERNAL_KEY' |
    'INTERNAL_URI_SERVICE_INTERNAL_STAFF' |
    // Database
    'DATABASE_HOST' |
    'DATABASE_PORT' |
    'DATABASE_USER' |
    'DATABASE_USER_PASSWORD' |
    'DATABASE_NAME' |
    'DATABASE_MAX_QUERY_LIMIT'
) => EnvVariables[key];
