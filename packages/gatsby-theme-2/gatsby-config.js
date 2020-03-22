module.export = {
    plugins: [
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/src/pages`
            }
        }
    ] 
}