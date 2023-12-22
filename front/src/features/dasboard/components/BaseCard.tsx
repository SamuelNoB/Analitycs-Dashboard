'use client';
import { ReactNode } from 'react';

import {
	Card,
	CardHeader,
	Flex,
	HStack,
	Tag,
	CardBody,
	Center,
	Spinner,
	Text,
	CardProps
} from '@chakra-ui/react';

interface BaseCardProps extends CardProps {
	title: string;

	noDate?: boolean;
	children: ReactNode;
	header?: boolean;
	loading: boolean;
}
export function BaseCard({
	title,
	header = true,
	children,
	loading,
	noDate = false,
	...rest
}: BaseCardProps) {
	return (
		<Card
			bg='gray.50'
			_dark={{ bg: 'gray.700' }}
			rounded='md'
			shadow='md'
			h='full'
			{...rest}
		>
			{header && (
				<CardHeader bg={'gray.200'} _dark={{ bg: 'gray.600' }} rounded='md'>
					<Flex justify='space-between' align='center'>
						<HStack>
							<Text
								fontSize='md'
								color='gray.500'
								_dark={{ color: 'gray.100' }}
								fontWeight='bold'
							>
								{title}
							</Text>
						</HStack>
					</Flex>
				</CardHeader>
			)}

			<CardBody>
				{loading ? (
					<Center>
						<Spinner size='xl' />
					</Center>
				) : (
					<>{children}</>
				)}
			</CardBody>
		</Card>
	);
}
