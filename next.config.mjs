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
    async redirects() {
        return [
            {
                source: '/wp/:path*', // Mantiene le richieste per la cartella wp
                destination: '/wp/:path*', // Non modifica la richiesta
                permanent: false, // Cambia a true per un redirect permanente
            },
            {
                source: '/:path*', // Cattura tutte le altre richieste
                destination: 'https://www.siciliagrazia.it/:path*', // Reindirizza al tuo dominio di Aruba
                permanent: false, // Cambia a true per un redirect permanente
            },
        ];
    },
};

export default nextConfig;
