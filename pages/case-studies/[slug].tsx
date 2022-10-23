import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useRouter } from 'next/router'

import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

const fetchProject = async (slug: any) => {
    console.log(slug)
    const res = await axios.get(`https://app-portfolio-tk.herokuapp.com/projects?_locale=pl&Slug=${slug}`);
    return res
  };

function CaseStudy(props: any, cos: any) {
    const { query } = useRouter()
    // const { slug } = useParams()
    const { data, status } = useQuery(["project"], () => fetchProject(query.slug));
    console.log(data);
    if (!data?.data.length) {
        console.log('here throw 404');
    }
  return (
    <div>
        <h1>Single Case study page</h1>
    </div>
  );
}

// export function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { 
//           slug: '1.tsx'
//         }
//       }
//     ],
//     fallback: false,
//   };
// }

export default CaseStudy;
