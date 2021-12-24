
import { GetStaticPaths } from 'next';
import { openDB } from '../db';
import Index, { getStaticProps } from './';

export default Index;
export { getStaticProps };

export const getStaticPaths: GetStaticPaths = async () => {
    const db = await openDB();
    const { count } = await db
    .from('microphone')
    .select('*', {count: "exact"});
    const numberOfPages = Math.ceil(count / 5.0);
    'select count(*) as total from microphone'
    const paths = Array(numberOfPages- 1).fill('').map((_, index) => {
        return { params: {currentPage: (index + 1).toString()}}
      })

  return {
    fallback: false,
    paths: paths,
  };
};
