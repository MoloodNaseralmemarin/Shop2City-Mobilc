export interface IInformationAccount {
    status: string;
    data: {
      token: string,
      expireTime: number,
      firstName: string,
      lastName: string,
      id: number,
      message: string
    };
  }
  