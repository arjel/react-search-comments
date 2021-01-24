import { Comment } from './../model/Comment';

const BASE_URL = 'https://jsonplaceholder.typicode.com/comments?q=';

const getComments = async (text: string): Promise<Comment[]> => {
  const response = await fetch(`${BASE_URL}${text}`);
  return response.json();
};

export const Api = {
  getComments,
};
