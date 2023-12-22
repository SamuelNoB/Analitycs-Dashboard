import { DayAnalytics } from '../../../../../api/dashboard.service';
import { subDays, format } from 'date-fns';

type dataIn = { [x: string]: Pick<DayAnalytics, 'clicked-links'> }[];
type mostAccessedLinks = { link: string; clicks: number };
function lastWeekDate() {
	const today = new Date();
	const sevenDaysAgo = subDays(today, 7);
	const formatedSevenDaysAgo = format(sevenDaysAgo, 'yyyy-MM-dd');
	return formatedSevenDaysAgo;
}

function filterlastSevenDaysDates(analyticsData: dataIn) {
	const formatedSevenDaysAgo = lastWeekDate();

	const allDates = analyticsData?.map(aData => Object.keys(aData)[0]) ?? [];
	return allDates.filter(aDate => aDate > formatedSevenDaysAgo);
}
function compare(a: mostAccessedLinks, b: mostAccessedLinks) {
	if (a.clicks < b.clicks) {
		return -1;
	}
	if (a.clicks > b.clicks) {
		return 1;
	}
	return 0;
}

function compareObjects<dataType>(
	key: keyof dataType,
	order: 'asc' | 'desc' = 'asc'
) {
	if (order === 'asc') {
		const compareAsc = (a: dataType, b: dataType) => {
			if (a[key] < b[key]) {
				return -1;
			}
			if (a[key] > b[key]) {
				return 1;
			}
			return 0;
		};
		return compareAsc;
	}

	const compareDesc = (a: dataType, b: dataType) => {
		if (a[key] < b[key]) {
			return 1;
		}
		if (a[key] > b[key]) {
			return -1;
		}
		return 0;
	};
	return compareDesc;
}

export function getLastWeekMostAccessedLinks(analyticsData: dataIn) {
	const lastSevenDaysDates = filterlastSevenDaysDates(analyticsData);
	const result: mostAccessedLinks[] = [];
	for (const aDay of lastSevenDaysDates) {
		const dateStats = analyticsData.find(aData =>
			Object.keys(aData).includes(aDay)
		);
		if (dateStats) {
			const clickedLinks = Object.keys(dateStats[aDay]['clicked-links']);
			clickedLinks.forEach(link => {
				const foundLink = result.find(aLink => aLink.link === link);
				if (foundLink) {
					foundLink.clicks += dateStats[aDay]['clicked-links'][link];
					return;
				}
				result.push({ link, clicks: dateStats[aDay]['clicked-links'][link] });
			});
		}
	}

	return result.sort(compareObjects<mostAccessedLinks>('clicks', 'desc'));
}
