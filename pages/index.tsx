import Link from 'next/link'

export default () => (
  <div>
    <h1>First Page</h1>
    <p>
      <Link href="/second">
        <a>Click to navigate second</a>
      </Link>
    </p>
  </div>
)
