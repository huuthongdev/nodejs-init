import { app } from './app';
import { ENV, PORT, EnvVariables, BASE_URL } from './configs';
// import { connectDatabase } from './database';

async function main() {
    // ======================= Start Log Infos =======================
    console.log(`\n \
    \n------- APP ------ \
    \n- ENV: ${ENV}  \
    \n- PORT: ${PORT} \
    \n- BASE_URL: ${BASE_URL} \
    `)

    console.log(`\n------- ENV ------ \ `)
    for (const key in EnvVariables) {
        if (EnvVariables.hasOwnProperty(key)) {
            const item = EnvVariables[key];
            console.info(`- ${key}: ${item}`)
        }
    }
    console.info(`\n`)
    // ======================= End Log Infos =======================

    // await connectDatabase();
    app.listen(PORT, () => console.log(`••••• Server start success.\n`));
}

main();