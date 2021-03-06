export default () => ({ // eslint-disable-line

  // link file UUID
  id: '5ae0ac20-39c6-11e7-821a-6027b8a20f23',

  // canonical URL of the published page
  // https://ig.ft.com/martin-shkreli-pharmabro-musical get filled in by the ./configure script
  url: 'https://ig.ft.com/martin-shkreli-pharmabro-musical/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-05-18T05:00:00Z'),

  headline: 'Politics and the English Language',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Political language is designed to make lies sound truthful' +
           'and murder respectable, and to give an appearance of solidity to pure wind',

  topic: {
    name: 'FT Alphaville',
    url: 'https://ftalphaville.ft.com/',
  },

  relatedArticle: {
    // text: 'Related article »',
    // url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  },

  mainImage: {
    title: '',
    description: 'Actor Patrick Swailes Caldwell as Martin Shkreli in "PharmaBro: An American Douchical!"',
    credit: 'Wendy Gundrum/FT montage',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fab39a5fc-3a55-11e7-ac89-b01cc67cfeec?source=ig',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Alexandra Scaggs', url: 'https://ftalphaville.ft.com/author/Alexandra%20Scaggs' },
    { name: 'Joanna S Kao', url: 'https://www.ft.com/stream/authorsId/NWRlMDQ0Y2MtODA3Mi00N2VlLWEyZGItNWRmYTZhNDNiNWNi-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary_large_image',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  twitterRelatedAccounts: ['ftalpha', 'alexandrascaggs', 'joannaskao', 'ftdata'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the "General social" options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
