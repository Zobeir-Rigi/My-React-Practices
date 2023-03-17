const Mentors = () => {
  const hello = "Hi";
  const mentor = [`ali`, `zo`, `ash`];
  return mentor.map( (el,index) => <p key={index}> {hello + ` ` + el}</p>
    // <p>{Greating()+`  `+ el}</p>
  );
};

export default Mentors;
