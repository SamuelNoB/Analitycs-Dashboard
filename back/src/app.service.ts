import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
const data = [
  {
    '2023-12-22': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-21': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-20': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-19': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-18': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-17': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-16': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-15': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
      'clicked-links': {
        'link-01': 20,
        'link-02': 5,
        'link-03': 5,
      },
    },
  },
  {
    '2023-12-14': {
      'page-views': faker.number.int({ min: 0, max: 1000 }),
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
