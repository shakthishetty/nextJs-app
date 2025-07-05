import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images:{
    remotePatterns: [
      {
        hostname: 'tse2.mm.bing.net',
        protocol: 'https',
        port: ""
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: ""
      },
      {
 hostname : 'www.freepik.com',
 protocol: 'https',
 port: "",

      },
      {
          hostname:"sp.yimg.com",
       protocol: 'https',
 port: "",
      },
      {
        hostname: 'tse3.mm.bing.net',
        protocol: 'https',
        port: ""
      }
    
    ]

   }
};

export default nextConfig;
