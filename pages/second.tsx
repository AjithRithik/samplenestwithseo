import Link from 'next/link'
import { NextSeo } from 'next-seo'

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld
export default () => (
  <>
    <NextSeo
      title="Second Page"
      description="this the Second page"
      openGraph={{
        url: 'https://samplenestwithseo.now.sh/second',
        title: 'Title for the NEXTJS page',
        description: 'No need to learn a new framework. Exporting a static site with Next.js is as easy as a single command.',
        site_name: 'Nextjs',
        images: [
          {
            url: 'https://nextjs.org/static/twitter-cards/learn.png',
            width: 80,
            height: 80,
            alt: 'Og Second',
          }
        ]
      }}
    />
    <h1>SecondPage Added to Page</h1>
    <Link href="/">
      <a>Click to navigate index</a>
    </Link>
  </>
)
