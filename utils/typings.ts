export type Links = {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
};
export type Attributes = {
  name: string;
  description: string;
  price: string;
  currency: string;
  display_price: string;
};

export type Products = {
  id: string;
  type: string;
  attributes: Attributes;
  links: Links;
};
