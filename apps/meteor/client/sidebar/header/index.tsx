import { Sidebar } from '@rocket.chat/fuselage';
import { useUser, useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React, { memo } from 'react';

import { useFeaturePreview } from '../../hooks/useFeaturePreview';
import UserAvatarButton from './UserAvatarButton';
import Administration from './actions/Administration';
import CreateRoom from './actions/CreateRoom';
import Directory from './actions/Directory';
import Home from './actions/Home';
import Login from './actions/Login';
import Search from './actions/Search';
import Sort from './actions/Sort';

const HeaderWithData = (): ReactElement => {
	const t = useTranslation();
	const user = useUser();

	const newNavbarEnabled = useFeaturePreview('newNavbar');

	if (newNavbarEnabled) {
		return (
			<Sidebar.TopBar.Section>
				<Sidebar.TopBar.Actions w='100%' justifyContent='end'>
					<Search title={t('Search')} />
					{user && (
						<>
							<Directory title={t('Directory')} />
							<Sort title={t('Display')} />
							<CreateRoom title={t('Create_new')} data-qa='sidebar-create' />
							<Administration title={t('Administration')} />
						</>
					)}
					{!user && <Login title={t('Login')} />}
				</Sidebar.TopBar.Actions>
			</Sidebar.TopBar.Section>
		);
	}

	return (
		<Sidebar.TopBar.Section>
			<UserAvatarButton />
			<Sidebar.TopBar.Actions>
				<Home title={t('Home')} />
				<Search title={t('Search')} />
				{user && (
					<>
						<Directory title={t('Directory')} />
						<Sort title={t('Display')} />
						<CreateRoom title={t('Create_new')} data-qa='sidebar-create' />
						<Administration title={t('Administration')} />
					</>
				)}
				{!user && <Login title={t('Login')} />}
			</Sidebar.TopBar.Actions>
		</Sidebar.TopBar.Section>
	);
};

export default memo(HeaderWithData);
