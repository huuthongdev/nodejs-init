import { app } from './app';
import { ENV, PORT, EnvVariables } from './configs';

async function main() {
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

    app.listen(PORT, () => {
        console.log(`••••• Server start success.\n`);
    });
}

main();