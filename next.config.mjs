/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds : true,
    },
    reactStrictMode : false,
    output : "standalone"
};

export default nextConfig;

