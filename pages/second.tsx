import Link from 'next/link'
import { NextSeo } from 'next-seo'

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld
export default () => (
  <>
    <NextSeo
      title="Second Page"
      description="this the Second page"
    />
    <h1>SecondPage Added to Page</h1>
    <Link href="/">
      <a>Click to navigate index</a>
    </Link>
  </>
)
