module.export = {
    plugins: [
        {
            resolve: "gatsby-plugin-create-client-paths",
            options: {
                prefixes: [`/app/dashboard/*`]
            }
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/src/pages`
            }
        }
    ]
}