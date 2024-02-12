import express, { Express } from 'express';

const app: Express = express();
app.use(express.json());

console.log('starter runs');
