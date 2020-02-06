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
        title: 'First page open',
        type: 'website',
        images: [
          {
            url: 'https://d3332awe4qr6u8.cloudfront.net/eyJidWNrZXQiOiJoZXloZXktdXNlci1wcm9maWxlLXBpY3R1cmVzIiwia2V5IjoiMTU3NDgwMDA0NjI3NE5GRm5IdFhvbUN5TE9GRy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19',
            width: 80,
            height: 80,
            alt: 'Og Image Alt',
          }
        ],
        description: 'First page open',
        site_name: 'Class 1',
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

