// import { getConnection } from "typeorm";
// import { connectDatabase } from ".";
// import { ENV } from "../configs";

// async function TestHelper() {
//     if (ENV === 'test') {
//         before(async () => connectDatabase())

//         beforeEach('Remove all data before each test case', async () => {
//             const connection = getConnection();
//             await connection.dropDatabase();
//             await connection.synchronize();
//         });
//     }
// }

// TestHelper();