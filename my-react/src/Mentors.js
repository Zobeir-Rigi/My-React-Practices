const Mentors = () => {
  const hello = "Hi";
  const mentor = [`ali`, `zo`, `ash`];
  return mentor.map(
    (el) => <p> {hello + ` ` + el}</p>
    // <p>{Greating()+`  `+ el}</p>
  );
};

export default Mentors;
