import {Products} from './typings';

let page = 1;
const apiUrl = 'https://demo.spreecommerce.org';
const apiProducts = '/api/v2/storefront/products';
const sizeImage = '/200/300';
// const randomImage = `https://picsum.photos${sizeImage}?random=1`;
const currentImage = 'https://picsum.photos/id/';

type ApiProducts = {
  data: Products[],
};

export const getProducts = async (reload?: boolean): Promise<Products[]> => {
  if (reload) {
    page = 1;
  }
  const pageUrl = `?page=${page}`;
  const url = `${apiUrl}${apiProducts}${pageUrl}&per_page=5`;
  const response = await fetch(url);
  const json: ApiProducts = await response.json();
  page += 1;
  // TODO: Hack for using image from picsum inseam
  return json.data.map((item) => {
    item.attributes.image = `${currentImage}${item.id}${sizeImage}`;
    return item;
  });
};

export const getProduct = async (id?: string): Promise<Products> => {
  const url = `${apiUrl}${apiProducts}${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
};
