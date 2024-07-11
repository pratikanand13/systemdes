"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: 'postgresql://postgres:123@localhost:5434/nest?schema=public'
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO userss (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertData();
