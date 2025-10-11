const {model} = require("mongoose");

const {WatchListSchema} = require("../schema/WatchListSchema");

const WatchListModel = model("watchlist", WatchListSchema);

module.exports = {WatchListModel}