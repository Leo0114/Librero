import { axiosInstance } from "./config";

export const getBookPostion = async (copyId: string, inventory: string) => {
  // copyId es id_ejemplar
  const response = axiosInstance.get(`book/${copyId}`, {
    params: { inventory },
  });

  return response;
};
