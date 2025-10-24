//id                  Int              @id @default(autoincrement())
  //username            String           @unique
  //name                String
  //email               String           @unique
  //password_hash       String
  //profile_picture_url String?
  //createdAt           DateTime         @default(now())
  //updatedAt           DateTime         @updatedAt
  //stores              Stores[]
  //store_ratings       StoreRatings[]
  //product_ratings     ProductRatings[]
  //rating_comments     RatingComments[]

export type usersdto = {
    username: string;
    name: string;
    email: string;
    password_hash: string;
    profile_picture_url?: string;
  }