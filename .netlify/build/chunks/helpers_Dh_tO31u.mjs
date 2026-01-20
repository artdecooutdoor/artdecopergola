import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: "py6y7j4v",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: "skWb8YDx6j67rZaVrkcTvFsQPTce1SFjCMsWY6VTUdNMQTmsOE9lWrDM0qqM6dmZFAosksRmOKI8UlIPqKVXKshiHapfYzQAfC6nAnJWQT83hduoeaACKjTQy4Ns9k4UwTq7dERau9zpPU1uzRXAXO5fmjIEZtJkNsrq3M9l0xY0k8aq6320"
});
const builder = imageUrlBuilder(sanityClient);
const imageUrl = (source) => builder.image(source);

export { imageUrl as i, sanityClient as s };
