import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import Openings from './Openings';

async function getJobOpenings() {
  const res = await fetch(`${STRAPI_BASE_URL}/api/job-openings?populate=*`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    return null;
  } else {
    const response = await res.json();
    return response;
  }
}

async function JobOpenings() {
  const jobs = await getJobOpenings();

  return <>{jobs && <Openings jobs={jobs} />}</>;
}

export default JobOpenings;
