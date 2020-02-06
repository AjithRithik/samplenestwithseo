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
        title: 'second page open',
        description: 'second page open',
        site_name: 'Class 2',
        images: [
          {
            url: 'https://heyhey-static-assets.s3.amazonaws.com/heyheylogo.png',
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
