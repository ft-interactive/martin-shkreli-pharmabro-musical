import * as bertha from 'bertha-client';
import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';

export default async () => {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();

  const data = await bertha.get('1ws2VYeSVaGn2ROwF_4zGEerqHFOXsgnTt1FHSKfbWWs', ['metadata|object', 'body|object', 'annotations'], { republish: false }).then(a => a);

  console.log(data);

  return {
    ...d,
    flags,
    onwardJourney,
    data,
    headline: data.metadata.headline || '',
    summary: data.metadata.summary || '',
    title: data.metadata.title || '',
    description: data.metadata.description || '',
    // socialImage: data.metadata.socialImage || '',
    // socialHeadline: data.metadata.socialHeadline || '',
    // socialDescription: data.metadata.socialSummary || '',
    // twitterImage: data.metadata.twitterImage || '',
    // twitterText: data.metadata.twitterText || '',
    // twitterHeadline: data.metadata.twitterHeadline || '',
    // facebookImage: data.metadata.facebookImage || '',
    // facebookHeadline: data.metadata.facebookHeadline || '',
  };
};
