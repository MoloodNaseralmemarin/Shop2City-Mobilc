export interface IResponseResult<T> {
  status: string;
  message: string;
  data: T;
}