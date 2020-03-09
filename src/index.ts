import { app } from './app';
import { ENV, PORT, EnvVariables } from './configs';
import { connectDatabase } from './database';

async function main() {
    // ======================= Start Log Infos =======================
    console.log(`\n \
    \n------- APP ------ \
    \n- ENV: ${ENV}  \
    \n- PORT: ${PORT} \
    `)

    console.log(`\n------- ENV ------ \ `)
    for (const key in EnvVariables.parsed) {
        if (EnvVariables.parsed.hasOwnProperty(key)) {
            const item = EnvVariables.parsed[key];
            console.info(`- ${key}: ${item}`)
        }
    }
    console.info(`\n`)
    // ======================= End Log Infos =======================

    await connectDatabase();
    app.listen(PORT, () => console.log(`••••• Server start success.\n`));
}

main();