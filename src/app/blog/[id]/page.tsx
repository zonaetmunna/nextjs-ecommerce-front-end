type Params = {
  params: {
    id: string;
  };
};
const BlogDetail = ({ params: { id } }: Params) => {
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default BlogDetail;
