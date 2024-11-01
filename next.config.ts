import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        silenceDeprecations: ["legacy-js-api"],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.freecodecamp.org',
                port: '',
                pathname: '/curriculum/cat-photo-app/**',
            },
        ],
    },
};

export default nextConfig;
