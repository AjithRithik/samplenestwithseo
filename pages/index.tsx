import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div>
    <NextSeo
      title="First Page"
      titleTemplate="titleTemplate"
      description="this the first page"
      nofollow={false}
      openGraph={{
        url: 'https://samplenestwithseo.now.sh/',
        title: 'Title for the React page',
        type: 'website',
        images: [
          {
            url: 'https://reactjs.org/logo-og.png',
            width: 80,
            height: 80,
            alt: 'Og Image Alt',
          }
        ],
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        site_name: 'React',
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

