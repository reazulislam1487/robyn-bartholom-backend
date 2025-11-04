import { reviews_model } from "./reviews.schema";

const create_new_reviews_into_db = async(reviewData:any) => { 
    const result = await reviews_model.create(reviewData);
  return result;
 };
 const get_all_reviews_from_db = async () => {
  const result = await reviews_model.find();
  return result;
};

export const reviews_service = { create_new_reviews_into_db,get_all_reviews_from_db };


// 
