export const photos = Array.from({length: 100}).map((_, index) => ({
  id: index + 1,
  title: `Photo ${index + 1}`,
  thumbnailUrl: `https://picsum.photos/id/${index + 1}/150/150`,
  fullSizeUrl: `https://picsum.photos/id/${index + 1}/1080/720`,
  comments: [],
}));
