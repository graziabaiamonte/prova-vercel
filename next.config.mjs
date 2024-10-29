/** @type {import('next').NextConfig} */


const nextConfig = {
    basePath: '',
    trailingSlash: true,
    images: {
        minimumCacheTTL: 60,  
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.tonnoauriga.it",
                pathname: "/wp/wp-content/uploads/**",
            },
        ],
    },
};

export default nextConfig;
