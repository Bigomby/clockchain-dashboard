const env = {};

module.exports = function(ctx) {
  return {
    plugins: ['pouch', 'vuelidate'],

    css: ['app.styl'],

    extras: [ctx.theme.mat ? 'roboto-font' : null, 'material-icons'],

    supportIE: false,

    vendor: {
      add: [],
      remove: [],
    },

    build: {
      env,
      scopeHoisting: true,
      vueRouterMode: 'history',
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/,
        });
      },
    },

    devServer: {
      open: true,
    },

    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnGroup',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QItemSeparator',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardMedia',
        'QCardActions',
        'QCardSeparator',
        'QChip',
        'QTable',
        'QTd',
        'QModal',
        'QField',
        'QInput',
        'QTabs',
        'QTab',
        'QTabPane',
      ],
      directives: ['Ripple'],
      plugins: ['Notify', 'Dialog'],
    },

    animations: [],

    starterKit: '1.0.3',
  };
};
