import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer
} from '@chakra-ui/react';
import { Analytics } from '../../../../../api/dashboard.service';
import { getLastWeekMostAccessedLinks } from './functions/getLastWeekMostAccessedLinks';
export function MostAccessedLinksTable({ data }: { data: Analytics[] }) {
	const result = getLastWeekMostAccessedLinks(data);

	return (
		<TableContainer>
			<Table variant='striped'>
				<Thead>
					<Tr>
						<Th>Links</Th>
						<Th isNumeric>Acessos</Th>
					</Tr>
				</Thead>
				<Tbody>
					{Object.keys(result).map(aKey => {
						return (
							<>
								<Tr>
									<Td>{aKey}</Td>
									<Td isNumeric>{result[aKey]}</Td>
								</Tr>
							</>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
