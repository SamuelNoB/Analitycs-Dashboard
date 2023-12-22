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
export class AnalyticsServiceImpl implements AnalyticsService {
	async get(): Promise<Analytics[]> {
		const res = await fetch(url + '/analytics', { method: 'GET' });
		return await res.json();
	}
}
