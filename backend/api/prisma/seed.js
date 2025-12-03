import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tools = [
    { title: "Carcaça", imageUrl: "https://i.postimg.cc/tool1.jpg" },
    { title: "farol", imageUrl: "https://i.postimg.cc/MTyfhFdb/farol2.png" },
    { title: "lanterna", imageUrl: "https://i.postimg.cc/NM12Wzp4/lanterna.png" },
    { title: "lente de lanterna", imageUrl: "https://i.postimg.cc/brpS89Bm/lente.png" },
    { title: "lente de farol", imageUrl: "https://i.postimg.cc/d18Zzx4R/lente-farol.png" },
  ];

  for (const tool of tools) {
    await prisma.menuToolsButton.upsert({
      where: { title: tool.title },
      update: {},
      create: tool,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
