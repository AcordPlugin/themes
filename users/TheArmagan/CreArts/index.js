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
        type: "header",
        name: "Palette"
      },
      {
        type: "checkbox",
        name: "Modern Edition",
        property: "modernEdition",
        value: false,
        condition: "$.modernEdition || !($.revampEdition && $.blurpleEdition)"
      },
      {
        type: "checkbox",
        name: "Blurple Edition",
        property: "blurpleEdition",
        value: false,
        condition: "$.blurpleEdition || !($.modernEdition && $.revampEdition)"
      },
      {
        type: "checkbox",
        name: "Revamp Edition",
        property: "revampEdition",
        value: false,
        condition: "$.revampEdition || !($.modernEdition && $.blurpleEdition)"
      }
    ],
    update() {
      unloadTheme();
      loadTheme();
    }
  }
}