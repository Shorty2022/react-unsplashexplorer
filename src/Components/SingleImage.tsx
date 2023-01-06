type ImageProps = {
  key: number;
  image: {
    url: string;
    name: string;
  };
};

export default function Image({ image }: ImageProps) {
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-36 h-36"/>
    </div>
  );
}
