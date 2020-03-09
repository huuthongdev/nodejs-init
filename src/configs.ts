export const getEnv = (key:
    'DB_HOST' |
    'DB_PORT' |
    'DB_USER_NAME' |
    'DB_USER_PASSWORD' |
    'DB_NAME' |
    'MAX_QUERY_LIMIT' |
    'ADMIN_USERNAME' |
    'ADMIN_EMAIL' |
    'ADMIN_PLAIN_PASSWORD' |
    'TOKEN_SECRET_KEY' |
    'TOKEN_ACCESS_EXPIRE_TIME' |
    'TOKEN_REFRESH_EXPIRE_TIME'
) => process.env[key];