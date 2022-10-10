import { injectCSS } from "@acord/patcher";
import { persist } from "@acord/data";

let patches = [];

function loadTheme() {
  let $ = persist.ghost.settings || {};
  
  let unpatch = injectCSS(
    [
      `@import url("https://crearts-community.github.io/CreArts-Discord/src/source.css");`,
      $.modernEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/discord/modern.css");` : null,
      $.blurpleEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/discord/blurple.css");` : null,
      $.revampEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/discord/revamp.css");` : null,
      $.communityEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/community.css");` : null,
      $.rubyEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/ruby.css");` : null,
      $.emeraldEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/emerald.css");` : null,
      $.sapphireEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/sapphire.css");` : null,
      $.amethystEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/amethyst.css");` : null,
      $.crimsonEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/crimson.css");` : null,
      $.jungleEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/jungle.css");` : null,
      $.hiveEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/hive.css");` : null,
      $.coffeeEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/coffee.css");` : null,
      $.sandstormEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/sandstorm.css");` : null,
      $.luxEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/lux.css");` : null,
      $.charcoalEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/charcoal.css");` : null,
      $.milkshakeEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/crearts/milkshake.css");` : null,
      $.nebulaEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/community/nebula.css");` : null,
      $.lavenderEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/community/lavender.css");` : null,
      $.goonEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/community/goon.css");` : null,
      $.spotifyEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/spotify.css");` : null,
      $.twitchEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/twitch.css");` : null,
      $.guildedEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/guilded.css");` : null,
      $.revoltEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/revolt.css");` : null,
      $.draculaEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/dracula.css");` : null,
      $.nordEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/nord.css");` : null,
      $.solarizedEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/solarized.css");` : null,
      $.yaruEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/yaru.css");` : null,
      $.gruvboxEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/gruvbox.css");` : null,
      $.primerEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/primer.css");` : null,
      $.arcEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/arc.css");` : null
    ].filter(i=>i).join("\n")
  );

  patches.push(unpatch);
}

function unloadTheme() {
  patches.forEach(f => f());
}

export default {
  load() {
    loadTheme();
  },
  unload() {
    unloadTheme();
  },
  settings: {
    data: [
      {
        "type": "header",
        "name": "Palette"
      },
      {
        "type": "checkbox",
        "name": "Modern Edition",
        "property": "modernEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Blurple Edition",
        "property": "blurpleEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Revamp Edition",
        "property": "revampEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Community Edition",
        "property": "communityEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Ruby Edition",
        "property": "rubyEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Emerald Edition",
        "property": "emeraldEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Sapphire Edition",
        "property": "sapphireEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Amethyst Edition",
        "property": "amethystEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Crimson Edition",
        "property": "crimsonEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Jungle Edition",
        "property": "jungleEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Hive Edition",
        "property": "hiveEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Coffee Edition",
        "property": "coffeeEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Sandstorm Edition",
        "property": "sandstormEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Lux Edition",
        "property": "luxEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Charcoal Edition",
        "property": "charcoalEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Milkshake Edition",
        "property": "milkshakeEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Nebula Edition",
        "property": "nebulaEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Lavender Edition",
        "property": "lavenderEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Goon Edition",
        "property": "goonEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Spotify Edition",
        "property": "spotifyEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Twitch Edition",
        "property": "twitchEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Guilded Edition",
        "property": "guildedEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Revolt Edition",
        "property": "revoltEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Dracula Edition",
        "property": "draculaEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Nord Edition",
        "property": "nordEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Solarized Edition",
        "property": "solarizedEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Yaru Edition",
        "property": "yaruEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Gruvbox Edition",
        "property": "gruvboxEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Primer Edition",
        "property": "primerEdition",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Arc Edition",
        "property": "arcEdition",
        "value": false
      }
    ],
    update() {
      unloadTheme();
      loadTheme();
    }
  }
}