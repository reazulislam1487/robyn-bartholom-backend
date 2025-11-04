// const create_new_portfolio_into_db = () => { return {}; };

// export const portfolio_service = { create_new_portfolio_into_db };

import { portfolio_model } from "./portfolio.schema";

//  Create new portfolio data into DB
const create_new_portfolio_into_db = async (portfolioData: any) => {
  const result = await portfolio_model.create(portfolioData);
  return result;
};

//  Get all portfolios
const get_all_portfolios_from_db = async () => {
  const result = await portfolio_model.find();
  return result;
};

export const portfolio_service = {
  create_new_portfolio_into_db,
  get_all_portfolios_from_db,
};
