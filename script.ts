import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const post = await prisma.post.create({
  //   data: {
  //     title: 'bob Birthday Party',
  //     content: 'AWesome birthday gages',
  //     published: true,
  //     authorId: 1
  //   }
  // });
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  console.dir(users, {depth: null});
}

main()
  .then(async() => await prisma.$disconnect())
  .catch(async(e) => {
    console.error(e.message);
    await prisma.$disconnect();
    process.exit(1);
  })