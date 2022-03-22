import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  public render(): JSX.Element {
    const fonts = [
      {
        variations: [
          '/fonts/SuisseIntl-Regular.eot',
          '/fonts/SuisseIntl-Regular.otf',
          '/fonts/SuisseIntl-Regular.woff',
        ],
      },
      {
        variations: [
          '/fonts/SuisseIntl-Medium.eot',
          '/fonts/SuisseIntl-Medium.otf',
          '/fonts/SuisseIntl-Medium.woff',
        ],
      },
      {
        variations: [
          '/fonts/SuisseIntl-Bold.eot',
          '/fonts/SuisseIntl-Bold.otf',
          '/fonts/SuisseIntl-Bold.woff',
        ],
      },

      {
        variations: [
          '/fonts/SuisseIntl-Black.eot',
          '/fonts/SuisseIntl-Black.otf',
          '/fonts/SuisseIntl-Black.woff',
        ],
      },
    ];

    return (
      <Html>
        <Head>
          {fonts.map(({ variations }) =>
            variations.map((url) => (
              <link
                key={url}
                rel="preload"
                href={url}
                as="font"
                crossOrigin=""
              />
            ))
          )}
          <link rel="icon" type="image/ico" href="/Favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
