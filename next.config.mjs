/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['nextpos-s3.s3.ap-southeast-1.amazonaws.com', 'firebasestorage.googleapis.com'],
    }
};

export default nextConfig;
