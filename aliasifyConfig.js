aliasifyConfig = {
    aliases: {
        "vue": "vue/dist/vue.js"
    },
    verbose: false
}

var b = browserify();
b.transform(aliasify, aliasifyConfig);
