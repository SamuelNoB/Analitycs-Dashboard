'use client';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Text
} from '@chakra-ui/react';
import { Analytics } from '../../../../api/dashboard.service';
import { getLastWeekMostAccessedLinks } from './functions/getLastWeekMostAccessedLinks';
import { formatBrazilianNumber } from '@/functions/numbers/formatBrazilianNumber';
export function MostAccessedLinksTable({ data }: { data: Analytics[] }) {
	const result = getLastWeekMostAccessedLinks(data);

	return (
		<TableContainer>
			<Table colorScheme='gray.500' variant='striped'>
				<Thead>
					<Tr>
						<Th>Links</Th>
						<Th isNumeric>Acessos</Th>
					</Tr>
				</Thead>
				<Tbody>
					{result.map(aLink => {
						return (
							<Tr _dark={{ _odd: { bgColor: 'gray.600' } }} key={aLink.link}>
								<Td>
									<Text fontWeight={'bold'}>{aLink.link}</Text>
								</Td>
								<Td isNumeric>
									{formatBrazilianNumber(aLink.clicks, false, 0)}
								</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
