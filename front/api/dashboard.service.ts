export type DayAnalytics = {
	'page-views': number;
	'clicked-links': { [x: string]: number };
};

export type Analytics = {
	[x: string]: DayAnalytics;
};

export interface AnalyticsService {
	get: () => Promise<Analytics[]>;
}

const url = 'http://localhost:3000';
export const AnalyticsServiceImpl: AnalyticsService = {
	async get(): Promise<Analytics[]> {
		const res = await fetch(url + '/analytics?days=30&links=12', {
			method: 'GET'
		});
		return await res.json();
	}
};
