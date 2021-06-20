var globals = (function () {
  return {
    shortenTitle: function (titleString) {
      return titleString.includes(' - ') ?
      titleString.slice(0, titleString.indexOf(' - ')) :
      titleString
    },
  };
})();

export { globals };