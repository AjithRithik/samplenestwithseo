import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div>
    <NextSeo
      title="First Page"
      description="this the first page"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'First page open',
        description: 'First page open',
        site_name: 'SiteName',
      }}
    />
    <h1>First Page</h1>
    <p>
      <Link href="/second">
        <a>Click to navigate second</a>
      </Link>
    </p>
  </div>
)

