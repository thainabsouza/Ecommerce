const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

async function main() {
  const products = [
    { title: 'Farol corolla 2015 Arteb ', description: 'Produto original feito em acrilico resistent', price: 49.9,imageUrl: 'https://example.com/images/farol-hb20.jpg' },
    { title: 'Farol Jeep Commander Led Arteb', description: 'Produto original feito em acrilico resistent', price: 39.0 ,imageUrl: 'https://example.com/images/farol-hb20.jpg'},
    { title: 'Farol Hb20 Arteb Mascara Negra ', description: 'Produto original feito em acrilico resistente', price: 199.9,imageUrl: 'https://example.com/images/farol-hb20.jpg'},
  ]

  for (const p of products) {
    await prisma.product.create({
      data: p,
    })
  }

  console.log('Seed concluído')
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
