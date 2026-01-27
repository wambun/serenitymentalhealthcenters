'use client';

import { Analytics } from '@shipixen/pliny/analytics';
import { siteConfig } from '@/data/config/site.settings';

export const AnalyticsWrapper = () => {
    const analyticsConfig = siteConfig.analytics;

    if (!analyticsConfig) {
        return null;
    }

    return (
        <Analytics analyticsConfig={analyticsConfig} />
    );
};
