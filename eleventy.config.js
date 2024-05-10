module.exports = cfg => {
    cfg.addPassthroughCopy("src/resources/images/**");
    cfg.addPassthroughCopy("src/resources/fonts/**");
    cfg.addPassthroughCopy("src/resources/*.pdf");
    cfg.addPassthroughCopy("src/worker.js");
    cfg.addPassthroughCopy("src/manifest.json");

    cfg.addPassthroughCopy("src/styles.css");
    cfg.addPassthroughCopy("src/bootstrap.min.css");
    cfg.addPassthroughCopy("src/bootstrap.min.css.map");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    }
}