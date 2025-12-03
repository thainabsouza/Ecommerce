export interface IOrdersRepository {
  create(data: any): Promise<any>;
  findAll(): Promise<any>;
}
