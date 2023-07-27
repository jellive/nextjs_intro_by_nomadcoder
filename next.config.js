/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 자식 컴포넌트를 검사하고 잘못 사용된 부분을 알려줌. true를 강력 권장.
  async redirects() {
    return [
      {
        source: '/contact/:path',
        destination: '/form/:path',
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
