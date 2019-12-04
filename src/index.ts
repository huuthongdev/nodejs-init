import app from './app';
import Configs from './configs';

async function main() {
    console.log(` \ 
    \n###### Server information ###### \
    \n \
    \n------- APP ------ \
    \n- Enviroment: ${Configs.ENV}  \
    \n- Public PORT: ${Configs.PORT} \
    \n \
    \n------- DATABASE ------ \
    \n- Host: ${Configs.DB_HOST} \
    \n- PORT: ${Configs.DB_PORT} \
    \n- DB name: ${Configs.DB_NAME} \
    \n- DB user name: ${Configs.DB_USER_NAME} \
    \n- DB user password: ${Configs.DB_USER_PASSWORD} \
    \n \
    \n------- ADMIN ACCOUNT ------ \
    \n- Name: ${Configs.ADMIN_NAME} \
    \n- Email: ${Configs.ADMIN_EMAIL} \
    \n- Password: ${Configs.ADMIN_PLAIN_PASSWORD} \
    \n`)

    app.listen(Configs.PORT, () => {
        console.log(`••••• Server start success.\n`);
    });
}

main();