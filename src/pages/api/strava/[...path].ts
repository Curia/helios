import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const StravaApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const { path } = req.query;

  // User is signed in and req a valid api path
  if (path.length && session) {
    const { accessToken } = session;
    const response = await fetch(
      `${process.env.STRAVA_API_ENDPOINT}/${path.join(`/`)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': `application/x-www-form-urlencoded`,
        },
      },
    );
    const json = await response.json();
    res.status(200).json(json);
  } else {
    // Not Signed in or not valid api path
    res.status(401);
  }
  res.end();
};

export default StravaApi;
