import ptbr from 'apexcharts/dist/locales/pt-br.json';
import { ApexOptions } from 'apexcharts';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { DayAnalytics } from '../../../../../../api/dashboard.service';
import { useCallback, useEffect, useMemo, useState } from 'react';

function getUniqueValuesInArray(array: string[]): string[] {
	const uniqueValues = new Set(array);
	return Array.from(uniqueValues);
}
type dataIn = { [x: string]: Pick<DayAnalytics, 'page-views'> }[];

export function useChartData(dailyAccessData: dataIn) {
	const [series, setSeries] = useState<
		ApexAxisChartSeries | ApexNonAxisChartSeries
	>([
		{
			name: 'Total de acessos',
			data: Array.from(Array(dailyAccessData.length).keys())
		}
	]);
	const days = dailyAccessData?.map(data => Object.keys(data)[0]) ?? [];
	const { colorMode } = useColorMode();
	const color = useColorModeValue('gray.50', 'gray.900');
	const options = {
		theme: {
			mode: colorMode === 'dark' ? 'dark' : 'light'
		},
		labels: getUniqueValuesInArray(days) ?? [''],
		legend: {
			position: 'top'
		},
		chart: {
			locales: [ptbr],
			defaultLocale: 'pt-br',
			background: color,
			animations: {
				enabled: true,
				easing: 'easeinout',
				speed: 800,
				animateGradually: {
					enabled: true,
					delay: 150
				},
				dynamicAnimation: {
					enabled: true,
					speed: 350
				}
			},
			height: 350
		},
		tooltip: {
			x: {
				format: 'dd/MMM/yy'
			}
		},
		fill: {
			type: 'gradient'
		},
		xaxis: {
			type: 'datetime',
			title: { text: 'Tempo' },
			labels: {
				format: 'ddd dd/MM/yy'
			}
		},
		yaxis: {
			title: { text: 'Acessos' },
			labels: {
				show: true
			}
		}
	};

	const parseToChartData = useCallback(
		(access: dataIn): ApexAxisChartSeries => {
			const data = access.map(aDailyAccess => {
				const keys = Object.keys(aDailyAccess);
				const data = aDailyAccess[keys[0]]['page-views'];
				return data;
			});
			return [
				{
					name: 'Total de acessos',
					type: 'line',
					data: data
				}
			];
		},
		[]
	);

	useEffect(() => {
		if (dailyAccessData) {
			const result = parseToChartData(dailyAccessData);
			setSeries(result);
		}
	}, [dailyAccessData, parseToChartData]);

	return { options, series };
}
