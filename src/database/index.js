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
exports.connectDatabase = void 0;
// require('dotenv').config()
const mongodb_1 = require("mongodb");
// If the line below doesn't work, just patse the whole link of mongodb there. Make sure not duplicate mongodb.net
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;
// const url = `mongodb+srv://user1234:user1234@cluster0.9tfmlxu.mongodb.net/?retryWrites=true&w=majority`
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield mongodb_1.MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = client.db(process.env.DB_NAME);
    return {
        client: client,
        messages: db.collection("messages"),
        members: db.collection("members"),
        users: db.collection("users"),
        organizations: db.collection("organizations")
    };
});
exports.connectDatabase = connectDatabase;
