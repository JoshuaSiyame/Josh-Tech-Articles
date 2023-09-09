// import modules/packages
import path from "path";
import config from "./webpack.common";
import { merge } from "webpack-merge";

// configuration
const devConfiguration = merge(config, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        // hot: true
    }
});

export default devConfiguration;