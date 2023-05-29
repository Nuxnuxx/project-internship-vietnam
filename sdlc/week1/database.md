### Prisma

model User {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  email     String 
  username  String
  password  String
  createdAt DateTime  @default(now())
  cart CartItem[]
  orders    Order[]
}

model Product {
  id             String    @id @default(auto()) @map("_id") @db.ObjectId
  name           String
  description    String
  price          Float
  imageUrl       String
  category       CATEGORY
  quantityInStock Int
  createdAt      DateTime  @default(now())
}

enum CATEGORY {
    // category a faire
}

model CartItem {
  id        String  @id @default(auto()) @map("_id") @db.ObjectId
  userId    String
  user      User    @relation(fields: [userId], references: [id])
  productId String
  product   Product @relation(fields: [productId], references: [id])
  priceAtThisTime Float
  quantity  Int
}

enum ORDER_STATUS {
    PLACED,
    SHIPPED,
    DELIVERED
}

model Order {
  id         String     @id @default(auto()) @map("_id") @db.ObjectId
  userId     String
  user       User       @relation(fields: [userId], references: [id])
  totalCost  Float
  orderStatus ORDER_STATUS @default("STARTED")
  createdAt  DateTime   @default(now())
  items      OrderItem[]
}

model OrderItem {
  id        String  @id @default(auto()) @map("_id") @db.ObjectId
  orderId   String
  order     Order   @relation(fields: [orderId], references: [id])
  productId String
  product   Product @relation(fields: [productId], references: [id])
  quantity  Int
  price     Float
}

https://app.gleek.io/diagrams/T2V95Y6cbcO1Km-d-C4JqA
