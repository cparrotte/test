videojs.registerPlugin('pluginDev', function(options) {
  var player = this,
  overlay = document.createElement('div');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "Becoming a plugin developer";
  player.el().appendChild(overlay);
//  console.log(player.options()["data-custom"])
//  console.log(player);
//  console.log(player.options_);
  console.log(options);

});

