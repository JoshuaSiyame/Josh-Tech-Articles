// import modules/packages
import config from "./webpack.common";
import { merge } from "webpack-merge";

// configuration
const prodConfiguration = merge(config, {
    mode: "production",
    devtool: "source-map",
});

export default prodConfiguration;