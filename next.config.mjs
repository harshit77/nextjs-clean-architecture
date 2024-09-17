
// import webpack from "webpack"
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack:(config,{isServer,webpack})=>{
        if(isServer) {
            config.plugins.push(
                new webpack.BannerPlugin({
                    banner:'require("reflect-metadata");',
                    raw:true,
                    entryOnly:true
                })
            )
        }
        return config
    }
};

export default nextConfig;
