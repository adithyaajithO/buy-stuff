import { departments, categories } from './departmentData.json';

export const getCategoriesByDept = dept => (
    departments.filter(el => el.dept === dept)
);

export const getAllDepts = () => departments;

export const getAllCategories = () => categories;
