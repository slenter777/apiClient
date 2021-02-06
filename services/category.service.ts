import { Controller } from 'api/http/Controller';
import { Category } from 'types/type/category.type';

class CategoryService {
  private controller = new Controller('category');

  getCategoryByKey(key: string): Promise<Category> {
    return this.controller.Get(':key', { params: { key } });
  }

  categoryCreate(data: any): Promise<Category> {
    return this.controller.Post('create', data);
  }

  categoryDelete(data: any): Promise<Category> {
    return this.controller.Delete('delete', data);
  }

  getAllCategory(): Promise<Category> {
    return this.controller.Get('all');
  }
}

export const categoryService = new CategoryService();