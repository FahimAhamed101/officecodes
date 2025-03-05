const domainUrl = process?.env?.NEXT_PUBLIC_DOMAIN_URL;
const imageUrl = (url) => {
  if (url) {
    return `${domainUrl}${url}`;
  } else {
    return ``;
  }
};
export default imageUrl;