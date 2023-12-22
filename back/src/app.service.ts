import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { format, subDays } from 'date-fns';

function generateLinkData() {
  const obj = {
    link: faker.internet.domainName(),
    clicks() {
      return faker.number.int({ min: 0, max: 1000 });
    },
  };
  return obj;
}
function analyticsGenerator(
  amountOfDaysFromToday: number = 7,
  amountOfLinks: number = 3,
) {
  const links: { link: string; clicks(): number }[] = [];
  for (let i = 0; i < amountOfLinks; i++) {
    links.push(generateLinkData());
  }

  const today = new Date();
  const daysList = [format(today, 'yyyy-MM-dd')];
  let lastDay = today;
  for (let i = 0; i < amountOfDaysFromToday; i++) {
    lastDay = subDays(lastDay, 1);
    daysList.push(format(lastDay, 'yyyy-MM-dd'));
  }
  const days = daysList.map((aDay) => {
    const obj: { [x: string]: any } = {};
    const clickedLinks: { [x: string]: number } = {};
    let pageViews = 0;
    links.forEach((link) => {
      clickedLinks[link.link] = link.clicks();
      pageViews += clickedLinks[link.link];
    });
    obj[aDay] = {
      'page-views': pageViews,
      'clicked-links': clickedLinks,
    };
    return obj;
  });
  return days;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAnalytics(days?: number, links?: number) {
    return analyticsGenerator(days, links);
  }
}
