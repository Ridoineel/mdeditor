module.exports = function override (config, env) {
    let loarders = config.resolve
    
    loarders.fallback = {
        "net": false,
        "tls": false,
        "fs": false,
        "child_process": false,
        "url": require.resolve("url/"),
        "assert": require.resolve("assert/"),
        "path": require.resolve("path-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "stream": require.resolve("stream-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "buffer": require.resolve("buffer/"), 
        "util": require.resolve("util/"),
        "os": require.resolve("os-browserify/browser")
    }

    return config
}