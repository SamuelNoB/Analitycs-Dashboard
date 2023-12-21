import { Injectable } from '@nestjs/common';
const data = [
  {
    '2023-12-01': {
      'page-views': 30,
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAnalytics() {
    return data;
  }
}
