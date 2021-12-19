const apiUrl = "https://demo.spreecommerce.org";
const apiProducts = "/api/v2/storefront/products";

export const getProducts = async (id?: string) => {
  try {
    const url = !!id
      ? `${apiUrl}${apiProducts}/${id}`
      : `${apiUrl}${apiProducts}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return {error: error};
  }
};
