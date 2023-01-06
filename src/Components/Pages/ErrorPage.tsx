type ErrorPageProps = {
  message: string;
};

export default function ErrorPage({ message }: ErrorPageProps) {
  return (
    <section className="mt-10 ml-10">
      <h1 className="font-bold text-lg">Opps!</h1>
      {message}
    </section>
  );
}