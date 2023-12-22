'use client';
import dynamic from 'next/dynamic';
import { Analytics } from '../../../../api/dashboard.service';
import { useChartData } from './hooks/useChartData';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function DailyAccessGraph({ data }: { data: Analytics[] }) {
	const { options, series } = useChartData(data);

	return (
		<Chart
			type='line'
			height={'100%'}
			width={'100%'}
			options={options}
			series={series}
		/>
	);
}
