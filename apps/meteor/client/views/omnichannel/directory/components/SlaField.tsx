import { Box } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import React from 'react';

import Field from '../../components/Field';
import Info from '../../components/Info';
import Label from '../../components/Label';
import { useSlaInfo } from '../hooks/useSlaInfo';
import { FormSkeleton } from './FormSkeleton';

type SlaFieldProps = {
	id: string;
};

const SlaField = ({ id }: SlaFieldProps) => {
	const t = useTranslation();
	const { data, isLoading, isError } = useSlaInfo(id);

	if (isLoading) {
		return <FormSkeleton />;
	}

	if (isError || !data) {
		return <Box mbs='x16'>{t('Custom_Field_Not_Found')}</Box>;
	}

	const { name } = data;
	return (
		<Field>
			<Label>{t('SLA_Policy')}</Label>
			<Info>{name}</Info>
		</Field>
	);
};

export default SlaField;