const fs = require("fs");
const path = require("path");

let result = {
    extensions: []
};
let users = fs.readdirSync(path.resolve(__dirname, "./users"));
users.forEach((userName)=>{
    let extensionsPath = path.resolve(__dirname, "./users", userName);
    let extensions = fs.readdirSync(extensionsPath);
    extensions.forEach((extensionName)=>{
        let extensionPath = path.resolve(extensionsPath, extensionName);
        let cfgPath = path.resolve(extensionPath, "./acord.cfg");
        if (!fs.existsSync(cfgPath)) return;
        let cfg = JSON.parse(fs.readFileSync(cfgPath, "utf-8"));
        let manifestPath = path.resolve(extensionPath, cfg.out.directory, "./extension.json");
        if (fs.existsSync(manifestPath)) {
            result.extensions.push({
                manifest: ({...JSON.parse(fs.readFileSync(manifestPath, "utf-8")), "i18n": undefined }),
                user: userName,
                slug: extensionName,
                url: `https://raw.githubusercontent.com/AcordPlugin/themes/main/users/${userName}/${extensionName}/${cfg.out.directory.replace(/^\.?\/?/, "").replace(/\/?$/, "")}/`
            });
        }
    });
})

fs.writeFileSync(
    path.resolve(__dirname, "./index.json"), 
    JSON.stringify(result.extensions.sort((a, b)=>a.manifest.about.name.localeCompare(b.manifest.about.name)), null, 2), 
    "utf-8"
);