// import modules/packages
import { Configuration as WebpackConfig, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

// custom configuration type
type Configuration = WebpackConfig & {
    devServer?: WebpackDevServerConfig;
};

// webpack configurations
const config: Configuration = {
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?x$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|gif|jpe?g)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new HotModuleReplacementPlugin()
    ]
}

// export config
export default config;