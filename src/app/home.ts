import { PrismaClient } from '@prisma/client'
import * as prismaServices from './services/prisma';

const prismaClient = new PrismaClient()

export function home(req, res) {

  // prismaServices.connectPrismaClient();
  // connectPrismaClient(() => {

    res.json({
      message: "Hello from server",
      author: "Joachim Dorel"
    })
  // });
}

