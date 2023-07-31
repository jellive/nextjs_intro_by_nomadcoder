import { useRouter } from 'next/router'
import Seo from '../../components/Seo'

const Detail = ({ params }) => {
  const router = useRouter()
  const [title, id] = params || [] // 뒤의 falsy는 CSR적용하는 방법임.
  console.log(router)
  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  )
}

export default Detail

export const getServerSideProps = ({ params: { params } }) => {
  console.log(params) // query를 받아옴. 이건 서버 콘솔에 뜸.
  return {
    props: { params }
  }
}
