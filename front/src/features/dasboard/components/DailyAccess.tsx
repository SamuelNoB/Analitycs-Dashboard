import dynamic from 'next/dynamic';
import ptbr from 'apexcharts/dist/locales/pt-br.json';
import { ApexOptions } from 'apexcharts';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Analytics, DayAnalytics } from '../../../../api/dashboard.service';
import { useCallback, useEffect, useState } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function getUniqueValuesInArray(array: string[]): string[] {
	const uniqueValues = new Set(array);
	return Array.from(uniqueValues);
}

type dataIn = { [x: string]: Pick<DayAnalytics, 'page-views'> }[];
function useChartData(dailyAccessData: dataIn) {
	const [series, setSeries] = useState<
		ApexAxisChartSeries | ApexNonAxisChartSeries
	>([
		{
			name: 'Total de acessos',
			data: []
		}
	]);

	const { colorMode } = useColorMode();
	const color = useColorModeValue('gray.50', 'gray.900');
	const days = dailyAccessData?.map(data => Object.keys(data)[0]) ?? [];

	const options: ApexOptions = {
		theme: {
			mode: colorMode === 'dark' ? 'dark' : 'light'
		},
		labels: getUniqueValuesInArray(days),
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
		},
		dataLabels: {
			enabled: false
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}
		]
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
		const result = parseToChartData(dailyAccessData);
		setSeries(result);
	}, [dailyAccessData, parseToChartData]);

	return { options, series };
}

export function DailyAccessGraph({ data }: { data: Analytics[] }) {
	console.log(data);

	const { options, series } = useChartData(data);
	return (
		<>
			<Chart options={options} series={series} />
		</>
	);
}
