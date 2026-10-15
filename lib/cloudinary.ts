export const cloudinaryConfig = {
  cloudName: "dwsl2ktt2",
  thumbnailOffset: 3,
};

// Public IDs may contain folders with spaces ("Learn Python/..."), which must
// reach Cloudinary as %20.
export function encodePublicId(publicId: string): string {
  return publicId
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export function getVideoThumbnail(
  cloudinaryId: string,
  offset: number = cloudinaryConfig.thumbnailOffset
): string {
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload/so_${offset}/w_800,h_450,c_fill,q_auto,f_auto/${encodePublicId(cloudinaryId)}.jpg`;
}
