'use client';

import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import AnnouncementAnimation from './AnnouncementAnimation';
import { useEffect, useState } from 'react';
import { Announcement } from '@/types/announcement';

async function getAnnouncements() {
  const res = await fetch(`${STRAPI_BASE_URL}/api/announcements?populate=*`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    return null;
  } else {
    const response = await res.json();
    return response;
  }
}

function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState<Announcement[] | null>();

  useEffect(() => {
    (async () => {
      const response = await getAnnouncements();
      if (response.data) {
        setAnnouncements(response.data);
      }
    })();
  }, []);

  return (
    <>
      {announcements && announcements.length > 0 && (
        <AnnouncementAnimation array={announcements} />
      )}
    </>
  );
}

export default AnnouncementBanner;
