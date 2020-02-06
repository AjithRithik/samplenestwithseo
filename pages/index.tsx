import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div>
    <NextSeo
      title="First Page"
      description="this the first page"
    />
    <h1>First Page</h1>
    <p>
      <Link href="/second">
        <a>Click to navigate second</a>
      </Link>
    </p>
  </div>
)

