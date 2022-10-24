import { useRouter } from 'next/router'

const Book = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Book: {id}</p>
}

export default Book
