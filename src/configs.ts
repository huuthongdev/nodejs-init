import dotenv from 'dotenv'
import { ObjectUtils } from './utils';

export const ENV: 'local' | 'test' | 'production' | 'development' = process.env['ENV'] || 'local' as any;
export const PORT = process.env['PORT'] || 5000;

export const EnvVariables = dotenv.config({ path: `./bin/${ENV}.env` });

if (EnvVariables.error) {
    console.error(EnvVariables.error)
    process.exit(1)
}

export const getEnv = (key:
    // Super Admin Account
    'ADMIN_USERNAME' |
    'ADMIN_EMAIL' |
    'ADMIN_PLAIN_PASSWORD' |
    // Token related
    'TOKEN_SECRET_KEY' |
    'TOKEN_ACCESS_EXPIRE_TIME' |
    'TOKEN_REFRESH_EXPIRE_TIME'
) => ObjectUtils.getIn(EnvVariables.parsed, key);