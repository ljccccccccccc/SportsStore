export class Product {
  constructor (
    //后面的 ? 表示 该参数可选
    public id?: number,
    public name?: string,
    public category?: string ,
    public description?: string,
    public price?: number
  ) {

  }
}
