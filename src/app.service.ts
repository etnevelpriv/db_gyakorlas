import { Injectable } from '@nestjs/common';
import mysql from "mysql2/promise";
@Injectable()
export class AppService {
  private mysqlConnection = mysql.createPool({
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
  });
  getHello(): string {
    return 'Hello World!';
  }

}
