import { DayAnalytics } from '../../../../../../api/dashboard.service';
import { subDays, format } from 'date-fns';

type dataIn = { [x: string]: Pick<DayAnalytics, 'clicked-links'> }[];
type mostAccessedLinks = { [x: string]: number };
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

export function getLastWeekMostAccessedLinks(analyticsData: dataIn) {
	const lastSevenDaysDates = filterlastSevenDaysDates(analyticsData);
	const result: mostAccessedLinks = {};
	for (const aDay of lastSevenDaysDates) {
		const dateStats = analyticsData.find(aData =>
			Object.keys(aData).includes(aDay)
		);
		if (dateStats) {
			const clickedLinks = Object.keys(dateStats[aDay]['clicked-links']);
			clickedLinks.forEach(link => {
				if (link in result) {
					result[link] = result[link] + dateStats[aDay]['clicked-links'][link];
					return;
				}
				result[link] = dateStats[aDay]['clicked-links'][link];
			});
		}
	}

	return result;
}
