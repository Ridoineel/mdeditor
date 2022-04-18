module.exports = function override (config, env) {
    let loarders = config.resolve
    
    loarders.fallback = {
        "fs": false,
        "process": false,
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        
    }

    return config
}