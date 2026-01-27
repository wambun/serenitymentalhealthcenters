const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

export interface UnsplashImage {
    id: string;
    url: string;
    thumb: string;
    description: string | null;
    alt: string | null;
    photographer: string;
    photographerUrl: string;
    downloadUrl: string;
}

interface UnsplashSearchResult {
    id: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    description: string | null;
    alt_description: string | null;
    user: {
        name: string;
        links: {
            html: string;
        };
    };
    links: {
        download_location: string;
    };
}

interface UnsplashSearchResponse {
    total: number;
    total_pages: number;
    results: UnsplashSearchResult[];
}

export async function searchImages(
    query: string,
    options: {
        perPage?: number;
        page?: number;
        orientation?: 'landscape' | 'portrait' | 'squarish';
    } = {}
): Promise<UnsplashImage[]> {
    if (!UNSPLASH_ACCESS_KEY) {
        throw new Error('UNSPLASH_ACCESS_KEY is not configured');
    }

    const { perPage = 10, page = 1, orientation = 'landscape' } = options;

    const params = new URLSearchParams({
        query,
        per_page: perPage.toString(),
        page: page.toString(),
        orientation,
    });

    const response = await fetch(`${UNSPLASH_API_URL}/search/photos?${params}`, {
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data: UnsplashSearchResponse = await response.json();

    return data.results.map((result) => ({
        id: result.id,
        url: `${result.urls.raw}&w=2070&q=80&auto=format&fit=crop`,
        thumb: result.urls.thumb,
        description: result.description,
        alt: result.alt_description,
        photographer: result.user.name,
        photographerUrl: result.user.links.html,
        downloadUrl: result.links.download_location,
    }));
}

export async function getImageById(id: string): Promise<UnsplashImage | null> {
    if (!UNSPLASH_ACCESS_KEY) {
        throw new Error('UNSPLASH_ACCESS_KEY is not configured');
    }

    const response = await fetch(`${UNSPLASH_API_URL}/photos/${id}`, {
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
    });

    if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`Unsplash API error: ${response.status}`);
    }

    const result: UnsplashSearchResult = await response.json();

    return {
        id: result.id,
        url: `${result.urls.raw}&w=2070&q=80&auto=format&fit=crop`,
        thumb: result.urls.thumb,
        description: result.description,
        alt: result.alt_description,
        photographer: result.user.name,
        photographerUrl: result.user.links.html,
        downloadUrl: result.links.download_location,
    };
}

// Trigger download tracking (Unsplash API guideline)
export async function trackDownload(downloadUrl: string): Promise<void> {
    if (!UNSPLASH_ACCESS_KEY) return;

    await fetch(downloadUrl, {
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
    });
}
