'use client';
import { Dashboard } from '@/features/dasboard';
import { useQuery } from 'react-query';
import { AnalyticsServiceImpl } from '../../api/dashboard.service';
import { useState } from 'react';

export default function Home() {
	const [service] = useState(AnalyticsServiceImpl);
	const { data, isLoading } = useQuery({
		queryFn: service.get
	});
	return <Dashboard data={data ?? []} loading={isLoading} />;
}
