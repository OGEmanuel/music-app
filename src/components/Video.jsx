const Video = props => {
  const { video } = props;
  return (
    <section>
      <iframe src={video} className="h-[432px] w-full"></iframe>
    </section>
  );
};

export default Video;
