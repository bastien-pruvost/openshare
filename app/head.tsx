export default function RootHead() {
  return (
    <>
      <title>OpenShare.dev</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        content='A website for developers who want to share their personal projects or opensource projects with the community'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://openshare.dev' />
      <meta property='og:image' content='https://openshare.dev/og.jpg' />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://openshare.dev' />
      <meta property='twitter:image' content='https://openshare.dev/og.jpg' />
      <link rel='icon' href='/favicon.ico' />
    </>
  );
}
