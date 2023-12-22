'use client';
import { Dashboard } from '@/features/dasboard';
import { useQuery } from 'react-query';
import { AnalyticsServiceImpl } from '../../api/dashboard.service';

export default function Home() {
	const service = new AnalyticsServiceImpl();
	const { data, isLoading } = useQuery({
		queryFn: service.get
	});
	return <Dashboard data={data ?? []} loading={isLoading} />;
}
