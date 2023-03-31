import axios from "axios";
import { home, search, apiKey, andApi } from "./api.js";

export let homePage = async (q) => {
  try {
    const response = await axios.get(`${home}${q}&lang=en${andApi}=${apiKey}`);
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
  return;
};
export let categoryNews = async (q) => {
  try {
    const response = await axios.get(`${home}${q}&lang=en${andApi}=${apiKey}`);
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
  return;
};

export let pencarian = async (q) => {
  try {
    const searchData = await axios.get(`${search}${q}&lang=en${andApi}=${apiKey}`);
    return searchData.data.articles;
  } catch (error) {
    console.error(error);
  }
  return;
};
