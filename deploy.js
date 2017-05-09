const fs = require('fs')

const config = {
    src: 'index.html',
    embeds: [
        {
            src: 'bundle.js',
            find: /<!-- JS-BEGIN -->[\S\s]*<!-- JS-END -->/,
            insert: '<script>{0}</script>'
        }
    ],
    outputDirectory: 'public'
}

fs.readFile(config.src, 'utf8', function (err, srcContents) {

    if (err) {
        return console.log(err)
    }

    const outputContents = config.embeds.reduce((contents, embed) => {

        const embedData = fs.readFileSync(embed.src)
        
        return contents.replace(embed.find, embed.insert.replace('{0}', embedData))
    }, srcContents)

    fs.writeFile(`${config.outputDirectory}/${config.src}`, outputContents, 'utf8', function (err) {

        if (err) {
            return console.log(err)
        }
    })
})