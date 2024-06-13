const Card = (data) => {
  const { title, image, desc } = data;
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <img src={image} alt="" />
      <p>{desc} </p>
    </div>
  );
};

export default Card;
