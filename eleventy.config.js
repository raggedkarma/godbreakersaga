module.exports = cfg => {
    cfg.addPassthroughCopy("src/styles.css");
    cfg.addPassthroughCopy("src/resources/circle-roster.pdf");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    }
}