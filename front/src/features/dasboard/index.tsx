'use client';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { Analytics } from '../../api/dashboard.service';
import { BaseCard } from './components/BaseCard';
import { DailyAccessGraph } from './components/DailyAccess';
import { MostAccessedLinksTable } from './components/MostAccessed';

export function Dashboard({
	data,
	loading
}: {
	data: Analytics[];
	loading: boolean;
}) {
	return (
		<SimpleGrid columns={12} spacing={8} p={4} py={8}>
			<GridItem colSpan={[12, 8]} rowSpan={[1, 1]}>
				<BaseCard loading={loading} title='Total de acessos por dia'>
					<DailyAccessGraph data={data} />
				</BaseCard>
			</GridItem>
			<GridItem colSpan={[12, 4]}>
				<BaseCard loading={loading} title='Links mais acessados na semana'>
					<MostAccessedLinksTable data={data} />
				</BaseCard>
			</GridItem>
		</SimpleGrid>
	);
}
