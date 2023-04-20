type props = {src: string};
type grpahCMSImageLoaderType = (props: props) => string;

export const grpahCMSImageLoader: grpahCMSImageLoaderType = ({ src }) => src;

export const sliceText = (str: string) => `${str.slice(0, 30)}...`;