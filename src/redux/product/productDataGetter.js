import { products } from './productData.json';

export const getProductsByDept = dept => (
    products.filter(el => el.dept === dept)
);

export const getProductsByCategory = category => (
    products.filter(el => el.category === category)
);
