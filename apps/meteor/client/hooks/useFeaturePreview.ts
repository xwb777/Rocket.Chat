import { useUserPreference } from '@rocket.chat/ui-contexts';

type FeaturesAvailable = 'newNavbar' | 'contextualbarResizable';

export const useFeaturePreview = (featureName: FeaturesAvailable) => {
	const features = useUserPreference<{ name: string; value: boolean }[]>('featuresPreview');
	const currentFeature = features?.find((feature) => feature.name === featureName);

	if (!currentFeature) {
		return false;
	}

	return currentFeature.value;
};
