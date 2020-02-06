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
        url: 'https://www.url.ie/a',
        title: 'second page open',
        description: 'second page open',
        site_name: 'SiteName',
      }}
    />
    <h1>SecondPage Added to Page</h1>
    <Link href="/">
      <a>Click to navigate index</a>
    </Link>
  </>
)
