const resolveProductionUrl = (document) => {
  const url = `http://localhost:3000/${document.slug.current}?preview=preview`;
  return url;
};

export default resolveProductionUrl;
