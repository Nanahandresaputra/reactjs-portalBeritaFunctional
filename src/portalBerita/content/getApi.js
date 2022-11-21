import axios from "axios";
import { home, search, apiKey } from "./api";

export let homePage = async () => {
  try {
    const response = await axios.get(home);
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
  return;
};

export let pencarian = async (q) => {
  try {
    const searchData = await axios.get(`${search}${q}${apiKey}`);
    return searchData.data.articles;
  } catch (error) {
    console.error(error);
  }
  return;
};
