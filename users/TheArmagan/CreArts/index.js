import { injectCSS } from "@acord/patcher";
import { persist } from "@acord/extension";

let patches = [];

function loadTheme() {
  let $ = persist.ghost.settings || {};
  
  let unpatch = injectCSS(
    [
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
      $.arcEdition ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/palette/public/arc.css");` : null,
      $.shapeWideSquare ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/shape/wide/square.css");` : null,
      $.shapeWideRound ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/shape/wide/round.css");` : null,
      $.shapeSlimSquircle ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/shape/slim/squircle.css");` : null,
      $.shapeSlimSquare ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/shape/slim/square.css");` : null,
      $.shapeSlimRound ? `@import url("https://crearts-community.github.io/CreArts-Discord/skins/shape/slim/round.css");` : null,
      $.alignmentLeftCombined ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/left/combined.css");` : null,
      $.alignmentLeftDivided ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/left/divided.css");` : null,
      $.alignmentLeftButtons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/left/buttons.css");` : null,
      $.alignmentRightDefault ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/right/default.css");` : null,
      $.alignmentCombined ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/right/combined.css");` : null,
      $.alignmentDivided ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/right/divided.css");` : null,
      $.alignmentButtons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/right/buttons.css");` : null,
      $.alignmentTopDefault ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/top/default.css");` : null,
      $.alignmentTopButtons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/top/buttons.css");` : null,
      $.alignmentBottomDefault ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/bottom/default.css");` : null,
      $.alignmentBottomButtons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/alignment/bottom/buttons.css");` : null,
      $.addonFriendsGrid ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/addons/friends-grid.css");` : null,
      $.addonContextIcons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/addons/context-icons.css");` : null,
      $.addonSettingsIcons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/addons/settings-icons.css");` : null,
      $.addonMentionLinks ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/addons/mention-links.css");` : null,
      $.addonDiscolored ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/addons/discolored.css");` : null,
      $.replaceFonts ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/replace/fonts.css");` : null,
      $.replaceDash ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/replace/dash.css");` : null,
      $.replaceEdited ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/replace/edited.css");` : null,
      $.replaceIcons ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/replace/icons.css");` : null,
      $.moveExploreButtonDown ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/move/button/explore.css");` : null,
      $.moveAddServerButtonDown ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/move/button/add.css");` : null,
      $.removeHelpButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/help.css");` : null,
      $.removeDownloadButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/download.css");` : null,
      $.removeExploreButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/explore.css");` : null,
      $.removeAddServerButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/add.css");` : null,
      $.removeGiftButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/gift.css");` : null,
      $.removeStickerButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/sticker.css");` : null,
      $.removeGıfButton ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/button/gif.css");` : null,
      $.removeStreamPopout ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/stream-popout.css");` : null,
      $.removeDeveloperOptionsMenu ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/menu/developer-options.css");` : null,
      $.removeDismissibleContentsMenu ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/menu/dismissible-contents.css");` : null,
      $.removeHotspotOptionsMenu ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/menu/hotspot-options.css");` : null,
      $.removeHypeSquadMenu ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/menu/hypesquad.css");` : null,
      $.removeRemovePaymentFlowModals ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/remove/menu/payment-flow-modals.css");` : null,
      $.addsHoverAnimation ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/animations/hover.css");` : null,
      $.addsChatInputAnimation ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/animations/chat-input.css");` : null,
      $.addsSidebarAnimation ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/animations/channels-sidebar.css");` : null,
      $.privacyNoTag ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/privacy/user-tag.css");` : null,
      $.customTags ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/custom/tags.css");` : null,
      $.customServer ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/custom/server.css");` : null,
      $.customUser ? `@import url("https://crearts-community.github.io/CreArts-Discord/modules/custom/user.css");` : null,
      `@import url("https://crearts-community.github.io/CreArts-Discord/src/source.css");`,
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
        "name": "Palettes"
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
      },
      {
        "type": "header",
        "name": "Shape"
      },
      {
        "type": "checkbox",
        "name": "Shape Wide Square",
        "property": "shapeWideSquare",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Shape Wide Round",
        "property": "shapeWideRound",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Shape Slim Squircle",
        "property": "shapeSlimSquircle",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Shape Slim Square",
        "property": "shapeSlimSquare",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Shape Slim Round",
        "property": "shapeSlimRound",
        "value": false
      },
      {
        "type": "header",
        "name": "Alignments"
      },
      {
        "type": "checkbox",
        "name": "Alignment Left Combined",
        "property": "alignmentLeftCombined",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Alignment Left Divided",
        "property": "alignmentLeftDivided",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Left Buttons",
        "property": "alignmentLeftButtons",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Right Default",
        "property": "alignmentRightDefault",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Combined",
        "property": "alignmentCombined",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Divided",
        "property": "alignmentDivided",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Buttons",
        "property": "alignmentButtons",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Top Default",
        "property": "alignmentTopDefault",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Top Buttons",
        "property": "alignmentTopButtons",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Bottom Default",
        "property": "alignmentBottomDefault",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Alignment Bottom Buttons",
        "property": "alignmentBottomButtons",
        "value": false
      },
      {
        "type": "header",
        "name": "Addons"
      },
      {
        "type": "checkbox",
        "name": "Addon Friends Grid",
        "property": "addonFriendsGrid",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Addon Context Icons",
        "property": "addonContextIcons",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Addon Settings Icons",
        "property": "addonSettingsIcons",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Addon Mention Links",
        "property": "addonMentionLinks",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Addon Discolored",
        "property": "addonDiscolored",
        "value": true
      },
      {
        "type": "header",
        "name": "Replaces"
      },
      {
        "type": "checkbox",
        "name": "Replace Fonts",
        "property": "replaceFonts",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Replace Dash",
        "property": "replaceDash",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Replace Edited",
        "property": "replaceEdited",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Replace Icons",
        "property": "replaceIcons",
        "value": true
      },
      {
        "type": "header",
        "name": "Moves"
      },
      {
        "type": "checkbox",
        "name": "Move Explore Button down.",
        "property": "moveExploreButtonDown",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Move Add Server Button down.",
        "property": "moveAddServerButtonDown",
        "value": false
      },
      {
        "type": "header",
        "name": "Removes"
      },
      {
        "type": "checkbox",
        "name": "Remove Help Button",
        "property": "removeHelpButton",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Remove Download Button",
        "property": "removeDownloadButton",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Remove Explore Button",
        "property": "removeExploreButton",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove Add Server Button",
        "property": "removeAddServerButton",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove Gift Button",
        "property": "removeGiftButton",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Remove Sticker Button",
        "property": "removeStickerButton",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Remove GIF Button",
        "property": "removeGıfButton",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Remove Stream Popout",
        "property": "removeStreamPopout",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove Developer Options Menu",
        "property": "removeDeveloperOptionsMenu",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove Dismissible Contents Menu",
        "property": "removeDismissibleContentsMenu",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove Hotspot Options Menu",
        "property": "removeHotspotOptionsMenu",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove HypeSquad Menu",
        "property": "removeHypeSquadMenu",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Remove Remove Payment Flow Modals",
        "property": "removeRemovePaymentFlowModals",
        "value": false
      },
      {
        "type": "header",
        "name": "Adds"
      },
      {
        "type": "checkbox",
        "name": "Adds Hover Animation",
        "property": "addsHoverAnimation",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Adds ChatInput Animation",
        "property": "addsChatInputAnimation",
        "value": false
      },
      {
        "type": "checkbox",
        "name": "Adds Sidebar Animation",
        "property": "addsSidebarAnimation",
        "value": false
      },
      {
        "type": "header",
        "name": "Privacy"
      },
      {
        "type": "checkbox",
        "name": "Privacy No Tag",
        "property": "privacyNoTag",
        "value": false
      },
      {
        "type": "header",
        "name": "Customs"
      },
      {
        "type": "checkbox",
        "name": "Custom Tags",
        "property": "customTags",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Custom Server",
        "property": "customServer",
        "value": true
      },
      {
        "type": "checkbox",
        "name": "Custom User",
        "property": "customUser",
        "value": true
      }
    ],
    update() {
      unloadTheme();
      loadTheme();
    }
  }
}