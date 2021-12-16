const contentfulManagement = require("contentful-management")

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: "CFPAT-CzR1o76trqOalAcV0bn6nGMcbYrKvxrjtML74FpArbY",
    })

    return contentfulClient
        .getSpace("ya3drrqbcqil")
        .then(space => space.getEnvironment("master"))
}